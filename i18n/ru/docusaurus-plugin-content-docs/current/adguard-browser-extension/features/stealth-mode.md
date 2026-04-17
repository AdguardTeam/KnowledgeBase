---
title: Защита от трекинга (ранее Антитрекинг)
sidebar_position: 3
---

:::info

Эта статья о Браузерном расширении AdGuard, которое защищает только ваш браузер. [Скачайте приложение AdGuard](https://agrd.io/download-kb-adblock), чтобы защитить устройство целиком

:::

Цель _Защиты от трекинга_ — защитить ваши конфиденциальные личные данные от онлайн-трекеров и мошенников. Существуют небольшие различия в функциях защиты от трекинга между браузерами на базе Chromium, которые поддерживают MV3, и не-Chromium браузерами, которые поддерживают MV2.

![Защита от трекинга в браузерах на основе Chromium \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_mv3_trackingProtection.png)

_Защита от трекинга_ в браузерах на базе Chromium

![Защита от трекинга в браузерах, не основанных на Chromium \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_mv2_trackingProtection.png)

_Защита от трекинга_ в не-Chromium браузерах

Функции _Защиты от трекинга_ не позволяют сайтам видеть поисковые запросы, с помощью которых вы нашли их в интернете, автоматически удаляют сторонние куки и куки сайта. Всем этим функциям посвящена [отдельная статья](/general/stealth-mode).

:::note

Браузерные расширения ограничены конкретным браузером и подвержены его техническим ограничениям. Поэтому они не могут предложить все функции защиты от трекинга, доступные в комплексных приложениях для блокировки рекламы.

:::

:::caution

In AdGuard Browser Extension, the _Block WebRTC_ option works globally — it either blocks or allows WebRTC for all websites. It cannot be controlled on a per-site basis. Exception rules like `@@||example.com^$stealth=webrtc` have no effect in the browser extension because the `webrtc` option is not among the [supported `$stealth` modifier options](/general/ad-filtering/create-own-filters#stealth-modifier). If you need per-site WebRTC control, use the full-fledged AdGuard app for Windows, Mac, or Android.

:::
