---
title: Protezione dal tracciamento (precedentemente Modalità invisibilità)
sidebar_position: 4
---

Molti siti web raccolgono informazioni sui propri visitatori, quali il loro indirizzo IP, browser e sistema operativo installati, risoluzione dello schermo e persino la pagina da cui un visitatore è stato reindirizzato. Alcune pagine web utilizzano i cookie per contrassegnare il tuo browser e salvare le tue impostazioni personali e preferenze o per "riconoscerti" alla tua visita successiva. La *Protezione dal tracciamento* protegge le tue informazioni personali da tali sistemi di raccolta dati e statistiche.

Puoi regolare le impostazioni di protezione dal tracciamento secondo le tue necessità. Ad esempio, puoi impedire ai siti web di ricevere richieste dei motori di ricerca che ti ci hanno portato. Puoi eliminare automaticamente i cookie di terze parti e i cookie di prima parte. Puoi anche disattivare la condivisione della geolocalizzazione del browser, che può essere usata per tracciare la tua posizione. Puoi nascondere il tuo vero indirizzo IP o rimpiazzarlo con uno arbitrario.

Di seguito, elencheremo e descriveremo le funzionalità e opzioni principali che puoi controllare nelle impostazioni della **Protezione dal tracciamento**. Le funzioni sono organizzate nelle seguenti sezioni: **Generali**, **Metodi di tracciamento**, **Browser API**, **Tracciamento Windows** e **Varie**.

:::note

Alcune opzioni potrebbero non essere disponibili a seconda del prodotto specifico, a causa di limitazioni del sistema operativo o altre.

:::

## Generali {#general}

### Bloccare tracciatori {#blocktrackers}

Questa funzione blocca i tracciatori e l'analisi web utilizzando il filtro Protezione dal tracciamento AdGuard.

### Elimina i parametri di tracciamento dagli URL {#removetracking}

Se abiliti questa funzionalità, AdGuard utilizzerà il filtro di monitoraggio URL di AdGuard per rimuovere parametri di monitoraggio come `utm_*` e `fb_ref` dagli URL delle pagine.

### Nascondi le richieste di ricerca {#searchqueries}

Questa funzione nasconde la tua richiesta ai siti web che visiti tramite i risultati del motore di ricerca. Ad esempio, quando apri un sito web tramite un motore di ricerca come Google o Yahoo, questa funzione nasconde la richiesta di ricerca che hai usato per trovare quel sito web.

### Chiedi ai siti web di non tracciarmi {#donottrack}

Invia i segnali di [Controllo Globale della Privacy](https://globalprivacycontrol.org/#gpc-spec) e [Non Tracciare](https://en.wikipedia.org/wiki/Do_Not_Track) ai siti web che visiti.

### Altri filtri per la riservatezza {#otherprivacyfilters}

Questa funzione mostra altri filtri sulla riservatezza abilitati in **Filtri**.

:::note

Disponibile in AdGuard per Android e AdGuard per Windows.

:::

## Metodi di tracciamento {#tracking-methods}

### Elimina i cookie di terze parti {#3p-cookie}

Questa funzione impedisce agli inserzionisti di monitorare il tuo comportamento in più pagine limitando la durata dei cookie di terze parti.

I siti web utilizzano i cookie per memorizzare le tue informazioni e preferenze, quali la lingua selezionata, la tua posizione o l'elenco di articoli nel tuo carrello. Quando torni su un sito web, il tuo browser invia al sito web i cookie appartenenti al sito web, consentendo così di "ricordare" i tuoi dati.

I cookie di terze parti sono implementati da un sito web diverso da quello che stai attualmente navigando. Ad esempio, cnn.com può avere un elemento "Mi Piace" di Facebook nella sua pagina iniziale. Questo elemento installa un cookie che Facebook può leggere in seguito. Alcuni inserzionisti usano tali cookie per tracciare quali altri siti web visiti che hanno le loro inserzioni.

Imposta un lasso di tempo (in minuti) al termine del quale tutti i cookie di terze parti saranno eliminati. Per bloccare questi cookie, imposta la loro durata a 0.

:::caution

Quest'impostazione elimina tutti i cookie di terze parti, incluse le informazioni dei tuoi accessi tramite social o altri servizi di terze parti. Potresti dover ripetere periodicamente l'accesso ad alcuni siti web, e riscontrare altre problematiche correlate ai cookie. Per bloccare soltanto i cookie di tracciamento, utilizza il [*filtro di Protezione dal Tracciamento di AdGuard*](/general/ad-filtering/filter-policy/#tracking-protection-filter).

:::

:::note

Disponibile in AdGuard per Android, AdGuard per Windows, AdGuard per macOS ed Estensione AdGuard per browser (browser basati su MV2).

:::

### Elimina i cookie proprietari (non consigliato) {#1p-cookie}

Questa funzione impedisce ai siti web di ricordare i tuoi dati, come le tue credenziali di accesso e le tue preferenze linguistiche, limitando la durata dei cookie di prima parte.

Imposta un lasso di tempo (in minuti) al termine del quale tutti i cookie saranno eliminati. Per bloccare questi cookie, imposta la loro durata a 0.

:::caution

Sconsigliamo di abilitare quest'opzione, poiché potrebbe interferire gravemente con il funzionamento di certi siti web. Se blocchi questi cookie, alcuni siti web possono corrompersi o smettere di funzionare.

:::

:::note

Disponibile in AdGuard per Android, AdGuard per Windows, AdGuard per macOS ed Estensione AdGuard per browser (browser basati su MV2).

:::

### Blocca le intestazioni ETag e If-None-Match {#3p-cache}

Questa funzione rimuove le intestazioni ETag e If-None-Match dalle richieste e dalle risposte per impedirne il tracciamento.

Quando un browser indirizza una pagina, il server gli assegna un ETag. Questo, è utilizzato dal browser per salvare i contenuti della pagina nella cache. Alle successive richieste, il browser invia l'ETag al server corrispondente, dunque, consentendogli di imparare l'identità del visitatore. Finché i file dei siti sono nella cache, l'ETag è inviato ogni volta che il tuo browser accede a questo sito. Se il sito ha dei contenuti incorporati da un altro server (come un'immagine o un iframe), quel server può tracciare le tue attività a tua insaputa.

:::note

Disponibile in AdGuard per Android, AdGuard per Windows e AdGuard per Mac.

:::

### Blocca l'Intestazione di Autorizzazione da terze parti {#3p-auth}

Questa funzione disabilita i dati di autorizzazione memorizzati nella cache che possono essere usati per scopi di tracciamento. Può interferire con la funzionalità di alcune estensioni browser e siti web.

Il valore dell'intestazione "Autorizzazione" è salvato nella cache dal browser e quindi inviato insieme a ogni richiesta a quel dominio. Ciò significa che è utilizzabile per scopi di tracciamento, proprio come i cookie.

:::note

Disponibile in AdGuard per Android, AdGuard per Windows e AdGuard per Mac.

:::

## API del Browser {#browser-api}

:::note

Solo la funzione **Blocca WebRTC** è disponibile per l'Estensione AdGuard per browser. Puoi trovarla nella sezione **Varie**.

:::

### Blocca WebRTC {#webrtc}

Questa funzione blocca WebRTC che può far trapelare il tuo indirizzo IP reale anche se usi un proxy o una VPN.

WebRTC (Comunicazione Web In Tempo Reale) è una tecnologia che abilita il flusso dati diretto tra browser e app. Tuttavia, può consentire ad altri di conoscere il tuo vero indirizzo IP, anche quando usi un proxy o una VPN.

:::caution

Abilitare quest'opzione può interrompere il funzionamento di certe applicazioni del browser, come app di messaggistica, piattaforme di flusso dati, chat o giochi.

:::

### Blocca l'API Push {#push}

Questa funzione blocca le notifiche push dai siti web.

L'API Push consente ai server di inviare messaggi alle applicazioni web, indipendentemente dallo stato di attività del tuo browser. Ciò significa che puoi vedere le notifiche da vari siti web anche quando il tuo browser è minimizzato o chiuso. Abilita quest'opzione per bloccare completamente l'API Push del browser.

### Blocca l'API di Posizione {#location}

Questa funzione impedisce ai siti web di rilevare la tua posizione.

Abilitare quest'opzione impedirà al tuo browser di inviare dati GPS che potrebbero essere usati per determinare la tua posizione, modificare i risultati della tua ricerca o influenzare altrimenti la tua esperienza nel web.

### Blocca Flash {#flash}

Questa funzione aumenta la protezione e accelera il caricamento del sito web bloccando il supporto di Flash Player nei browser.

Il plugin Flash Player è diventato sempre più vulnerabile alle minacce online, quali virus e hacker; potrebbe inoltre influenzare significativamente i tempi di caricamento dei siti web. Attivando quest'impostazione, AdGuard bloccherà l'abilità dei browser di rilevare componenti (quali plugin e oggetti ActiveXObject), che consentano a Flash di mostrare contenuti. Ciò significa effettivamente che i browser non saranno in grado di supportare Flash.

### Blocca Java {#java}

Questa funzione disabilita i plugin JAVA in siti web e servizi web perché l'API presenta gravi inghippi di sicurezza. Non disabilitare JavaScript.

Alcuni siti e servizi web, utilizzano ancora la vecchia tecnologia per supportare i plugin Java. L'API dei plugin in Java, alla base dei plugin in Java, presenta gravi falle di sicurezza. Per scopi di sicurezza, puoi disabilitare tali plugin. Tuttavia, anche se decidi di usare l'opzione "Blocca Java", JavaScript sarà comunque abilitato.

## Monitoraggio di Windows {#windowstracking}

:::note

Queste funzioni sono disponibili solo in AdGuard per Windows.

:::

### Disabilita telemetria Windows {#windowstelemetry}

Questa funzione disabilita l'invio dei dati tecnici sul tuo sistema e sull'uso dell'app.

### Disabilita Windows Recall {#windowsrecall}

Questa funzione impedisce a Windows di acquisire e analizzare schermate dell'attività del tuo spazio di lavoro.

### Disattiva ID Pubblicitario {#advertisingid}

Questa funzione disabilita l'ID pubblicitaria per bloccare il tracciamento del tuo uso dell'app.

### Disabilita la reportistica automatica di Microsoft Defender {#windowsautoreport}

Questa funzione blocca la segnalazione automatica e il campionamento di malware sospetto.

### Disabilita il servizio di instradamento dei messaggi WAP Push {#wappushrouting}

Questa funzione disabilita la raccolta di dati sui problemi dei componenti di Windows.

## Varie {#miscellaneous}

### Nascondi Referente dalle terze parti {#referer}

Questa funzione impedisce alle terze parti di conoscere i siti web che visiti.

Il referente è un'intestazione HTTP utilizzata nelle richieste dal browser al server. Contiene l'URL dell'origine della richiesta. Quando navighi da una pagina all'altra, il Referente salva l'URL della pagina iniziale. Il server che ospita la pagina web di destinazione, spesso, dispone di software che analizzano il Referente, estraendo da esso varie informazioni. Abilitare l'opzione *Nascondi Refereente dalle terze parti* nasconde il sito web corrente ai siti web di terze parti, alterando l'intestazione HTTP.

Inoltre, puoi impostare un valore arbitrario per il Referente, inserendolo nel campo *Referente Personalizzato*. Per utilizzare il Referente predefinito, lascia vuoto il campo.

Tieni presente che per poter filtrare il traffico, le applicazioni AdGuard "intercettano" le richieste dal browser al server. Le richieste effettuate agli server di annunci, tracciamento e di phishing possono essere modificate prima dell'invio al server o bloccate completamente. Lo stesso valore per l'opzione *Nascondi Referente dalle terze parti*: AdGuard intercetta le richieste HTTP(S), in particolare per rimuovere o modificare l'intestazione del Referente, se quest'opzione è abilitata. Tuttavia, ciò accade solo dopo che queste richieste "lasciano" il browser. Ciò significa che se monitori il Referente nel browser (ad esempio, con l'aiuto degli Strumenti per Sviluppatori di Chrome), vedrai il Referente originale, poiché la richiesta non ha ancora raggiunto AdGuard. Puoi utilizzare software come [Fiddler](https://www.telerik.com/fiddler) per assicurarti che il Referente sia alterato correttamente.

A causa della natura stessa di tutte le estensioni del browser, l'Estensione Browser AdGuard funziona "all'interno" del browser. Altererà il Referente in quel momento, quindi, gli Strumenti per Sviluppatori mostreranno il Referente desiderato per le tue richieste.

### Nascondi User Agent {#useragent}

Questa funzione rimuove le informazioni di identificazione dall'intestazione User-Agent.

Quando visiti un sito web, il tuo browser invia le sue informazioni al server. Somiglia a una riga di testo, parte di una richiesta HTTP, che inizia per "User-Agent:”. Solitamente, include il nome e la versione del browser, il sistema operativo e le impostazioni della lingua. Escludiamo l'User-Agent dalle informazioni identificative, così che gli inserzionisti non le possano ottenere.

Inoltre, puoi impostare un valore arbitrario per l'User-Agent, inserendolo nel campo User-Agent Personalizzato. Per utilizzare l'User-Agent predefinito, lasciare il campo vuoto.

:::note

Disponibile in AdGuard per Android, AdGuard per Windows e AdGuard per Mac.

:::

### Nascondi indirizzo IP {#ip}

Questa funzione induce i siti web a credere che tu sia un proxy con l'indirizzo IP che specifichi.

La protezione dal tracciamento non può nascondere il tuo indirizzo IP. Tuttavia, possiamo nasconderlo così che i siti web che visiti penseranno che tu sia un proxy. Ciò, talvolta, aiuta e i siti web ignorano il tuo indirizzo IP reale.

Puoi impostare un indirizzo IP arbitrario, che vorresti fosse percepito dagli altri come tuo, semplicemente inserendolo nel campo corrispondente. Per utilizzare l'indirizzo IP predefinito, lascia vuoto il campo.

:::note

Disponibile in AdGuard per Android, AdGuard per Windows e AdGuard per Mac.

:::

### Rimuovi intestazione X-Client-Data {#xclientdata}

Questa funzione blocca Chrome dall'inviare le proprie informazioni su versione e modifiche ai domini di Google (inclusi DoubleClick e Google Analytics).

:::note

Disponibile in AdGuard per Android, AdGuard per Windows, AdGuard per macOS ed Estensione AdGuard per browser (browser basati su Chromium).

:::

### Proteggiti dall'IAP {#dpi}

Questa funzione modifica il tuo traffico in uscita affinché i sistemi di Ispezione approfondita dei pacchetti (IAP) del tuo ISP non possano rilevare i siti web che visiti. Non possiamo garantire una protezione completa contro tutti i sistemi di Ispezione approfondita dei pacchetti.

L'Ispezione Approfondita dei pacchetti è un sistema di analisi profonda e filtraggio del traffico per contenuto del pacchetto, nonché l'accumulo di dati statistici. Utilizzando questa tecnologia, gli ISP possono controllare il traffico in transito e limitare i contenuti per i loro clienti.

AdGuard può modificare i dati del pacchetto in uscita, così che il client non rientri nei criteri di blocco IAP. Ciò significa che, abilitando quest'opzione, gli utenti possono accedere ai contenuti che desiderano. Non tutti i sistemi IAP sono aggirabili al momento, ma lavoriamo costantemente per migliorare questo aspetto.

:::note

Disponibile in AdGuard per Android, AdGuard per Windows e AdGuard per Mac.

:::

:::attenzione

Se questa funzionalità è abilitata in AdGuard per Windows, potrebbe interferire con l'antivirus ESET. L'Anti-IAP impedirà a ESET di filtrare il traffico, lasciando i siti web inseriti nella lista nera e dannosi sbloccati.

:::
