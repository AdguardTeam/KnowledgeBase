---
title: Estensione Web per Safari
sidebar_position: 3
---

Le estensioni web aggiungono funzionalità personalizzate a Safari. Puoi trovare [ulteriori informazioni sulle estensioni Web qui](https://developer.apple.com/documentation/safariservices/safari_web_extensions).

![Come appare l'estensione Web su Safari *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/menu_en.png)

L'estensione Web per Safari di AdGuard è uno strumento che sfrutta le nuove funzionalità di iOS 15. Serve a migliorare le capacità di AdGuard per iOS. Con essa, AdGuard può applicare regole di filtraggio avanzate e, infine, bloccare ulteriori annunci.

## Cosa fa

Di default, Safari fornisce soltanto strumenti essenziali ai blocchi di contenuto. Questi strumenti non offrono il livello di prestazioni di blocchi di contenuti di altri sistemi operativi (Windows, Mac, Android). Ad esempio, le app AdGuard su altre piattaforme possono utilizzare strumenti anti-annunci potenti come [regole CSS](/general/ad-filtering/create-own-filters#cosmetic-css-rules), [selettori CSS estesi](/general/ad-filtering/create-own-filters#extended-css-selectors) e [scriptlet](/general/ad-filtering/create-own-filters#scriptlets). Sfortunatamente, queste utilità sono assolutamente insostituibili affrontando casi più complessi, come ad esempio, gli annunci pre-roll su YouTube.

L'estensione Web per Safari di AdGuard completa AdGuard dandogli la capacità di impiegare questi tipi di regole di filtraggio.

Inoltre, l'estensione Web per Safari di AdGuard è utilizzabile per gestire rapidamente AdGuard per iOS, direttamente dal browser. Tocca il pulsante *Estensioni*: è quello con l'icona di un puzzle, a seconda del tipo del tuo dispositivo, si potrebbe trovare a sinistra o a destra della barra degli indirizzi. Trova **AdGuard** nell'elenco e toccalo.

![Menu dell'estensione web *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/ext_adguard_en.png?1)

> Su iPad, l'estensione web per Safari di AdGuard è accessibile direttamente toccando l'icona AdGuard nella barra degli indirizzi del browser.

Vedrai il seguente elenco di opzioni:

- **Abilitare/Disabilitare la protezione sul sito web**. Disattivando l'interruttore, AdGuard verrà disabilitato completamente per il sito web corrente e verrà aggiunta una rispettiva regola di esclusione. Riattivarlo farà riprendere la protezione per il sito web ed eliminerà la regola. Qualsiasi simile modifica richiederà del tempo per essere effettiva.

- **Bloccare manualmente gli elementi sulla pagina**. Tocca il pulsante *Blocca elementi su questa pagina* per richiedere un popup per il blocco degli elementi. Seleziona qualsiasi elemento sulla pagina che desideri nascondere, regola la zona di selezione, poi visualizza le modifiche in anteprima e conferma la rimozione. Una regola di filtraggio corrispondente sarà aggiunta ad AdGuard (che puoi poi disabilitare o eliminare per annullare la modifica).

- **Segnalare un problema**. Scorri in su per visualizzare il pulsante *Segnala un problema*. Utilizzalo per segnalare un annuncio non bloccato o qualsiasi altro problema tu abbia riscontrato sulla pagina corrente.

## Come abilitare l'estensione web per Safari di AdGuard

:::note

L'estensione Safari web di AdGuard richiede l'accesso al contenuto delle pagine web per funzionare, ma non lo utilizza per scopi diversi dal blocco degli annunci.

:::

### Nelle impostazioni di iOS

L'estensione web non è uno strumento autonomo e richiede AdGuard per iOS. Se non hai installato AdGuard per iOS sul tuo dispositivo, sei pregato di [installarla](../installation) e di completare il processo di configurazione per prepararla a funzionare.

Una volta fatto, apri *Impostazioni → Safari → Estensioni*.

![Seleziona "Safari" *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings1_en.png)

![Seleziona "Estensioni" *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings2_en.png)

Trova la sezione **CONSENTI QUESTE ESTENSIONI** e, poi, trova **AdGuard** tra le estensioni disponibili.

![Seleziona "AdGuard" nella sezione CONSENTI QUESTE ESTENSIONI *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings3_en.png)

Toccalo, quindi attiva l'interruttore. Sulla stessa schermata, imposta l'autorizzazione *Tutti i siti web* per AdGuard, a *Consenti* o *Chiedi*. Se scegli *Consenti*, non dovrai dare l'autorizzazione a ogni visita di un nuovo sito web. Se non sai cosa scegliere, seleziona *Chiedi* per concedere le autorizzazioni in base al sito.

![Impostazioni dell'estensione *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings4_en.png)

### Su Safari

Puoi anche abilitare l'estensione di AdGuard dal browser Safari. Per farlo, tocca *Estensioni* (se non lo vedi affianco alla barra degli indirizzi, tocca l'icona `aA`).

![Su Safari tocca l'icona aA *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/safari1_en.png)

Poi, trova l'opzione *Gestire Estensioni* nell'elenco e toccala. Nella finestra aperta, attiva l'interruttore affianco ad **AdGuard**.

![Estensioni *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/safari2_en.png)

![Estensioni *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/safari3_en.png)

Se utilizzi questo metodo, potresti dover comunque andare alle impostazioni di Safar per concedere le autorizzazioni necessarie all'estensione di AdGuard.

Ora, dovresti poter vedere AdGuard tra le estensioni disponibili. Cliccaci sopra e successivamente premi l'icona gialla **i**. Abilita la **Protezione avanzata** toccando il pulsante *Attiva* e confermando l'azione.

:::note

Se utilizzi AdGuard per iOS senza l'abbonamento a Premium, non potrai abilitare la **Protezione avanzata**.

:::

Altrimenti, puoi abilitare la **Protezione avanzata** direttamente dall'app, nella scheda **Protezione** (la seconda da sinistra nella riga di icone in basso).

L'estensione Web per Safari di AdGuard funziona soltanto sulle versioni di iOS 15 e successive.
