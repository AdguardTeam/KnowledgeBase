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

**Limitations**:

- Chrome-based browsers do not accept user certificates, so HTTP/3 filtering is not supported in them.
- Firefox-based browsers behave similarly by default, but you can set the `network.http.http3.disable_when_third_party_roots_found` option in `about:config` to `false` to allow user certificates for HTTP/3.
- Safari supports HTTP/3 filtering without additional configuration.

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

```text
GET /foo/bar/ HTTP/1.1
Host: example.org
```

will be converted to

```text
GET  /foo/bar/ HTTP/1.1
Host:example.org
```

This option is only applied when the *Protect from DPI* Stealth mode option is enabled.

### Regola la dimensione della frammentazione del pacchetto TLS iniziale

Specifies the size of the TCP packet fragmentation, avoiding deep packet inspection. This option only affects secured (HTTPS) traffic.

If this option is enabled, AdGuard splits the initial TLS packet (the Client Hello packet) into two parts: the first one has the specified length and the second one has the rest, up to the length of the whole initial TLS packet.

Valid values: 1–1500. Se viene specificata una dimensione non valida, verrà utilizzato il valore selezionato dal sistema. This option is only applied when the *Protect from DPI* Stealth mode option is enabled.

### Dimensione del frammento della richiesta HTTP semplice

Regola la dimensione della frammentazione della richiesta HTTP. This option only affects plain HTTP traffic. If this option is enabled, AdGuard splits the initial packet into two parts: the first one has the specified length and the second one has the rest, up to the length of the whole original packet.

Valori validi: 1–1500. Se viene specificata una dimensione non valida, verrà utilizzato il valore selezionato dal sistema. This option is only applied when the *Protect from DPI* Stealth mode option is enabled.

### Mostra QUIC

Allows displaying the QUIC protocol records in the filtering log. For blocked requests only.

### Abilita il keepalive TCP

Valori validi: 1–1500. Se viene specificata una dimensione non valida, verrà utilizzato il valore selezionato dal sistema.

### Intervallo keepalive TCP

Here you can specify an idle time period, in seconds, before sending a keepalive probe. If 0 is specified, the value selected by the system will be used.

:::note

This setting only works when the *Enable TCP keepalive* option is enabled.

:::

### Timeout keepalive TCP

Here you can specify time in seconds before sending another keepalive probe to an unresponsive peer. If 0 is specified, the value selected by the system will be used.

:::note

This setting only works when the *Enable TCP keepalive* option is enabled.

:::

### Blocca Java

Some websites and web services still support Java Plug-Ins. The API that serves as the basis for Java plug-ins has serious security vulnerabilities. You can disable such plug-ins for security purposes. Nevertheless, even if you decide to use *Block Java* option, JavaScript will still be enabled.

### Periodo di timeout del server DNS

Here you can specify the time in milliseconds that AdGuard will wait for the response from the selected DNS server before resorting to fallback. If you don’t fill in this field or enter an invalid value, the value of 5000 will be used.

### Usa HTTP/3 per DNS-over-HTTPS

Enables HTTP/3 for DNS-over-HTTPS upstreams to accelerate connection if the selected upstream supports this protocol. This means that enabling this option does not guarantee that all DNS requests will be sent via HTTP/3.

### Usa upstream DNS di fallback

Normal queries will be redirected to the fallback upstream if all DNS requests to the selected upstreams fail.

### Richiedi gli upstream DNS in parallelo

All upstreams will be queried in parallel and the first response is returned. Since DNS queries are made in parallel, enabling this feature increases the Internet speed.

### Rispondi sempre alle richieste DNS fallite

If address resolving failed on each of the forwarded upstreams, as well as on the fallback domains, then the response to the DNS request will be `SERVFAIL`.

### Abilita filtraggio delle richieste DNS sicure

AdGuard will redirect secure DNS requests to the local DNS proxy, in addition to plain DNS requests.

### Modalità di blocco per le regole degli host

Here you can select the way AdGuard will respond to domains blocked by DNS rules based on [hosts rule syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/#etc-hosts-syntax).

- Rispondi con l'errore "Refused"
- Rispondi con l'errore "NxDomain"
- Rispondi con un indirizzo IP personalizzato

### Modalità di blocco per le regole in stile adblock

Here you can select the way AdGuard will respond to domains blocked by DNS rules based on [adblock-style syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/#adblock-style-syntax).

- Rispondi con l'errore "Refused"
- Rispondi con l'errore "NxDomain"
- Rispondi con un indirizzo IP personalizzato

### Indirizzo IPv4 personalizzato

If Custom IP address is selected in Blocking mode for hosts rules or Blocking mode for adblock-style rules, this IP address will be returned in response to blocked A requests. If none are specified, AdGuard will reply with the default Refused error.

### Indirizzo IPv6 personalizzato

If Custom IP address is selected in Blocking mode for hosts rules or Blocking mode for adblock-style rules, this IP address will be returned in response to blocked AAAA requests. If none are specified, AdGuard will reply with the default "Refused" error.

### Server di fallback

Here you can specify an alternate DNS server to which a DNS request will be rerouted if the main server fails to respond within the timeout period specified in the next section. There are three options to choose from:

- Non utilizzare i server di fallback;
- Utilizza i server predefiniti di sistema;
- Utilizza server personalizzati.

### Blocca ECH

If enabled, AdGuard strips Encrypted Client Hello parameters from responses.

### Elenco di server di fallback personalizzati

If you want AdGuard to use custom fallback servers, list them in this section, one per line.

### Elenco di indirizzi di boostrap personalizzati

A bootstrap is an intermediate DNS server used to get the IP address of the secure DNS server you chose earlier in *DNS protection*. Such a "middle ground" is needed when using protocols that denote the server address by letters (such as DNS-over-TLS, for example). In this case, the bootstrap acts as a translator, transforming the letters into numbers your system can understand.

By default, the system DNS resolver is used, and the initial bootstrap request is made through port 53. If this does not suit you, list here the IP addresses of the DNS servers that will be used to determine the address of the encrypted DNS server in the top-to-bottom order. The specified IP addresses will be applied in the order listed. If you specify invalid addresses, or no addresses at all, the system IPs will be used.

### Esclusioni DNS

All DNS requests to domains listed here will be redirected to the system default DNS server instead of the DNS server specified in the app’s settings. Also, DNS blocking rules will not be applied to such requests.

### Escludi i nomi delle reti Wi-Fi (SSID) specificati dal filtro DNS

DNS protection will not include Wi-Fi networks listed in this section. Specify Wi-Fi networks names (SSIDs) one per line. This can be useful if a particular Wi-Fi network is already protected by AdGuard Home or another DNS protection system. In this case, it is superfluous to filter DNS requests again.
