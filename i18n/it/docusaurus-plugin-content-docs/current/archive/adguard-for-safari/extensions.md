---
title: Estensioni di Safari
sidebar_position: 3
---

:::info

Questo articolo riguarda AdGuard per Safari, che protegge solo il tuo browser Safari. Per proteggere l'intero dispositivo, [scarica l'app AdGuard](https://agrd.io/download-kb-adblock)

:::

## Cosa sono le estensioni di Safari

Le estensioni di Safari sono piccoli programmi che aggiungono funzionalità al browser web di Safari. Consentono agli utenti di personalizzare e migliorare la propria esperienza di navigazione, aggiungendo funzionalità non integrate nativamente nel browser. AdGuard per Safari utilizza le estensioni principalmente per applicare le regole di filtraggio sui siti web aperti su Safari.

## Come funziona

Per bloccare annunci, tracciatori e fastidi sui siti web, AdGuard utilizza le regole di filtraggio. Le regole dai filtri di AdGuard e dai tuoi filtri personalizzati sono convertite affinché siano comprensibili da Safari, e sono integrate in 6 estensioni di Safari:

- AdGuard Generale
- AdGuard Privacy
- AdGuard Social
- AdGuard Sicurezza
- AdGuard Personalizzati
- AdGuard Altri

Ogni estensione di blocco dei contenuti può includere fino a 150.000 regole di filtraggio attive. Il numero di regole in gran parte dei gruppi di filtri non supera le 150.000. Tuttavia, se attivi troppi filtri specifici per lingua o personalizzati, potresti superare il limite. In questi casi, delle regole casuali che superano il limite saranno disabilitate automaticamente, che potrebbe portare a un blocco errato. **Consigliamo vivamente di attivare solo i filtri di cui hai bisogno**.

Esiste anche un altra estensione, responsabile di altre funzionalità: _AdGuard per Safari_, che aggiunge l'icona di AdGuard vicino alla barra di ricerca di Safari e consente l'utilizzo di regole avanzate per bloccare annunci complessi.

![Safari extensions](https://cdn.adtidy.org/content/kb/ad_blocker/safari/adguard-for-safari-icon1.png)

Di più su ogni estensione di seguito.

## Estensioni di blocco dei contenuti

_AdGuard General_ applies rules from filters that you can find in _Filters_ → _Ad blocking_ and _Filters_ → _Language-specific_. Quest'estensione si incentra sul blocco completo degli annunci e include i filtri per gli annunci, in lingue specifiche.

_AdGuard Privacy_ applica le regole dai filtri situati in _Filtri_ → _Privacy_. Blocca i meccanismi di tracciamento e assicura che la tua attività di navigazione resti privata.

_AdGuard Social_ applica regole dai filtri situati in _Filtri_ → _Widget Social_ e _Filtri_ → _Fastidi_. Blocca i popup, i pulsanti social, le finestre dell'assistente online e altri elementi sulle pagine web, che potresti trovare fastidiosi.

_AdGuard Sicurezza_ applica le regole dai filtri situati in _Filtri_ → _Sicurezza_. Quest'estensione identifica e blocca gli elementi potenzialmente dannosi, salvaguardando gli utenti dai contenuti dannosi.

_AdGuard Other_ applies rules from filters that that don't fall under the above-mentioned categories and that are located in _Filters_ → _Other_: _Filter unblocking search ads and self-promotion_, _AdGuard DNS filter_, and _AdGuard Experimental filter_.

_AdGuard Personalizzato_ applica le regole dai filtri che hai aggiunto ai _Filtri Personalizzati_.

Le regole degli utenti e dell'allowlist sono incluse in ogni estensione.

## AdGuard per Safari

_AdGuard per Safari_ attiva l'icona di AdGuard affianco alla barra di ricerca. È utile se desideri configurare rapidamente la protezione su un sito web in particolare, o bloccare manualmente le inserzioni. Inoltre, contiene delle regole avanzate, non convertite nel formato supportato da Safari. Questi includono [regole CSS](/general/ad-filtering/create-own-filters#cosmetic-css-rules), [selettori CSS estesi](/general/ad-filtering/create-own-filters#extended-css-selectors), e [scriplets](/general/ad-filtering/create-own-filters#scriptlets) per bloccare anche gli annunci complessi, come gli annunci su YouTube.

## Come gestire le estensioni di Safari

1. Apri Safari e clicca _Safari_ nell'angolo in alto a sinistra dello schermo per espandere il menu.

   ![Impostazioni Safari \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/safari/adguard-for-safari-settings1.png)

2. Clicca su _Impostazioni..._

3. Seleziona _Estensioni_.

   ![Scheda estensioni](https://cdn.adtidy.org/content/kb/ad_blocker/safari/adguard-for-safari-extensions1.png)

## Perché AdGuard per Safari richiede l'autorizzazione

When enabling the _AdGuard for Safari_ extension, you might notice that it requires **access to web page content** and **access to browsing history**. Ecco perché necessita di tali autorizzazioni:

- L'accesso ai contenuti delle pagine web è necessario per il funzionamento corretto del blocco manuale degli annunci e delle regole di blocco avanzate
- L'accesso alla cronologia di navigazione è necessario per verificare lo stato di protezione sui siti web, e per determinare quali regole avanzate dovrebbero essere applicate

Non utilizziamo questi dati per alcun altro scopo, né li condividiamo con nessuno. Per ulteriori informazioni, puoi consultare la nostra [Politica di riservatezza](https://adguard.com/privacy.html).
