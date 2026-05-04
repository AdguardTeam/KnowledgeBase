---
title: Protezione dal tracciamento (Modalità Invisibilità)
sidebar_position: 3
---

:::info

Questo articolo riguarda l'Estensione di browser AdGuard, che protegge solo il tuo browser. Per proteggere l'intero dispositivo, [scarica l'app AdGuard](https://agrd.io/download-kb-adblock)

:::

Lo scopo della _Protezione dal tracciamento_ è di salvaguardare i tuoi dati personali sensibili dai tracciatori e truffatori in rete. Ci sono lievi differenze nelle funzioni di protezione del tracciamento tra i browser basati su Chromium, che supportano MV3, e i browser non basati su Chromium, che supportano MV2.

![Protezione dal tracciamento nei browser basati su Chromium \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_mv3_trackingProtection.png)

_Protezione dal tracciamento_ nei browser basati su Chromium

![Protezione dal tracciamento nei browser non Chromium \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_mv2_trackingProtection.png)

_Protezione dal tracciamento_ nei browser non basati su Chromium

Le funzioni di _Protezione dal tracciamento_ impediscono ai siti web di vedere la richiesta di ricerca usata per trovarli nella rete globale, eliminano automaticamente i cookie di terze parti e del sito web, e altro ancora. Un [articolo separato](/general/stealth-mode) è dedicato a tutte queste caratteristiche.

:::note

Le estensioni per browser sono limitate a un browser specifico e sono soggette alle sue restrizioni tecniche. Pertanto, non possono offrire tutte le funzioni di protezione dal tracciamento disponibili nelle app di blocco delle inserzioni complete.

:::

:::caution

Nell'estensione AdGuard per browser, l'opzione _Blocca WebRTC_ funziona globalmente — blocca o consente WebRTC per tutti i siti web. Non può essere controllato per ogni singolo sito. Le Regole d'eccezione come `@@||example.com^$stealth=webrtc` non hanno effetto nell'estensione per browser perché l'opzione `webrtc` non è tra le [opzioni del modificatore `$stealth` gestite](/general/ad-filtering/create-own-filters#stealth-modifier). Se hai bisogno di un controllo WebRTC per ogni singolo sito, usa l'app completa AdGuard per Windows, Mac o Android.

:::
