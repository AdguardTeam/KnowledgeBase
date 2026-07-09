---
title: Problemas conocidos
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 4
---

Última actualización: 17 de septiembre de 2024

Para comprender este artículo es posible que se requieran algunos conocimientos básicos sobre cifrado, TLS y HTTPS.

Primero, observa este diagrama simple que muestra la estructura general del protocolo HTTPS:

![¿Qué es el filtrado HTTPS?](https://cdn.adtidy.org/public/Adguard/Blog/https/what_is_https_filtering.png)

AdGuard copia las propiedades de la conexión TLS que utiliza tu navegador:

- AdGuard utiliza la misma versión de TLS
- AdGuard utiliza los mismos métodos de cifrado que tu navegador

En realidad, significa que si utilizas un navegador moderno y seguro, tendrá en cuenta todos los problemas conocidos de TLS y no intentará utilizar cifrados inseguros.

**¿Qué hace AdGuard cuando existen dudas sobre la validez del certificado?** En estos casos, AdGuard deja de filtrar por completo todas las conexiones a este dominio y deja al navegador a cargo de todas las decisiones.

## Problemas conocidos

El filtrado HTTPS en AdGuard tiene sus desventajas. Está previsto que casi todos ellos se eliminen en las próximas versiones de AdGuard.

A continuación se enumeran todos los problemas que conocemos y el tiempo estimado de solución.

### Inspección del certificado original

La desventaja más importante del mecanismo de filtrado HTTPS es que oculta el certificado real de un sitio web. No puedes simplemente verificar su certificado original porque solo puedes ver el emitido por AdGuard.

Este problema se puede resolver de 2 maneras:

- Usando nuestro [Asistente de AdGuard](https://adguard.com/adguard-assistant/overview.html). Esta extensión del navegador te ayuda a administrar el filtrado directamente desde el navegador y te permite inspeccionar el certificado original de cualquier sitio web

  ![Certificado del Asistente de navegador *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/general/cert-browser.png)

- Al visitar la sección de *Actividad reciente* en AdGuard para Android o la sección *Registro de filtrado* en AdGuard para Windows y AdGuard para macOS. Mientras que en el Asistente del navegador solo puedes ver el certificado del sitio web, en Actividad reciente puedes inspeccionar el certificado de cualquier servidor utilizado en una subsolicitud o navegador, con o sin el Asistente de navegador. Para ver el certificado usando este método, sigue las instrucciones a continuación.

#### Inspeccionar certificado original en AdGuard para Android

1. Haz clic en el icono de estadísticas en la barra de navegación.
2. Ve a *Actividad reciente*.
3. Haz clic en la petición cuyo certificado deseas inspeccionar para abrir los detalles de la petición.
4. Desplázate hacia abajo hasta *Certificado original*. Haz clic para más información.

![Actividad reciente AdGuard para Android *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/general/cert-android.png)

#### Inspeccionar certificado original en AdGuard para Windows

1. Ve a *Configuración* → *Bloqueador de anuncios* → *Registro de filtrado*.
2. Haz clic en la petición cuyo certificado deseas inspeccionar para abrir los detalles de la petición.
3. Bajo la sección *TLS*, haz clic en *Ver certificado del sitio web*.

![Registro de filtrado de AdGuard para Windows *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/cert-win.png)

#### Inspecciona el certificado original en AdGuard para macOS

1. Haz clic en el icono de engranaje. En el menú desplegable, ve a *Avanzado* → *Registro de filtrado...*.
2. Haz clic en la petición cuyo certificado deseas inspeccionar para abrir los detalles de la petición.
3. Haz clic en *Ver certificado*.

![Registro de filtrado de AdGuard para Mac *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/cert-mac.png)

### Transparencia del certificado

Gracias a la criptografía moderna, los navegadores generalmente pueden detectar sitios web maliciosos que cuentan con certificados SSL falsificados o falsos. Sin embargo, los mecanismos criptográficos actuales no son tan buenos para detectar sitios web maliciosos si están provistos de certificados emitidos por error o certificados que han sido emitidos por una autoridad de certificación (CA) que ha sido comprometida o se ha vuelto fraudulenta. El objetivo de Certificate Transparency es remediar estas amenazas basadas en certificados al hacer que la emisión y existencia de certificados SSL estén abiertas al escrutinio de propietarios de dominios, CA y usuarios de dominios.

Los productos AdGuard que usan [CoreLibs](https://github.com/AdguardTeam/CoreLibs/) a partir de la versión **1.11** implementarán una política basada en la [Política de transparencia de certificados de Chrome](https://googlechrome.github.io/CertificateTransparency/ct_policy.html).

## ¿Tienes comentarios o sugerencias?

Si deseas agregar algo, informar algún error o hacer una pregunta, contáctanos a: `devteam@adguard.com`.
