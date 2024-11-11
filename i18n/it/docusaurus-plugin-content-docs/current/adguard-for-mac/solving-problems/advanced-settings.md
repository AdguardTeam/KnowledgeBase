---
title: Guida alle Impostazioni Avanzate
sidebar_position: 9
---

:::info

Questo articolo riguarda AdGuard per Mac, un blocco annunci multifunzionale che protegge il tuo dispositivo a livello di sistema. Per vedere come funziona, [scarica l'app di AdGuard](https://agrd.io/download-kb-adblock)

:::

## Come raggiungere le Impostazioni Avanzate

:::attenzione

Modificare le *Impostazioni Avanzate* potrebbe causare dei problemi con le prestazioni di AdGuard, interrompere la connessione a Internet, o compromettere la tua sicurezza e la tua privacy. Apporta modifiche a questa sezione soltanto se sei sicuro di ciò che stai facendo, o se il nostro team di supporto ti ha chiesto di farlo.

:::

Per trovare le *Impostazioni Avanzate*, apri AdGuard, clicca sull'icona dell'ingranaggio, seleziona *Avanzate*, quindi seleziona *Impostazioni Avanzate*.

## Impostazioni Avanzate

### Impostazioni di rete

#### `network.extension.exclude.domains`

I domini elencati saranno esclusi dal filtraggio nella modalità *Estensione di Rete*. Utilizza una virgola o un'interruzione di riga per separare i valori.

#### `network.extension.exclude.ports`

Le porte elencate saranno escluse dal filtraggio in modalità *Estensione di Rete*. Utilizza una virgola o un'interruzione di riga per separare i valori.

#### `network.extension.route.exclude`

Le percorsi elencati saranno esclusi dal filtraggio in modalità *Estensione di Rete*. Imposta i percorsi utilizzando un indirizzo IP o un CIDR di destinazione. Separa i valori con virgole o interruzioni di riga.

#### `network.extension.http.downgrade.bundleids`

Qui, puoi specificare un elenco di applicazioni per cui il protocollo HTTP/2 sarà retrocesso a HTTP/1.1 nella modalità di filtraggio *Estensione di Rete*. Gli ID dei pacchetti dovrebbero essere separati da una virgola o un'interruzione di riga.

#### `network.extension.monterey.force.split.tunnel`

Qui, puoi impedire ad AdGuard di utilizzare il "percorso predefinito", abilitato di default nella modalità *Estensione di Rete* su macOS Monterey. AdGuard utilizza il "percorso predefinito" per disattivare il Relay Privato di iCloud e Protezione attività Mail, poiché non può operare all'unisono con essi.

Troverai ulteriori informazioni sul problema [in questo articolo](../icloud-private-relay).

#### `network.extension.dns.redirect.exclude.bundleids`

Qui, puoi specificare un elenco di applicazioni che effettuano le richieste DNS direttamente, non tramite il risolutore DNS (ad esempio, alcuni client VPN o applicazioni di filtraggio DNS). Il filtraggio DNS sarà per essi disabilitato nella *Modalità Estensione di Rete*. Gli ID dei pacchetti dovrebbero essere separati da una virgola o un'interruzione di riga.

#### `network.dns.filter.secure.request`

Reindirizza le richieste DNS sicure verso un proxy DNS locale, se disponibile.

#### `network.https.ocsp.check`

Impostando `true`, abiliti il controllo della revoca del certificato HTTPS.

#### `network.tcp.keepalive.enabled`

Invia periodicamente pacchetti TCP verso una connessione inattiva per assicurarsi che rimanga attiva e per rinnovare i timeout NAT.

#### `network.tcp.keepalive.interval.seconds`

Tempo di inattività, in secondi, prima di inviare una richiesta keepalive. Se viene specificato 0, il sistema utilizzerà il valore predefinito.

#### `network.tcp.keepalive.timeout.seconds`

Tempo, in secondi, prima dell'invio di un'altra richiesta keepalive verso un peer che non risponde. Se viene specificato 0, verrà utilizzato il valore selezionato dal sistema.

#### `network.https.ech.enabled`

Utilizza un proxy DNS locale per cercare le configurazioni nella lista di configurazioni ECH. Se trovata, cripta Client Hello.

#### `network.https.enforce.certificate.transparency`

Verifica l'autenticità di tutti i certificati per il dominio in base alla Politica di trasparenza dei certificati Chrome.

#### `network.https.filter.http3.enabled`

Impostandolo a `true`, consenti ad AdGuard di filtrare il traffico inviato via HTTP/3, l'ultima versione del protocollo HTTP, basata su QUIC.

#### `network.filtering.localnetwork`

Impostando `true`, abiliti il filtraggio della rete locale.

#### `network.filtering.localhost`

Impostando `true`, abiliti il filtraggio LoopBack.

### Impostazioni DNS

#### `dns.proxy.bootstrap.ips`

Qui, puoi inserire gli indirizzi IP dei server DNS che saranno utilizzati per determinare l'indirizzo del server DNS crittografato.

#### `dns.proxy.fallback.ips`

Qui, puoi specificare un elenco d'indirizzi IP di server DNS che saranno utilizzati come backup nel caso in cui il server DNS crittografato non riesca a rispondere.

#### `dns.proxy.fallback.on.upstreams.failure.enabled`

Le richieste normali verranno reindirizzate ad un upstream di fallback se tutti gli upstream normali falliscono.

#### `dns.proxy.detect.search.domains`

Quest'opzione abilita il rilevamento automatico del dominio di rete locale, che sarà reindirizzato automaticamente al server DNS di fallback, invece che a quello principale.

#### `dns.proxy.fallback.domains`

Qui, puoi elencare i domini per cui sarà utilizzato il server DNS di fallback, invece di quello principale.

#### `dns.proxy.adblockrules.blocking.mode`

Qui, puoi specificare il tipo di risposta del server DNS alle richieste bloccate, corrispondente alle regole in stile blocco annunci.

- 0 — rispondere con RIFIUTATA
- 1 - rispondere con NXDOMAIN
- 2 — rispondere con 0.0.0.0 o con gli indirizzi specificati in `dns.proxy.blocking.response.IPv4.address` e/o `dns.proxy.blocking.response.IPv6.address`

#### `dns.proxy.hostrules.blocking.mode`

Qui, puoi specificare il tipo di risposta del server DNS alle richieste bloccate, corrispondente alle regole degli host:

- 0 — rispondere con RIFIUTATA
- 1 - rispondere con NXDOMAIN
- 2 — rispondere con 0.0.0.0 o con gli indirizzi specificati in `dns.proxy.blocking.response.IPv4.address` e/o `dns.proxy.blocking.response.IPv6.address`

#### `dns.proxy.blocking.response.IPv4.address`

Qui, puoi specificare l'indirizzo IPv4 che sarà restituito in risposta alle richieste "A" bloccate quando `dns.proxy.adblockrules.blocking.mode` o `dns.proxy.hostrules.blocking.mode` è impostato al tipo di risposta "ADDRESS".

#### `dns.proxy.blocking.response.IPv6.address`

Qui, puoi specificare l'indirizzo IPv6 che sarà restituito in risposta alle richieste "AAAA" bloccate quando `dns.proxy.adblockrules.blocking.mode` o `dns.proxy.hostrules.blocking.mode` è impostato al tipo di risposta "ADDRESS".

#### `dns.proxy.block.AAAA.requests`

Qui puoi abilitare il blocco delle richieste DNS IPv6.

#### `dns.proxy.blocked.response.TTL.in.seconds`

Qui puoi specificare il valore TTL (tempo d'attività) che sarà restituito in risposta a una richiesta bloccata.

#### `dns.proxy.parallel.upstream.queries.enabled`

Tutti gli upstream vengono eseguiti simultaneamente. Viene restituita la prima risposta.

#### `dns.proxy.servfail.on.upstreams.failure.enabled`

Risponde ad un errore upstream con un pacchetto SERVFAIL.

#### `dns.proxy.http3.enabled`

Abilita HTTP/3 per gli upstream DNS-over-HTTPS per velocizzare la connessione.

#### `dns.proxy.block.encrypted.client.hello.response`

Rimuove i parametri Encrypted Client Hello dalle risposte.

#### `dns.proxy.private.relay.sequoia.workaround.enabled`

Blocks macOS Private Relay domains if the user has a firewall enabled, which in turn disables the *Private Relay* feature.

Enabling this setting is useful in the following scenario: when macOS Private Relay is active, filtering cannot function properly and must be disabled. In macOS versions up to 14, AdGuard could automatically disable Private Relay when Protection was enabled. However, starting with macOS 15, this is no longer possible if a firewall is active. By turning on this setting, you can disable Private Relay even when the firewall is enabled, overcoming the previous limitation.

### Impostazioni della modalità invisibile

#### `stealth.antidpi.http.split.fragment.size`

Regola la dimensione della frammentazione della richiesta HTTP. Valori validi: 1–1500. Se viene specificata una dimensione non valida, il sistema utilizzerà il valore predefinito.

#### `stealth.antidpi.clienthello.split.fragment.size`

Questa opzione specifica la dimensione della frammentazione dei pacchetti TCP, che consente di evitare l'ispezione approfondita dei pacchetti. Valori validi: 1–1500. Se viene specificata una dimensione non valida, il sistema utilizzerà il valore predefinito.

#### `stealth.antidpi.http.space.juggling`

Aggiunge spazio extra tra il metodo HTTP e l'URL e rimuove lo spazio dopo il campo "Host:".

#### `stealth.antidpi.split.delay.millisecond`

Qui puoi specificare il ritardo, in millisecondi, dall'invio del primo frammento, se la frammentazione è eseguita.

### Impostazioni d'intercettazione dei link dell'abbonamento (userscript e filtri)

#### `subscription.link.interception.userscript`

Attiva questa funzionalità se desideri che AdGuard intercetti automaticamente gli URL degli usercript e apra la finestra d'installazione.

#### `subscription.link.interception.filter`

Attiva questa funzionalità se desideri che AdGuard intercetti automaticamente gli URL degli abbonamenti (ad esempio, abp:subscribe, etc.) e apra la finestra di configurazione del filtro personalizzato.
