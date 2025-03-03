---
title: Tracking filter rules statistics
sidebar_position: 4
---

:::note

The *Send statistics for ad filters usage* option is disabled by default. Nothing will be sent unless a user manually enables it to help us improve our blocking filters.

:::

### Why do we need ad filters?

Let's start by defining what ad filters are. Thanks to these filters, AdGuard removes ads from websites. They are manually compiled based on your complaints about ads on websites. Ad filters are an essential element of AdGuard — their quality determines the overall quality of AdGuard ad blocking.

However, there is a downside. Over the years, more and more ad filters have been appearing. And the more ad filters are there, the more memory AdGuard consumes, thus slowing down the rendering of web pages. Al mismo tiempo, algunos de los filtros comienzan a expirar, convirtiéndose gradualmente en un peso muerto que no tiene utilidad, solo consume memoria y ralentiza la app.

### ¿Por qué necesitamos estadísticas?

Queremos resolver el problema de las reglas de filtrado obsoletas de una vez por todas. Pero necesitamos tu ayuda para hacerlo. Al recopilar estadísticas sobre las reglas de filtrado utilizadas, detectamos y eliminamos las reglas que ya no se usan. Como resultado, ayudará a todos los que usen AdGuard.

Si tu computadora es lo suficientemente potente, no te afectará. Pero la diferencia será muy notable para los usuarios de netbooks o tabletas de baja potencia.

### ¿Qué tipo de estadísticas se enviarán?

Si habilitas la opción *Enviar estadísticas sobre el uso de filtros de anuncios*, la siguiente información se envía periódicamente:

- Versión de la extensión
- Tipo de navegador (Chrome/Firefox/Opera/Yandex.Browser/Safari).
- Lista de filtros de anuncios habilitados.
- La lista que consiste en los siguientes elementos:
    - *El nombre de dominio del sitio web*
    - *El número de visualizaciones de página recientes*
    - *La lista de reglas de filtrado y el ID de filtro que fueron activados en este sitio web*
    - *El nombre de dominio de las peticiones bloqueadas se envía para las reglas de URL* La lista se crea basándose en las estadísticas de visita del sitio web desde la última vez que se enviaron los datos estadísticos.

Las estadísticas recopiladas se enviarán periódicamente a nuestro servidor para análisis y optimización del filtrado.

Es importante tener en cuenta que todas las estadísticas que obtenemos son promediadas y anonimizadas. No utilizamos estas estadísticas para ningún propósito aparte de optimizar el filtrado, y no vendemos estos datos a terceros. Puedes leer sobre esto en nuestra [Política de privacidad](https://adguard.com/privacy.html).

### ¿Con qué está cargado el de las estadísticas de reglas de filtrado de seguimiento?

Para la gran mayoría de usuarios, el cambio en la velocidad del ordenador no será realmente notable. Sin embargo, los usuarios de netbooks y tabletas pueden notar una ligera desaceleración.

Periódicamente, enviaremos las estadísticas recopiladas al servidor. El tamaño de los datos transmitidos no es muy grande y es comparable al tamaño de una página web.
