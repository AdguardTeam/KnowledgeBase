---
title: Proteção contra rastreamento (Modo invisível)
sidebar_position: 3
---

:::info

Este artigo é sobre a extensão de navegador AdGuard, que protege apenas o seu navegador. Para proteger todo o seu dispositivo, [baixe o aplicativo AdGuard](https://agrd.io/download-kb-adblock)

:::

O objetivo da _Proteção contra rastreamento_ é proteger seus dados pessoais sensíveis contra rastreadores online e fraudadores. Existem pequenas diferenças nos recursos de proteção contra rastreamento entre navegadores baseados em Chromium, que suportam MV3, e navegadores não baseados em Chromium, que suportam MV2.

![Stealth Mode \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_stealth_mode.png)

_Proteção contra rastreamento_ em navegadores baseados no Chromium

![Proteção contra rastreamento em navegadores que não sejam Chromium \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_mv2_trackingProtection.png)

Algumas das opções do _Modo Invisível_ disponíveis em aplicativos completos não estão presentes nas extensões do navegador devido a restrições técnicas.

Os recursos de _Proteção contra rastreamento_ impedem que os sites vejam a consulta de pesquisa que você usou para encontrá-los na Internet, excluem automaticamente cookies de terceiros e de sites, e muito mais. Um [artigo separado](/general/stealth-mode) é dedicado a todos esses recursos.

:::note

As extensões de navegador são limitadas a um navegador específico e estão sujeitas às suas restrições técnicas. Portanto, não podem oferecer todos os recursos de proteção contra rastreamento disponíveis em aplicativos completos de bloqueio de anúncios.

:::

:::caution

In AdGuard Browser Extension, the _Block WebRTC_ option works globally — it either blocks or allows WebRTC for all websites. It cannot be controlled on a per-site basis. Exception rules like `@@||example.com^$stealth=webrtc` have no effect in the browser extension because the `webrtc` option is not among the [supported `$stealth` modifier options](/general/ad-filtering/create-own-filters#stealth-modifier). If you need per-site WebRTC control, use the full-fledged AdGuard app for Windows, Mac, or Android.

:::
