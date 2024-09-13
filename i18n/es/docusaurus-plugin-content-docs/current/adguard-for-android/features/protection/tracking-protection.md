---
title: Protección de rastreo
sidebar_position: 2
---

:::info

Este artículo trata sobre AdGuard para Android, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel del sistema. Para ver cómo funciona, [descarga la aplicación AdGuard](https://agrd.io/download-kb-adblock)

:::

Se puede acceder al módulo de protección de seguimiento tocando la pestaña _Protección_ (segundo icono a la izquierda en la parte inferior de la pantalla) y luego seleccionando _Protección de seguimiento_.

La _Protección de seguimiento_ (anteriormente conocida como _Modo oculto_) evita que los sitios web recopilen información sobre ti, como tus direcciones IP, información sobre tu navegador y sistema operativo, resolución de pantalla y la página a la que llegaste o desde la que fuiste redirigido. También puedes bloquear las cookies que los sitios web utilizan para marcar tu navegador, guardar tu configuración personal y preferencias de usuario, o reconocerlo en tu próxima visita.

![Protección de seguimiento \*mobile\_border](https://cdn.adtidy.org/blog/new/y5fuztracking_protection.png)

La _Protección de seguimiento_ tiene tres niveles preconfigurados de protección de privacidad (_Estándar_, _Alto_ y _Extremo_) y un nivel definido por el usuario (_Personalizado_).

Estas son las características activas de los niveles preconfigurados:

1. **Estándar**

   a. _Bloquear rastreadores_. Esta función utiliza el _filtro de protección de seguimiento de AdGuard_ para protegerlo de contadores en línea y herramientas de análisis web

   b. _Pedir a los sitios web que no te rastreen_. Esta función envía las señales [Global Privacy Control](https://globalprivacycontrol.org/) y [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) a los sitios web que visitas, pidiendo a las aplicaciones web que desactiven el seguimiento de tu actividad

   c. _Eliminar encabezado X-Client-Data_. Esta función evita que Google Chrome envíe información sobre su versión y modificaciones a los dominios de Google (incluidos DoubleClick y Google Analytics)

2. **Alto**

   a. _Bloquear rastreadores_. Esta función utiliza el _filtro de protección de seguimiento de AdGuard_ para protegerlo de contadores en línea y herramientas de análisis web

   b. _Eliminar parámetros de seguimiento de las URL_. Esta función utiliza el _filtro de seguimiento de URL de AdGuard_ para eliminar parámetros de seguimiento, como `utm_*` y `fb_ref`, de las URL de las páginas

   c. _Ocultar tus consultas de búsqueda_. Esta función oculta consultas de sitios web visitados desde un motor de búsqueda

   d. _Pedir a los sitios web que no te rastreen_. Esta función envía las señales [Global Privacy Control](https://globalprivacycontrol.org/) y [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) a los sitios web que visitas, pidiendo a las aplicaciones web que desactiven el seguimiento de tu actividad

   e. _Autodestrucción de cookies de terceros_. Esta función limita la vida útil de las cookies de terceros a 180 minutos

   :::caution

   Esta función elimina todas las cookies de terceros después de su vencimiento forzado. Esto incluye sus inicios de sesión a través de redes sociales u otros servicios de terceros. Es posible que debas volver a iniciar sesión en algunos sitios web periódicamente o experimentar otros problemas relacionados con las cookies. Para bloquear únicamente las cookies de seguimiento, utiliza el nivel de protección _Estándar_.

   :::

   f. _Eliminar encabezado X-Client-Data_. Esta función evita que Google Chrome envíe información sobre su versión y modificaciones a los dominios de Google (incluidos DoubleClick y Google Analytics)

3. **Extremo** (anteriormente conocido como _Ultimate_)

   a. _Bloquear rastreadores_. Esta función utiliza el _filtro de protección de seguimiento de AdGuard_ para protegerlo de contadores en línea y herramientas de análisis web

   b. _Eliminar parámetros de seguimiento de las URL_. Esta función utiliza el _filtro de seguimiento de URL de AdGuard_ para eliminar parámetros de seguimiento, como `utm_*` y `fb_ref`, de las URL de las páginas

   c. _Ocultar tus consultas de búsqueda_. Esta función oculta consultas de sitios web visitados desde un motor de búsqueda

   d. _Pedir a los sitios web que no te rastreen_. Esta función envía las señales [Global Privacy Control](https://globalprivacycontrol.org/) y [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) a los sitios web que visitas, pidiendo a las aplicaciones web que desactiven el seguimiento de tu actividad

   e. _Autodestrucción de cookies de terceros_. Esta función limita la vida útil de las cookies de terceros a 180 minutos

   :::caution

   Esta función elimina todas las cookies de terceros después de su vencimiento forzado. Esto incluye sus inicios de sesión a través de redes sociales u otros servicios de terceros. Es posible que debas volver a iniciar sesión en algunos sitios web periódicamente o experimentar otros problemas relacionados con las cookies. Para bloquear únicamente las cookies de seguimiento, utiliza el nivel de protección _Estándar_.

   :::

   f. _Bloquear WebRTC_. Esta función bloquea WebRTC, una vulnerabilidad conocida que puede filtrar tu dirección IP real incluso si utilizas un proxy o VPN

   g. _Bloquear API Push_. Esta función evita que tus navegadores reciban mensajes push de los servidores

   h. _Bloquear API de ubicación_. Esta función evita que los navegadores accedan a tus datos de GPS y determinen tu ubicación

   i. _Ocultar Referer de terceros_. Esta función evita que terceros sepan qué sitios web visitas. Oculta el encabezado HTTP que contiene la URL de la página inicial y lo reemplaza por uno predeterminado o personalizado que puedes configurar

   j. _Ocultar tu agente de usuario_. Esta función elimina la información de identificación del encabezado User-Agent, que normalmente incluye el nombre y la versión del navegador, el sistema operativo y la configuración de idioma

   k. _Eliminar encabezado X-Client-Data_. Esta función evita que Google Chrome envíe información sobre su versión y modificaciones a los dominios de Google (incluidos DoubleClick y Google Analytics)

Puedes modificar configuraciones individuales en _Protección de seguimiento_ y crear una configuración personalizada. Cada configuración tiene una descripción que te ayudará a comprender su función. [Read more about what the various _Tracking protection_ settings do](/general/stealth-mode) and utilize them cautiously, as some may interfere with the functionality of websites and browser extensions.
