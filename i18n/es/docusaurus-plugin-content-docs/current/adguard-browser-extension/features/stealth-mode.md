---
title: Protección de seguimiento (anteriormente Modo sigiloso)
sidebar_position: 3
---

:::info

Este artículo trata sobre la extensión de navegador AdGuard, que protege solo tu navegador. Para proteger todo su dispositivo, [descarca la aplicación AdGuard](https://agrd.io/download-kb-adblock)

:::

El propósito de la _Protección de rastreo_ es salvaguardar sus datos personales sensibles de los rastreadores y estafadores en línea. Existen pequeñas diferencias en las características de protección contra el seguimiento entre los navegadores basados en Chromium, que soportan MV3, y los navegadores no basados en Chromium, que soportan MV2.

![Modo sigiloso \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_stealth_mode.png)

_Protección de rastreo_ en navegadores basados en Chromium

![Protección de rastreo en navegadores no basados en Chromium \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_mv2_trackingProtection.png)

_Protección contra el rastreo_ en navegadores que no utilizan Chromium

Las características de _Protección de rastreo_ evitan que los sitios web vean la consulta de búsqueda que usaste para encontrarlos en Internet, eliminan automáticamente las cookies de terceros y del propio sitio web, y más. Un [artículo separado](/general/stealth-mode) fue dedicado a todas estas funciones.

:::note

Las extensiones de navegador están limitadas a un navegador específico y están sujetas a sus restricciones técnicas. Por lo tanto, no pueden ofrecer todas las características de protección contra el seguimiento disponibles en apps completas de bloqueo de anuncios.

:::

:::caution

In AdGuard Browser Extension, the _Block WebRTC_ option works globally — it either blocks or allows WebRTC for all websites. It cannot be controlled on a per-site basis. Exception rules like `@@||example.com^$stealth=webrtc` have no effect in the browser extension because the `webrtc` option is not among the [supported `$stealth` modifier options](/general/ad-filtering/create-own-filters#stealth-modifier). If you need per-site WebRTC control, use the full-fledged AdGuard app for Windows, Mac, or Android.

:::
