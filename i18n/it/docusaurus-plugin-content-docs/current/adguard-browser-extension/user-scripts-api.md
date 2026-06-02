---
title: API dei script utenti
sidebar_position: 8
---

:::info

Questo articolo riguarda l'Estensione di browser AdGuard, che protegge solo il tuo browser. Per proteggere l'intero dispositivo, [scarica l'app AdGuard](https://adguard.com/download.html?auto=true).

:::

Quando aggiungi un filtro personale o una regola utente, comparirà una notifica che ti chiederà di abilitare la modalità sviluppatore per usare queste funzioni nell'estensione.

![Notifica \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/notification-allow-user-scripts.jpg)

A partire dalla versione 5.2, l'Estensione AdGuard per browser usa l'API dei script utenti. Chrome richiede questa nuova API per seguire le migliori pratiche di sicurezza per l'utente.

## Che cos'è l'API dei script utenti?

L'API dei script utenti è uno strumento che consente alle estensioni di eseguire codici JavaScript personalizzati nelle pagine web. Questi sono spesso usati per modificare o migliorare i siti web in modi che non sono originariamente forniti dal sito web.

Con il passaggio al Manifest V3 di Chrome, molti dei metodi più vecchi per l'iniezione del codice sono limitati o ritardati. Tuttavia, esiste un'eccezione per l'API dei script utenti.

Scopri di più sugli impatti delle politiche MV3 nel nostro [articolo del blog](https://adguard.com/en/blog/review-issues-in-chrome-web-store.html).

## Come abilitare la Modalità sviluppatore

Per usare filtri personali e regole JavaScript nella scheda _Regole utente_, devi prima approntare il tuo browser. Questo fornirà all'estensione un metodo affidabile e sicuro per iniettare gli script nelle pagine web nel momento ottimale. Segui le istruzioni qui sotto a seconda della tua versione di Chrome.

### Per le versioni di Chrome precedenti la 138

Devi abilitare la modalità sviluppatore per le estensioni. Per farlo, apri il menu' di Chrome cliccando i tre puntini nell'angolo in alto a destra, vai su _Estensioni_ ⭢ _Gestisci estensioni_ e attiva la _Modalità sviluppatore_.

![Gestisci Estensioni \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/developer-mode-enable1.jpg)

### Per Chrome versione 138 e successive

È necessario abilitare l'opzione _Consenti codici utente_. Per farlo, apri il menu' di Chrome cliccando i tre puntini nell'angolo in alto a destra, vai su _Estensioni_ ⭢ _Gestisci estensioni_ e attiva l'interruttore _Consenti codici utente_.

![Gestisci Estensioni \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/allow-user-scripts1.jpg)
