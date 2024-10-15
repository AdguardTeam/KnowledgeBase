---
title: Problemas conocidos
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 4
---

Last update: September 17, 2024

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

This problem can be solved in 2 ways:

- By using our [Browser Assistant](https://adguard.com/adguard-assistant/overview.html). This browser extension helps you manage filtering directly from the browser and allows you to inspect the original certificate of any website

  ![Certificate Browser Assistant *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/general/cert-browser.png)

- By visiting the *Recent activity* section in AdGuard for Android or the *Filtering log* section in AdGuard for Windows and AdGuard for Mac. While in the Browser Assistant you can only see the certificate of the website, in Recent activity you can inspect the certificate of any server used in a subrequest or browser, with or without the Browser Assistant. To view the certificate using this method, follow the instructions below.

#### Inspect original certificate in AdGuard for Android

1. Click the Statistics icon on the navigation bar.
2. Go to *Recent activity*.
3. Click the request whose certificate you want to inspect to open the request details.
4. Scroll down to *Original certificate*. Click for more info.

![Recent activity AdGuard for Android *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/general/cert-android.png)

#### Inspect original certificate in AdGuard for Windows

1. Go to *Settings* → *Ad Blocker* → *Filtering log*.
2. Click the request whose certificate you want to inspect to open the request details.
3. Under the *TLS* section, click *View website certificate*.

![Filtering log AdGuard for Windows *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/cert-win.png)

#### Inspect original certificate in AdGuard for macOS

1. Click the gear icon. In the drop-down menu, go to *Advanced* → *Filtering log...*.
2. Click the request whose certificate you want to inspect to open the request details.
3. Click *View certificate*.

![Filtering log AdGuard for Mac *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/cert-mac.png)

### Transparencia del certificado

Gracias a la criptografía moderna, los navegadores generalmente pueden detectar sitios web maliciosos que cuentan con certificados SSL falsificados o falsos. Sin embargo, los mecanismos criptográficos actuales no son tan buenos para detectar sitios web maliciosos si están provistos de certificados emitidos por error o certificados que han sido emitidos por una autoridad de certificación (CA) que ha sido comprometida o se ha vuelto fraudulenta. El objetivo de Certificate Transparency es remediar estas amenazas basadas en certificados al hacer que la emisión y existencia de certificados SSL estén abiertas al escrutinio de propietarios de dominios, CA y usuarios de dominios.

Los productos AdGuard que usan [CoreLibs](https://github.com/AdguardTeam/CoreLibs/) a partir de la versión **1.11** implementarán una política basada en la [Política de transparencia de certificados de Chrome](https://googlechrome.github.io/CertificateTransparency/ct_policy.html).

## ¿Tienes comentarios o sugerencias?

Si deseas agregar algo, informar algún error o hacer una pregunta, contáctanos a: `devteam@adguard.com`.
