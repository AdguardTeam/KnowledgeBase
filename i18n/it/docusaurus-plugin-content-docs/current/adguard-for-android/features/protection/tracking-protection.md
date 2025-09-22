---
title: Protezione dal tracciamento
sidebar_position: 2
---

:::info

Questo articolo riguarda AdGuard per Android, un blocca-inserzioni multifunzionale che protegge il tuo dispositivo a livello di sistema. Per vedere come funziona, [scarica l'app di AdGuard](https://agrd.io/download-kb-adblock)

:::

È possibile accedere al modulo di protezione dal tracciamento toccando la scheda _Protezione_ (seconda icona a sinistra nella parte inferiore dello schermo) e selezionando _Protezione dal tracciamento_.

La _Protezione dal tracciamento_ (precedentemente nota come _Modalità Invisibilità_) impedisce ai siti web di raccogliere informazioni su di te, quali i tuoi indirizzi IP, informazioni sul tuo browser e sistema operativo, risoluzione dello schermo, e la pagina di origine o da cui sei stato reindirizzato. Inoltre, può bloccare i cookie utilizzati dai siti web per contrassegnare il tuo browser, salvare le tue impostazioni personali e le preferenze dell'utente, o riconoscerti alla tua prossima visita.

![Protezione dal tracciamento \*mobile_border](https://cdn.adtidy.org/blog/new/y5fuztracking_protection.png)

La _Protezione dal tracciamento_ dispone di tre livelli preconfigurati di protezione della riservatezza (_Standard_, _Elevata_ e _Estrema_) e un livello definito dall'utente (_Personale_).

Ecco le funzionalità attive dei livelli preconfigurati:

1. **Standard**

   a. _Blocca i tracciatori_. Questa funzionalità usa il filtro _Protezione dal tracciamento_ di AdGuard per proteggerti dai contatori in rete e dagli strumenti di analitica web

   b. _Chiedi ai siti web di non tracciarti_. Questa funzione invia i segnali [Global Privacy Control](https://globalprivacycontrol.org/) e [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) ai siti web che visiti, chiedendo alle applicazioni web di disabilitare il tracciamento della tua attività

   c. _Rimuovi intestazione X-Client-Data_. Questa funzionalità impedisce a Google Chrome di inviare informazioni sulla sua versione e sulle modifiche ai domini di Google (inclusi DoubleClick e Google Analytics)

2. **Elevata**

   a. _Blocca i tracciatori_. Questa funzionalità usa il filtro _Protezione dal tracciamento_ di AdGuard per proteggerti dai contatori in rete e dagli strumenti di analitica web

   b. _Elimina i parametri di tracciamento dagli URL_. Questa funzionalità usa il filtro di tracciamento degli URL di AdGuard per rimuovere i parametri di tracciamento, come `utm_*` e `fb_ref`, dagli URL delle pagine

   c. _Nascondi le tue richieste di ricerca_. Questa funzionalità nasconde le richieste per i siti web visitati da un motore di ricerca

   d. _Chiedi ai siti web di non tracciarti_. Questa funzione invia i segnali [Global Privacy Control](https://globalprivacycontrol.org/) e [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) ai siti web che visiti, chiedendo alle applicazioni web di disabilitare il tracciamento della tua attività

   e. _Autodistruzione dei cookie di terze parti_. Questa funzionalità limita la durata dei cookie di terze parti a 180 minuti

   :::attenzione

   Questa funzionalità elimina tutti i cookie di terze parti, dopo la loro scadenza forzata. Ciò include i tuoi accessi tramite social o altri servizi di terze parti. Potresti dover accedere nuovamente ad alcuni siti web periodicamente, o riscontrare altri problemi correlati ai cookie. Per bloccare soltanto i cookie di tracciamento, usa il livello di protezione _Standard_.

   :::

   f. _Rimuovi intestazione X-Client-Data_. Questa funzionalità impedisce a Google Chrome di inviare le proprie informazioni sulla versione e sulle modifiche ai domini di Google (inclusi DoubleClick e Google Analytics)

3. **Estremo** (precedentemente noto come _Definitivo_)

   a. _Blocca i tracciatori_. Questa funzionalità usa il filtro _Protezione dal tracciamento_ di AdGuard per proteggerti dai contatori in rete e dagli strumenti di analitica web

   b. _Elimina i parametri di tracciamento dagli URL_. Questa funzionalità usa il filtro di tracciamento degli URL di AdGuard per rimuovere i parametri di tracciamento, come `utm_*` e `fb_ref`, dagli URL delle pagine

   c. _Nascondi le tue richieste di ricerca_. Questa funzionalità nasconde le richieste per i siti web visitati da un motore di ricerca

   d. _Chiedi ai siti web di non tracciarti_. Questa funzione invia i segnali [Global Privacy Control](https://globalprivacycontrol.org/) e [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) ai siti web che visiti, chiedendo alle applicazioni web di disabilitare il tracciamento della tua attività

   e. _Autodistruzione dei cookie di terze parti_. Questa funzionalità limita la durata dei cookie di terze parti a 180 minuti

   :::attenzione

   Questa funzionalità elimina tutti i cookie di terze parti, dopo la loro scadenza forzata. Ciò include i tuoi accessi tramite social o altri servizi di terze parti. Potresti dover accedere nuovamente ad alcuni siti web periodicamente, o riscontrare altri problemi correlati ai cookie. Per bloccare soltanto i cookie di tracciamento, usa il livello di protezione _Standard_.

   :::

   f. _Blocca WebRTC_. Questa funzionalità blocca WebRTC, una vulnerabilità nota che può far trapelare il tuo indirizzo IP reale, anche se utilizzi un proxy o una VPN

   g. _Blocca API Push_. Questa funzionalità impedisce ai tuoi browser di ricevere messaggi push dai server

   h. _Blocca API di localizzazione_. Questa funzionalità impedisce ai browser di accedere ai tuoi dati GPS e di determinare la tua posizione

   i. _Nascondi il referente a terze parti_. Questa funzionalità impedisce alle terze parti di conoscere i siti web che visiti. Nasconde l'intestazione HTTP contenente l'URL della pagina iniziale, sostituendolo con uno predefinito o personalizzato, che puoi impostare

   j. _Nascondi il tuo User-Agent_. Questa funzionalità rimuove le informazioni identificative dall'intestazione User-Agent, che include tipicamente il nome e la versione del browser, il sistema operativo, e le impostazioni della lingua

   k. _Rimuovi intestazione X-Client-Data_. Questa funzionalità impedisce a Google Chrome d'inviare le proprie informazioni sulla versione e sulle modifiche ai domini di Google (inclusi DoubleClick e Google Analytics)

Puoi modificare le impostazioni individuali in _Protezione dal tracciamento_ e creare una configurazione personale. Ogni impostazione ha una descrizione che ti aiuterà a capire il suo ruolo. [Leggi di più su cosa fanno le varie impostazioni di _Protezione dal tracciamento_](/general/stealth-mode) e usale con cautela, poiché alcune potrebbero interferire con la funzionalità dei siti web e delle estensioni del browser.
