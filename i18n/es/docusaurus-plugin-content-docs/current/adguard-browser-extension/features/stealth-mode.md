---
title: Protección de seguimiento (anteriormente Modo sigiloso)
sidebar_position: 3
---

:::info

Este artículo trata sobre la extensión de navegador AdGuard, que protege solo tu navegador. Para proteger todo su dispositivo, [descarca la aplicación AdGuard](https://agrd.io/download-kb-adblock)

:::

El propósito de la _Protección de rastreo_ es salvaguardar sus datos personales sensibles de los rastreadores y estafadores en línea. Existen pequeñas diferencias en las características de protección contra el seguimiento entre los navegadores basados en Chromium, que soportan MV3, y los navegadores no basados en Chromium, que soportan MV2.

_Tracking protection_ in Chromium-based browsers
![Tracking protection in Chromium-based browsers \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/tracking_protection_mv3.png)

_Tracking protection_ in non-Chromium browsers
![Tracking protection in non-Chromium browsers \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/tracking_protection_mv2.png)

_Tracking protection_ features prevent websites from seeing the search query you used to find them on the Internet, automatically delete third-party and website cookies, and more. A [separate article](/general/stealth-mode) is devoted to all these features.

:::note

Browser extensions are limited to a specific browser and are subject to its technical restrictions. Therefore, they cannot offer all the tracking protection features available in full-fledged ad-blocking apps.

:::

:::caution

In AdGuard Browser Extension, the _Block WebRTC_ option works globally — it either blocks or allows WebRTC for all websites. It cannot be controlled on a per-site basis. Exception rules like `@@||example.com^$stealth=webrtc` have no effect in the browser extension because the `webrtc` option is not among the [supported `$stealth` modifier options](/general/ad-filtering/create-own-filters#stealth-modifier). If you need per-site WebRTC control, use the full-fledged AdGuard app for Windows, Mac, or Android.

:::
