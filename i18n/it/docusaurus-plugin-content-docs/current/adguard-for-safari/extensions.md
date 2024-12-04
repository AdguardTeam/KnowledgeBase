---
title: Estensioni di Safari
sidebar_position: 3
---

:::info

Questo articolo riguarda AdGuard per Safari, che protegge solo il tuo browser Safari. Per proteggere il tuo intero dispositivo, [scarica l'applicazione AdGuard](https://agrd.io/download-kb-adblock)

:::

## Cosa sono le estensioni di Safari

Le estensioni di Safari sono piccoli programmi che aggiungono funzionalità al browser web di Safari. Consentono agli utenti di personalizzare e migliorare la propria esperienza di navigazione, aggiungendo funzionalità non integrate nativamente nel browser. AdGuard per Safari utilizza le estensioni principalmente per applicare le regole di filtraggio sui siti web aperti su Safari.

## Come funziona

Per bloccare annunci, tracciatori e fastidi sui siti web, AdGuard utilizza le regole di filtraggio. Le regole dai filtri di AdGuard e dai tuoi filtri personalizzati sono convertite affinché siano comprensibili da Safari, e sono integrate in 6 estensioni di Safari:

- AdGuard Generale
- AdGuard Privacy
- AdGuard Social
- AdGuard Sicurezza
- AdGuard Altri

Ogni estensione di blocco dei contenuti può includere fino a 150.000 regole di filtraggio attive. Il numero di regole in gran parte dei gruppi di filtri non supera le 150.000. Tuttavia, se attivi troppi filtri specifici per lingua o personalizzati, potresti superare il limite. In questi casi, delle regole casuali che superano il limite saranno disabilitate automaticamente, che potrebbe portare a un blocco errato. **Consigliamo vivamente di attivare esclusivamente i filtri di cui necessiti**.

Esiste anche un'altra estensione, responsabile di altre funzionalità: *AdGuard per Safari*, che aggiunge l'icona di AdGuard affianco alla barra di ricerca su Safari e consente l'utilizzo di regole avanzate, per bloccare gli annunci complessi.

![Estensioni di Safari](https://cdn.adtidy.org/content/kb/ad_blocker/safari/adguard-for-safari-icon1.png)

Di più su ogni estensione di seguito.

## Estensioni di blocco dei contenuti

*AdGuard Generale* applica le regole dai filtri che puoi trovare in *Filtri* → *Blocco annunci* e *Filtri* → *Specifici per lingua*. Quest'estensione si incentra sul blocco completo degli annunci e include i filtri per gli annunci, in lingue specifiche.

*AdGuard Privacy* applica le regole per i filtri situati in *Filtri* → *Privacy*. Blocca i meccanismi di tracciamento e assicura che la tua attività di navigazione resti privata.

*AdGuard Social* applica le regole dai filtri situati in *Filtri* → *Widget Social* e *Filtri* → *Fastidi*. Blocca i popup, i pulsanti social, le finestre dell'assistente online e altri elementi sulle pagine web, che potresti trovare fastidiosi.

*AdGuard Sicurezza* applica le regole dai filtri in *Filtri* → *Sicurezza*. Quest'estensione identifica e blocca gli elementi potenzialmente dannosi, salvaguardando gli utenti dai contenuti dannosi.

*AdGuard Altri* applica le regole dai filtri che non rientrano nelle suddette categorie e situati in *Filtri* → *Altri*: *Filtri di sblocco degli annunci di ricerca e auto-promozione*, *Filtro di AdGuard DNS* e *Filtro sperimentale di AdGuard*.

*AdGuard Personalizzato* applica le regole dai filtri che hai aggiunti ai *Filtri personalizzati*.

Le regole degli utenti e dell'allowlist sono incluse in ogni estensione.

## AdGuard per Safari

*AdGuard for Safari* activates the AdGuard icon next to the search bar. It's useful if you want to quickly set up protection for a specific website or block ads manually. It also contains advanced rules that aren't converted to the format supported by Safari. These include [CSS rules](/general/ad-filtering/create-own-filters#cosmetic-css-rules), [extended CSS selectors](/general/ad-filtering/create-own-filters#extended-css-selectors), and [scriptlets](/general/ad-filtering/create-own-filters#scriptlets), which allow AdGuard to block complex ads, such as those on YouTube.

## Come gestire le estensioni di Safari

1. Apri Safari e clicca su *Safari* nell'angolo superiore destro della schermata, per espandere il menu.

    ![Impostazioni di Safari *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/safari/adguard-for-safari-settings1.png)

1. Click *Settings...*

1. Seleziona *Estensioni*.

    ![Scheda delle estensioni](https://cdn.adtidy.org/content/kb/ad_blocker/safari/adguard-for-safari-extensions1.png)

## Perché AdGuard per Safari richiede l'autorizzazione

Abilitando l'estensione *AdGuard per Safari*, potresti notare che richiede l'**accesso ai contenuti delle pagine web** e l'**accesso alla cronologia di navigazione**. Ecco perché necessita di tali autorizzazioni:

- L'accesso ai contenuti delle pagine web è necessario per il funzionamento corretto del blocco manuale degli annunci e delle regole di blocco avanzate
- L'accesso alla cronologia di navigazione è necessario per verificare lo stato di protezione sui siti web, e per determinare quali regole avanzate dovrebbero essere applicate

Non utilizziamo questi dati per alcun altro scopo, né li condividiamo con nessuno. Per ulteriori informazioni, puoi consultare la nostra [Politica sulla privacy](https://adguard.com/privacy.html).
