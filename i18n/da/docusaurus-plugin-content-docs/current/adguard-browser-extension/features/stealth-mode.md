---
title: Sporingsbeskyttelse (tidligere Skjult tilstand (Stealth Mode))
sidebar_position: 3
---

:::info

Denne artikel omhandler AdGuard Browser Extension, der kun beskytter webbrowseren. For at beskytte hele enheden, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

Formålet med _Sporingsbeskyttelse_ er at beskytte følsomme personlige data mod onlinetrackere og svindlere. Der er små forskelle i sporingsbeskyttelsesfunktionerne mellem Chromium-baserede webbrowsere, som understføtter MV3, og ikke-Chromium-webbrowsere, som understføtter MV2.

_Sporingsbeskyttelse_ i Chromium-baserede webbrowsere
![Sporingsbeskyttelse i Chromium-baserede webbrowsere \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/tracking_protection_mv3.png)

_Sporingsbeskyttelse_ i ikke-Chromium-webbrowsere
![Sporingsbeskyttelse i ikke-Chromium-webbrowsere \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/tracking_protection_mv2.png)

Funktionaliteten _Sporingsbeskyttelse_ forhindrer websteder i at se den søgeforespørgsel, der blev brugt til at finde dem på internet, automatisk slette tredjeparts- og webstedscookies mv. En [særskilt artikel](/general/stealth-mode) is devoted to all these features.

:::note

Webbrowserudvidelser er begrænset til en bestemt webbrowser og er underlagt dens tekniske restriktioner. De kan derfor ikke tilbyde alle de sporingsbeskyttelsesfunktioner, som findes i fuldt udviklede adblocking-apps.

:::

:::caution

I AdGuard Browser Extension fungerer indstillingen _Blokér WebRTC_ globalt — den enten blokerer eller tillader WebRTC for alle websteder. Det kan ikke styres pr. websted. Undtagelsesregler, såsom `@@||example.com^$stealth=webrtc`, har ingen effekt i webbrowserudvidelsen, da `webrtc`-indstillingen ikke er blandt de [understøttede `$stealth`-modifikatorindstillinger](/general/ad-filtering/create-own-filters#stealth-modifier). Ved behov for WebRTC-styring pr. websted, benyt den komplette AdGuard-app til Windows, Mac eller Android.

:::
