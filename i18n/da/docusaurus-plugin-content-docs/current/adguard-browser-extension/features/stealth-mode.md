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

## Blokér fingerprinting {#fingerprinting}

Fra version 5.6 har sektionen _Generel tilstand_ i _Sporingsbeskyttelse_ indstillingen _Blokér fingerprinting_. Det ændrer billederne, som websteder læser fra et canvas, en smule, så websteder ikke kan bruge dem til at identificere webbrowseren og enheden. En [særskilt artikel](/general/stealth-mode#fingerprinting) beskriver, hvordan det fungerer.

Indstillingen er slået fra som standard. Det virker kun, mens AdGuard-beskyttelse og _Sporingsbeskyttelse_ er slået til. Ændringer i indstillingen, hvidlisten og brugerregler anvendes på sider, som åbnes eller genindlæses efterfølgende.

_Blokér fingerprinting_ er tilgængelig i alle webbrowsere, som AdGuard Browser Extension understøtter, herunder Firefox til Android. Hvor tidligt beskyttelsen starter, afhænger af webbrowseren:

- I [MV3-versionen](/adguard-browser-extension/mv3-version) af udvidelsen og i Firefox 128 eller senere starter beskyttelsen før webstedets egne scripts.
- I MV2-versionen til Chromium-baserede webbrowsere kan beskyttelsen starte for sent på nogle sider, så et websted kan læse det oprindelige billede.
- I Firefox-versioner tidligere end 128 starter beskyttelsen før webstedets egne scripts, undtagen på websteder med en striks Content Security Policy: Dér kan den starte for sent eller slet ikke.

I MV3-versionen kræver _Blokér fingerprinting_ den samme webbrowserindstilling som tilpassede filtre: _Tillad brugerscripts_ eller _Udviklertilstand_ i Chrome-versioner før 138. Mens valgmuligheden er slået til, og indstillingen er slået fra, viser AdGuard en påmindelse under valgmuligheden. Læs, [hvordan indstillingen aktiveres](/adguard-browser-extension/user-scripts-api). Returnér dernæst til siden _Sporingsbeskyttelse_ i AdGuard-indstillingerne: Det er ikke nødvendigt at slå valgmuligheden fra og til igen.

I private vinduer virker beskyttelsen kun, hvis AdGuard tillades at køre dér.

Beskyttelsen er slået fra på websteder på [hvidlisten](/adguard-browser-extension/features/filters#allowlist). Når _Invertér hvidliste_ er slået til, virker den kun på websteder fra listen. For kun at slå _Blokér fingerprinting_ fra for et websted og beholde andre _Sporingsbeskyttelse_-funktioner, tilføj en brugerregel såsom `@@||example.com^$stealth=fingerprinting`. Læs mere om [`$stealth`-modifikatoren](/general/ad-filtering/create-own-filters#stealth-modifier) og dens [begrænsninger](/general/ad-filtering/create-own-filters#stealth-modifier-limitations).

I Firefox kan en ramme fra et andet websted, såsom en indlejret widget, muligvis ikke vide, hvilken side den er på: Altid i versioner tidligere end 148 og i senere versioner, når siden skjuler sin adresse for rammen. En sådan ramme får det samme resultat på ethvert websted, der indlejrer den, og hvidlisten deaktiverer ikke beskyttelsen i den. For at slå beskyttelsen fra i en sådan ramme, tilføj en regel for rammens domæne, såsom `@@||widget.example.com^$stealth=fingerprinting`.
