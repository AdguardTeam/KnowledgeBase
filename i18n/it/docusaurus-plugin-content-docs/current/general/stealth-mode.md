---
title: Modalità Invisibilità
sidebar_position: 4
---

Molti siti web raccolgono informazioni sui propri visitatori, quali il loro indirizzo IP, browser e sistema operativo installati, risoluzione dello schermo e persino la pagina da cui un visitatore è stato reindirizzato. Alcune pagine web utilizzano i cookie per contrassegnare il tuo browser e salvare le tue impostazioni personali e preferenze o per "riconoscerti" alla tua visita successiva. La Modalità Invisibilità salvaguarda le tue informazioni personali da tali sistemi di raccolta di dati e statistiche.

Puoi regolare in modo flessibile il funzionamento della Modalità Invisibilità: ad esempio, puoi impedire al sito web di ricevere la richiesta di ricerca che hai utilizzato per trovarlo su Internet, eliminare automaticamente i cookie di terze parti, disattivare la condivisione della posizione del browser, utilizzabile per tracciare la tua posizione e nascondere il tuo vero indirizzo IP o persino sostituirlo con uno arbitrario.

Di seguito, elencheremo e descriveremo le funzionalità e opzioni principali che puoi controllare nelle impostazioni della **Modalità Invisibilità**. Sono divise in quattro gruppi: **Generali**, **Metodi di tracciamento**, **API del Browser** e **Varie**.

:::note

Alcune opzioni potrebbero non essere disponibili a seconda del prodotto specifico, a causa di limitazioni del sistema operativo o altre.

:::

## Generali {#general}

### Nascondi le tue richieste di ricerca {#searchqueries}

Quando vieni diretto a un sito web da Google, Yahoo o qualsiasi altro motore di ricerca, quest'opzione nasconde la richiesta di ricerca che hai utilizzato per trovare quel sito web.

### Chiedi ai siti web di non tracciarti {#donottrack}

Invia i segnali di [Controllo Globale della Privacy](https://globalprivacycontrol.org/#gpc-spec) e [Non Tracciare](https://en.wikipedia.org/wiki/Do_Not_Track) ai siti web che visiti.

### Elimina i parametri di tracciamento dagli URL

Se abiliti quest'opzione, AdGuard eliminerà i parametri di tracciamento come `utm_*` e `fb_ref` dagli URL delle pagine.

### Metodi di tracciamento {#tracking-methods}

### Autodistruzione dei cookie di terze parti {#3p-cookie}

I siti web utilizzano i cookie per memorizzare le tue informazioni e preferenze, quali la lingua selezionata, la tua posizione o l'elenco di articoli nel tuo carrello. Quando torni su un sito web, il tuo browser reinvia i cookie a esso appartenenti, che gli consentono di "ricordare" i tuoi dati.

I cookie di terze parti sono quelli implementati da un sito web differente da quello su cui stai correntemente navigando. Ad esempio, cnn.com potrebbe contenere un widget "Mi Piace" di Facebook sulla sua pagina home. Questo, implementerà un cookie che potrebbe essere letto in seguito da Facebook. Alcuni inserzionisti utilizzano tali cookie per tracciare quali altri siti visiti, in cui sono inseriti i loro annunci.

Imposta un periodo di tempo (in minuti), al termine di cui saranno distrutti tutti i cookie di terze parti. Imposta il timer a 0 per bloccarli completamente.

:::caution

Quest'impostazione elimina tutti i cookie di terze parti, incluse le informazioni dei tuoi accessi tramite social o altri servizi di terze parti. Potresti dover ripetere periodicamente l'accesso ad alcuni siti web, e riscontrare altre problematiche correlate ai cookie. Per bloccare soltanto i cookie di tracciamento, utilizza il [*filtro di Protezione dal Tracciamento di AdGuard*](/general/ad-filtering/filter-policy/#tracking-protection-filter).

:::

### Autodistruzione dei cookie proprietari {#1p-cookie}

Imposta un periodo di tempo (in minuti), al termine di cui saranno distrutti tutti i cookie. Imposta il timer a 0 per bloccarli completamente.

:::caution

Sconsigliamo di abilitae quest'opzione, poiché potrebbe interferire gravemente con il funzionamento di certi siti web.

:::

### Disabilita la cache per le richieste di terze parti {#3p-cache}

Quando un browser indirizza una pagina, il server gli assegna un ETag. Questo, è utilizzato dal browser per salvare i contenuti della pagina nella cache. Alle successive richieste, il browser invia l'ETag al server corrispondente, dunque, consentendogli di imparare l'identità del visitatore. Finché i file dei siti sono nella cache, l'ETag è inviato ogni volta che il tuo browser accede a questo sito. Se il sito ha dei contenuti incorporati da un altro server (come un'immagine o un iframe), quel server può tracciare le tue attività a tua insaputa.

### Blocca l'Intestazione di Autorizzazione da terze parti {#3p-auth}

Il valore dell'intestazione "Autorizzazione" è salvato nella cache dal browser e, quindi, è inviato insieme a ogni richiesta a quel dominio. Ciò significa che è utilizzabile per scopi di tracciamento, proprio come i cookie.

## API del Browser {#browser-api}

### Blocca WebRTC {#webrtc}

WebRTC (Comunicazione Web In Tempo Reale) è una tecnologia che consente la trasmissione diretta dei dati tra browser e app. Può consentire ad altri di conoscere il tuo indirizzo IP reale, anche se utilizzi un proxy o una VPN. Abilitare quest'opzione può interrompere il funzionamento di certe applicazioni del browser, come app di messaggistica, chat, cinema o giochi.

### Blocca l'API Push {#push}

L'API Push consente ai server di inviare messaggi alle applicazioni web, indipendentemente dallo stato di attività del tuo browser. Dunque, potresti ricevere notifiche da vari siti web, anche se il tuo browser è minimizzato o non avviato. Abilita quest'opzione per bloccare completamente l'API Push del browser.

### Blocca l'API di Posizione {#location}

Abilitare quest'opzione impedirà al browser di inviare dati GPS utilizzabili per determinare la tua posizione, modificare i risultati della tua ricerca o influenzare altrimenti la tua esperienza sul web.

### Blocca Flash {#flash}

The Flash Player plugin has become increasingly vulnerable to such online threats as viruses and hackers; it may also significantly increase website load times. Attivando quest'impostazione, AdGuard bloccherà l'abilità dei browser di rilevare componenti (quali plugin e oggetti ActiveXObject), che consentano a Flash di mostrare contenuti. Ciò significa effettivamente che i browser non saranno in grado di supportare Flash.

### Blocca Java {#java}

Alcuni siti e servizi web, utilizzano ancora la vecchia tecnologia per supportare i plugin Java. L'API dei plugin in Java, alla base dei plugin in Java, presenta gravi falle di sicurezza. Per scopi di sicurezza, puoi disabilitare tali plugin. Tuttavia, anche se decidi di utilizzare l'opzione "Blocca Java", JavaScript sarà comunque abilitato.

## Varie {#miscellaneous}

### Nascondi Referente dalle terze parti {#referer}

Il referente è un'intestazione HTTP utilizzata nelle richieste dal browser al server. Contiene l'URL dell'origine della richiesta. Quando navighi da una pagina all'altra, il Referente salva l'URL della pagina iniziale. Il server che ospita la pagina web di destinazione, spesso, dispone di software che analizzano il Referente, estraendo da esso varie informazioni. Abilitare l'opzione *Nascondi Referente dalle terze parti*, nasconde il sito web corrente dai siti di terze parti, alterando l'intestazione HTTP.

Inoltre, puoi impostare un valore arbitrario per il Referente, inserendolo nel campo *Referente Personalizzato*. Per utilizzare il Referente predefinito, lascia vuoto il campo.

Tieni presente che per poter filtrare il traffico, le applicazioni AdGuard "intercettano" le richieste dal browser al server. Le richieste effettuate agli server di annunci, tracciamento e di phishing possono essere modificate prima dell'invio al server o bloccate completamente. Lo stesso valore per l'opzione *Nascondi Referente dalle terze parti*: AdGuard intercetta le richieste HTTP(S), in particolare per rimuovere o modificare l'intestazione del Referente, se quest'opzione è abilitata. Tuttavia, ciò accade solo dopo che queste richieste "lasciano" il browser. Ciò significa che se monitori il Referente nel browser (ad esempio, con l'aiuto degli Strumenti per Sviluppatori di Chrome), vedrai il Referente originale, poiché la richiesta non ha ancora raggiunto AdGuard. Puoi utilizzare software come [Fiddler](https://www.telerik.com/fiddler) per assicurarti che il Referente sia alterato correttamente.

On the other hand, due to the nature of all browser extensions, AdGuard Browser Extension works 'inside' the browser. Altererà il Referente in quel momento, quindi, gli Strumenti per Sviluppatori mostreranno il Referente desiderato per le tue richieste.

### Nascondi il tuo User-Agent {#useragent}

Quando visiti un sito web, il tuo browser invia le sue informazioni al server. Somiglia a una riga di testo, parte di una richiesta HTTP, che inizia per "User-Agent:". Solitamente, include il nome e la versione del browser, il sistema operativo e le impostazioni della lingua. Escludiamo l'User-Agent dalle informazioni identificative, così che gli inserzionisti non le possano ottenere.

Inoltre, puoi impostare un valore arbitrario per l'User-Agent, inserendolo nel campo User-Agent Personalizzato. Per utilizzare l'User-Agent predefinito, lascia vuoto il campo.

### Nascondi il tuo indirizzo IP {#ip}

La Modalità Invisibilità non può nascondere il tuo indirizzo IP. Tuttavia, possiamo nasconderlo così che i siti web che visiti penseranno che tu sia un proxy. Ciò, talvolta, aiuta e i siti web ignorano il tuo indirizzo IP reale.

Puoi impostare un indirizzo IP arbitrario, che vorresti fosse percepito dagli altri come tuo, semplicemente inserendolo nel campo corrispondente. Per utilizzare l'indirizzo IP predefinito, lascia vuoto il campo.

### Rimuovi l'intestazione X-Client-Data dalle richieste HTTP {#xclientdata}

Proibisce a Google Chrome di inviare le proprie informazioni sulla versione e sulle modifiche, con richieste ai domini di Google (inclusi Double Click e Google Analytics).

### Protezione da IPP {#dpi}

L'Ispezione Approfondita del Pacchetto è un sistema di analisi profonda e filtraggio del traffico per contenuto del pacchetto, nonché l'accumulo di dati statistici. Utilizzando questa tecnologia, gli ISP possono controllare il traffico in transito e limitare i contenuti per i loro clienti.

AdGuard può modificare i dati del pacchetto in uscita, così che il client non rientri nei criteri di blocco IPP. Ciò significa che, abilitando quest'opzione, gli utenti possono accedere ai contenuti che desiderano. Non tutti i sistemi IPP sono aggirabili al momento, ma lavoriamo costantemente per migliorare questo aspetto.

La funzionalità "Protezione da IPP" è già implementata su AdGuard per Windows, AdGuard per Mac e AdGuard per Android.

:::attenzione

If this feature is enabled in AdGuard for Windows, it may interfere with ESET antivirus. Anti-DPI will prevent ESET from filtering traffic, leaving blacklisted and malicious websites unblocked.

:::
