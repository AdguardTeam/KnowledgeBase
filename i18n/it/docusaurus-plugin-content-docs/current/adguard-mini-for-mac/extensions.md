---
title: Estensioni di Safari
sidebar_position: 3
---

:::info

Questo articolo riguarda AdGuard Mini per Mac, che protegge solo il tuo browser Safari. Per proteggere completamente il tuo Mac, [scarica l'app AdGuard](https://agrd.io/download-kb-adblock)

:::

## Cosa sono le estensioni di Safari

Le estensioni di Safari sono piccoli programmi che aggiungono funzionalità al browser web di Safari. Consentono agli utenti di personalizzare e migliorare la propria esperienza di navigazione, aggiungendo funzionalità non integrate nativamente nel browser. AdGuard Mini per Mac usa le estensioni principalmente per applicare le regole di filtraggio nei siti web aperti con Safari.

## Come funziona

Per bloccare annunci, tracciatori e fastidi sui siti web, AdGuard utilizza le regole di filtraggio. Le regole dai filtri di AdGuard e dai tuoi filtri personali sono convertite affinché siano comprensibili da Safari, e sono integrate in 6 estensioni Safari:

- AdGuard Generale
- AdGuard Privacy
- AdGuard Social
- AdGuard Sicurezza
- AdGuard Personalizzati
- AdGuard Altri

Ogni estensione di blocco dei contenuti può includere fino a 150.000 regole di filtraggio attive. Il numero di regole in gran parte dei gruppi di filtri non supera le 150.000. Tuttavia, se attivi troppi filtri specifici per lingua o personalizzati, potresti superare il limite. In questi casi, delle regole casuali che superano il limite saranno disabilitate automaticamente, che potrebbe portare a un blocco errato. **Consigliamo vivamente di attivare solo i filtri di cui hai bisogno**.

Esiste anche un altra estensione, responsabile di altre funzionalità: _AdGuard per Safari_, che aggiunge l'icona di AdGuard vicino alla barra di ricerca di Safari e consente l'utilizzo di regole avanzate per bloccare annunci complessi.

![Estensioni Safari](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/check-extensions.png)

Di più su ogni estensione di seguito.

## Estensioni di blocco dei contenuti

_AdGuard generale_ applica le regole dai filtri che puoi trovare in _Impostazioni_ → _Filtri_ → _Blocco annunci_ e _Specifici per lingua_. Quest'estensione si incentra sul blocco completo degli annunci e include i filtri per gli annunci, in lingue specifiche.

_AdGuard Privacy_ applica le regole dai filtri situati in _Filtri_ → _Privacy_. Blocca i meccanismi di tracciamento e assicura che la tua attività di navigazione resti privata.

_AdGuard Social_ applica regole dai filtri situati in _Filtri_ → _Widget Social_ e _Filtri_ → _Fastidi_. Blocca i popup, i pulsanti dei social, le finestre dell'assistenza online e altri elementi sulle pagine web che potresti trovare fastidiosi.

_AdGuard Sicurezza_ applica le regole dai filtri situati in _Filtri_ → _Sicurezza_. Quest'estensione identifica e blocca gli elementi potenzialmente dannosi, salvaguardando gli utenti dai contenuti dannosi.

_AdGuard Altri_ applica le regole dai filtri che non rientrano nelle suddette categorie e sono situati in _Filtri_ → _Altro_: _Filtri di sblocco degli annunci di ricerca e auto-promozione_, _Filtro di AdGuard DNS_ e _Filtro sperimentale AdGuard_.

_AdGuard Personalizzato_ applica le regole dai filtri che hai aggiunto ai _Filtri Personalizzati_.

Le regole utente e dell'allowlist sono incluse in ogni estensione.

## AdGuard per Safari

_AdGuard per Safari_ attiva l'icona di AdGuard affianco alla barra di ricerca. È utile se vuoi configurare rapidamente la protezione per un sito web in particolare o bloccare manualmente gli annunci.

L'estensione _AdGuard per Safari_ contiene delle regole avanzate, non convertite nel formato supportato da Safari. Questi includono [regole CSS](/general/ad-filtering/create-own-filters#cosmetic-css-rules), [selettori CSS estesi](/general/ad-filtering/create-own-filters#extended-css-selectors), e [scriplets](/general/ad-filtering/create-own-filters#scriptlets) per bloccare anche gli annunci complessi, come gli annunci su YouTube.

## Come gestire le estensioni di Safari

1. Apri Safari e clicca _Safari_ nell'angolo in alto a sinistra dello schermo per espandere il menu.

   ![Impostazioni Safari \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/safari/adguard-for-safari-settings1.png)

2. Clicca su _Impostazioni..._

3. Seleziona _Estensioni_.

   ![Scheda estensioni](https://cdn.adtidy.org/content/kb/ad_blocker/safari/adguard-for-safari-extensions1.png)

## Perché AdGuard per Safari richiede l'autorizzazione

Abilitando l'estensione _AdGuard per Safari_, potresti notare che richiede **l'accesso al contenuto delle pagine web** e **l'accesso alla cronologia di navigazione**. Ecco perché necessita di tali autorizzazioni:

- L'accesso ai contenuti delle pagine web è necessario per il corretto funzionamento del blocco manuale degli annunci e delle regole di blocco avanzate
- L'accesso alla cronologia di navigazione è necessario per verificare lo stato di protezione sui siti web, e per determinare quali regole avanzate dovrebbero essere applicate

Non utilizziamo questi dati per alcun altro scopo, né li condividiamo con nessuno. Per ulteriori informazioni, puoi consultare la nostra [Politica di riservatezza](https://adguard.com/privacy.html).
