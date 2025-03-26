---
title: Guida alle Impostazioni Avanzate (di basso livello)
sidebar_position: 7
---

:::info

Questo articolo riguarda AdGuard per Windows, un blocca-inserzioni multifunzionale che protegge il tuo dispositivo a livello di sistema. Per vedere come funziona, [scarica l'app di AdGuard](https://agrd.io/download-kb-adblock)

:::

Precedentemente note come impostazioni di basso livello, le impostazioni Avanzate contengono principalmente opzioni che vanno oltre la competenza dell'utente medio e non vengono applicate nell'uso quotidiano. AdGuard per Windows è progettato per funzionare senza dover mai modificare nessuno di essi, ma forniranno funzionalità aggiuntive in alcuni casi limite o quando si risolve un problema non comune.

:::attenzione

Modificare irragionevolmente le *Impostazioni Avanzate* potrebbe causare problemi con le prestazioni di AdGuard, interrompere la connessione a Internet o compromettere la tua sicurezza e privacy. Dovresti apportare modifiche a tali impostazioni soltanto se sei sicuro di ciò che stai facendo o se il nostro team di supporto ti ha chiesto di farlo.

:::

## Come raggiungere le Impostazioni Avanzate

Per andare alle *Impostazioni avanzate*, nella finestra principale clicca *Impostazioni → Impostazioni Generali* e scorri in basso alle *Impostazioni Avanzate*. Altrimenti, seleziona *Avanzate → Impostazioni avanzate...* nel menu della barra delle applicazioni.

## Impostazioni Avanzate

Una volta aperte le Impostazioni Avanzate, ti saranno presentate le seguenti opzioni:

### Blocca Apertura Veloce TCP

Se abilitata, AdGuard bloccherà l'Apertura Veloce TCP sul browser Edge. Per applicare le impostazioni, devi riavviare il browser.

### Usa Encrypted Client Hello

Ogni connessione Internet crittografata ha una parte non crittografata. Questo è il primissimo pacchetto che contiene il nome del server a cui ti stai connettendo. La tecnologia Encrypted Client Hello dovrebbe risolvere questo problema e crittografare quell'ultima parte di informazioni non crittografate. Per trarne vantaggio, abilita l'opzione *Usa Encrypted Client Hello*. Usa un proxy DNS locale per cercare la configurazione ECH per il dominio. Se trovata, il pacchetto Client Hello sarà crittografato.

### Verifica la trasparenza del certificato dei siti web

Verifica l'autenticità di tutti i certificati per il dominio in base alla Politica di trasparenza dei certificati Chrome. Se il certificato non è conforme alla Politica di trasparenza dei certificati Chrome, AdGuard non filtrerà il sito web. Chrome, a sua volta, lo bloccherà.

### Abilita i controlli di revoca dei certificati SSL/TLS

Una volta abilitata, questa opzione esegue controlli OCSP asincroni per verificare se il certificato SSL/TLS del sito Web è stato revocato.

Se il controllo OCSP viene completato entro il timeout minimo, AdGuard applicherà immediatamente il risultato: bloccherà la connessione se il certificato viene revocato o stabilirà una connessione se il certificato è valido.

Se la verifica richiede troppo tempo, AdGuard stabilirà una connessione e continuerà a controllare dietro le quinte. Se il certificato viene revocato, le connessioni attuali e future al dominio verranno bloccate.

### Mostra AdGuard VPN nelle Impostazioni

L'abilitazione di questa opzione consente di visualizzare la scheda AdGuard VPN in Impostazioni per una facile apertura dell'app e del sito Web del prodotto.

### Escludi app dal filtraggio inserendo il percorso completo

Se desideri che AdGuard non filtri alcuna applicazione in particolare, specificane il percorso completo e le app saranno escluse dal filtraggio. Separa percorsi differenti con punti e virgola.

### Abilita le notifiche a comparsa di AdGuard

Abilita questa funzionalità per visualizzare le notifiche popup di AdGuard. Non appaiono troppo spesso e contengono soltanto informazioni importanti. Inoltre, puoi utilizzare il menu della barra delle applicazioni per richiamare l'ultima notifica popup.

### Intercetta automaticamente gli URL di iscrizione agli filtri

Abilita questa funzione se desideri che AdGuard intercetti automaticamente gli URL di iscrizione agli filtri (cioè, `abp:subscribe` e affini) e che apra una finestra d'installazione del filtro personalizzato.

### Filtra HTTP/3

Se quest'opzione è abilitata, AdGuard filtrerà le richieste inviate via HTTP/3, oltre ad altri tipi di richieste.

### Utilizza modalità reindirizzamento driver

Se quest'opzione è abilitata, AdGuard intercetta tutto il traffico e lo reindirizza al server proxy locale per ulteriore filtraggio.

Altrimenti, AdGuard filtrerà tutto il traffico al volo, senza reindirizzamento. In questo caso, il sistema considererà AdGuard come l'unica applicazione che si connette a Internet (le altre applicazioni saranno indirizzate attraverso di essa). Lo svantaggio è che ciò renderà meno efficiente il Firewall di sistema. Il vantaggio è che questo approccio è lievemente più veloce.

### Apri la finestra principale all'avvio del sistema

Abilita quest'opzione per far aprire la finestra principale di AdGuard all'avvio del sistema. Questa impostazione, che non influisce sull'avvio o meno del servizio di filtraggio effettivo, si trova in *Impostazioni → Impostazioni generali*.

### Abilita il filtraggio all'avvio del sistema

A partire dalla versione 7.12, per impostazione predefinita, il servizio di AdGuard non filtra il traffico dopo l'avvio del sistema operativo se l'opzione Avvia AdGuard all'avvio del sistema è disattivata. In altre parole, il servizio di AdGuard viene avviato in modalità "inattiva". Abilita questa opzione per fare in modo che AdGuard filtri il traffico anche se l'app non viene avviata.

:::note

Prima della versione 7.12, il servizio AdGuard veniva avviato in modalità di filtraggio per impostazione predefinita (anche se il parametro *Avvia AdGuard all'avvio del sistema* era disabilitato). Se eri soddisfatto del vecchio comportamento, abilita questa opzione.

:::

### Filtra host locale

Se desideri che AdGuard filtri le connessioni di loopback, spunta la casella. Quest'opzione sarà sempre attiva se hai installato AdGuard VPN, poiché altrimenti non potrà funzionare.

### Escludi gli intervalli IP specificati dal filtraggio

Se non desideri che AdGuard filtri determinate sottoreti, abilita questa funzione e specifica gli intervalli IP nella notazione CIDR (ad es. 98.51.100.14/24) nella sezione **intervalli IP esclusi dal filtraggio** di seguito.

### Abilita scrittura HAR

Quest'opzione dovrebbe essere abilitata **esclusivamente per scopi di debug**. Selezionare la casella di controllo farà sì che AdGuard crei un file nel formato HAR 1.2 contenente informazioni su tutte le richieste HTTP filtrate. Questo file è analizzabile con l'app Fiddler. Nota che potrebbe rallentare significativamente la tua navigazione sul web.

### Aggiungi uno spazio extra alla richiesta HTTP semplice

Aggiunge ulteriore spazio tra il metodo HTTP e l'URL e rimuove lo spazio dopo il campo "Host:" per evitare l'ispezione approfondita dei pacchetti. Ad esempio, la richiesta

`GET /foo/bar/ HTTP/1.1
Host: example.org`

sarà convertito in

`GET /foo/bar/ HTTP/1.1
Host: example.org`

Questa opzione viene applicata solo quando l'opzione Modalità Stealth di *Protezione da DPI* è attivata.

### Regola la dimensione della frammentazione del pacchetto TLS iniziale

Specifica la dimensione della frammentazione del pacchetto TCP, evitando l'ispezione approfondita dei pacchetti. Questa opzione influisce solo sul traffico protetto (HTTPS).

Se questa opzione è abilitata, AdGuard divide il pacchetto TLS iniziale (il pacchetto Client Hello) in due parti: la prima ha la lunghezza specificata e la seconda ha il resto, fino alla lunghezza dell'intero pacchetto TLS iniziale.

Valori validi: 1–1500. Se viene specificata una dimensione non valida, verrà utilizzato il valore selezionato dal sistema. Questa opzione viene applicata solo quando l'opzione Modalità Stealth di *Protezione da DPI* è attivata.

### Dimensione del frammento della richiesta HTTP semplice

Regola la dimensione della frammentazione della richiesta HTTP. Questa opzione influisce solo sul traffico HTTP semplice. Se questa opzione è abilitata, AdGuard divide il pacchetto iniziale in due parti: la prima ha la lunghezza specificata e la seconda ha il resto, fino alla lunghezza dell'intero pacchetto originale.

Valori validi: 1–1500. Se viene specificata una dimensione non valida, verrà utilizzato il valore selezionato dal sistema. Questa opzione viene applicata solo quando l'opzione Modalità Stealth di *Protezione da DPI* è attivata.

### Mostra QUIC

Consente la visualizzazione dei registri del protocollo QUI, nel registro di filtraggio. Esclusivamente per le richieste bloccate.

### Abilita il keepalive TCP

Invia periodicamente pacchetti TCP su una connessione inattiva per assicurarsi che sia attivo e per rinnovare i timeout NAT. Questa opzione può essere utile per ignorare le rigorose impostazioni NAT (Network Address Translation) utilizzate da alcuni ISP.

### Intervallo keepalive TCP

Qui puoi specificare un periodo di tempo di inattività, in secondi, prima di inviare una sonda keepalive. Se viene specificato 0, verrà utilizzato il valore selezionato dal sistema.

:::note

Questa impostazione funziona solo quando l'opzione *Abilita keepalive TCP* è abilitata.

:::

### Timeout keepalive TCP

Qui puoi specificare il tempo in secondi prima di inviare un'altra sonda keepalive a un peer che non risponde. Se viene specificato 0, verrà utilizzato il valore selezionato dal sistema.

:::note

Questa impostazione funziona solo quando l'opzione *Abilita keepalive TCP* è abilitata.

:::

### Blocca Java

Alcuni siti e servizi web, suppotrano ancora i Plugin in Java. L'API che serve da base per tali plugin, presenta delle gravi vulnerabilità di sicurezza. Puoi disabilitare tali plugin per motivi di sicurezza. Tuttavia, anche se decidi di utilizzare l'opzione *Blocca Java*, JavaScript sarà comunque abilitato.

### Periodo di timeout del server DNS

Qui, puoi specificare il tempo in millisecondi che sarà atteso da AdGuard per la risposta dal server DNS selezionato, prima di ricorrere a quello di fallback. Se non compili questo campo o inserisci un valore non valido, sarà utilizzato il valore 5000.

### Usa HTTP/3 per DNS-over-HTTPS

Abilita HTTP/3 per gli upstream DNS-over-HTTPS per accelerare la connessione se l'upstream selezionato supporta questo protocollo. Ciò significa che l'abilitazione di questa opzione non garantisce che tutte le richieste DNS verranno inviate tramite HTTP/3.

### Usa upstream DNS di fallback

Le richieste normali verranno reindirizzate ad un upstream di fallback se tutti gli upstream normali falliscono.

### Richiedi gli upstream DNS in parallelo

Tutti gli upstream verranno richiesti in parallelo e verrà restituita la prima risposta. Poiché le richieste DNS vengono effettuate in parallelo, l'abilitazione di questa funzione aumenta la velocità di Internet.

### Rispondi sempre alle richieste DNS fallite

Se la risoluzione dell'indirizzo non è riuscita su ciascuno degli upstream inoltrati, nonché sui domini di fallback, la risposta alla richiesta DNS sarà `SERVFAIL`.

### Abilita filtraggio delle richieste DNS sicure

AdGuard reindirizzerà le richieste DNS sicure al proxy DNS locale, oltre alle semplici richieste DNS.

### Modalità di blocco per le regole degli host

Qui puoi selezionare il modo in cui AdGuard risponderà ai domini bloccati dalle regole DNS in base alla sintassi della regola [host](https://adguard-dns.io/kb/general/dns-filtering-syntax/#etc-hosts-syntax).

- Rispondi con l'errore "Refused"
- Rispondi con l'errore "NxDomain"
- Rispondi con un indirizzo IP personalizzato

### Modalità di blocco per le regole in stile adblock

Qui puoi selezionare il modo in cui AdGuard risponderà ai domini bloccati dalle regole DNS in base a [sintassi in stile adblock](https://adguard-dns.io/kb/general/dns-filtering-syntax/#adblock-style-syntax).

- Rispondi con l'errore "Refused"
- Rispondi con l'errore "NxDomain"
- Rispondi con un indirizzo IP personalizzato

### Indirizzo IPv4 personalizzato

Se l'indirizzo IP personalizzato è selezionato in Modalità di blocco per le regole degli host o Modalità di blocco per le regole in stile adblock, questo indirizzo IP verrà restituito in risposta alle richieste A bloccate. Se non ne viene specificato nessuno, AdGuard risponderà con l'errore Refused predefinito.

### Indirizzo IPv6 personalizzato

Se l'indirizzo IP personalizzato è selezionato in Modalità di blocco per le regole degli host o Modalità di blocco per le regole in stile adblock, questo indirizzo IP verrà restituito in risposta alle richieste AAAA bloccate. Se non ne è specificato nessuno, AdGuard risponderà con l'errore predefinito "Rifiutata".

### Server di fallback

Qui puoi specificare un server DNS alternativo a cui sarà reindirizzata una richiesta DNS, se il server principale non risponde entro il periodo di timeout specificato nella sezione successiva. Esistono tre opzioni tra cui scegliere:

- Non utilizzare i server di fallback;
- Utilizza i server predefiniti di sistema;
- Utilizza server personalizzati.

### Blocca ECH

Se abilitata, Adguard elimina i parametri Encrypted ClientHello dalle risposte.

### Elenco di server di fallback personalizzati

Se desideri che AdGuard utilizzi dei server di fallback personalizzati, elencali in questa sezione, uno per riga.

### Elenco di indirizzi di boostrap personalizzati

Un bootstrap è un server DNS intermedio utilizzato per ottenere l'indirizzo IP del server DNS sicuro scelto in precedenza in *Protezione DNS*. Una simile "via di mezzo" è necessaria utilizzando i protocolli che denotano l'indirizzo del server con delle lettere (come ad esempio DNS su TLS). In questo caso, il bootstrap agisce da traduttore, trasformando le lettere in numeri comprensibili dal tuo sistema.

Di default, è utilizzato il risolutore DNS di sistema e la richiesta di bootstrap iniziale è effettuata tramite la porta 53. Se ciò non ti soddisfa, elenca qui gli indirizzi IP dei server DNS che saranno utilizzati per determinare l'indirizzo del server DNS crittografato, nell'ordine dall'alto verso il basso. Gli indirizzi IP specificati saranno applicati nell'ordine elencato. Se specifichi degli indirizzi non validi (o non ne specifichi nessuno), saranno utilizzati gli IP di sistema.

### Esclusioni DNS

Tutte le richieste DNS ai domini qui elencati saranno reindirizzate al server DNS predefinito di sistema, invece che al server DNS specificato nelle impostazioni dell'app. Inoltre, le regole di blocco DNS non saranno applicate a tali richieste.

### Escludi i nomi delle reti Wi-Fi (SSID) specificati dal filtro DNS

La protezione DNS non includerà le reti Wi-Fi elencate in questa sezione. Specifica i nomi delle reti Wi-Fi (SSID) uno per riga. Questo può essere utile se una particolare rete Wi-Fi è già protetta da AdGuard Home o da un altro sistema di protezione DNS. In questo caso è superfluo filtrare nuovamente le richieste DNS.
