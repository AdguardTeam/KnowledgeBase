---
title: Guida alle Impostazioni di Basso Livello
sidebar_position: 5
---

:::info

Questo articolo tratta AdGuard per iOS, un blocco annunci multifunzionale che protegge il tuo dispositivo a livello di sistema. Per vedere come funziona, [scarica l'app di AdGuard](https://agrd.io/download-kb-adblock)

:::

## Come raggiungere le Impostazioni di basso livello

:::caution

Modificare le *Impostazioni di basso livello* può causare problemi con le prestazioni di AdGuard, interrompere la connessione a Internet o compromettere la tua sicurezza e privacy. Questa sezione dovrebbe essere aperta soltanto se sai cosa stai facendo, o se ti è stato richiesto di farlo dal nostro team di supporto.

:::

Per andare alle *Impostazioni di basso livello*, tocca l'icona dell'ingranaggio in fondo allo schermo per aprire le *Impostazioni*. Seleziona la sezione *Generali* e attiva l'interruttore *Modalità avanzata*, dopodiché, apparirà di seguito la sezione *Impostazioni avanzate*. Tocca su *Impostazioni avanzate* per raggiungere la sezione *Impostazioni di basso livello*.

## Impostazioni di basso livello

### Modalità tunnel

Esistono due modalità tunnel principali: *Split* e *Full*. La modalità *Split-Tunnel* fornisce la compatibilità di AdGuard con le cosiddette app "VPN Personali". In modalità *Full-Tunnel*, nessun'altra VPN può operare simultaneamente con AdGuard.

Esiste una caratteristica specifica della modalità *Split-Tunnel*: in caso di scarse prestazioni del proxy DNS, ad esempio se la risposta dal server DNS di AdGuard non viene restituita in tempo, iOS reindirizzerà il traffico attraverso il server DNS specificato nelle impostazioni iOS. Nessun annuncio sarà bloccato e il traffico DNS non sarà crittografato.

In modalità *Full-Tunnel*, soltanto il server DNS specificato sulle impostazioni di AdGuard è utilizzato. Se non risponde, Internet semplicemente non funzionerà. L'attivazione della modalità *Full-Tunnel* potrebbe avere un impatto negativo sulle prestazioni di alcuni programmi (ad esempio FaceTime) e causare problemi di aggiornamento delle app.

Di default, AdGuard utilizza la modalità *Split-Tunnel* come l'opzione più stabile.

Inoltre, esiste una modalità aggiuntiva chiamata *Full-Tunnel (senza icona VPN)*. Questa è esattamente uguale alla modalità *Full-Tunnel*, ma è configurata così che l'icona della VPN non sia mostrata nella riga di sistema.

### Modalità di blocco

In questo modulo puoi selezionare come AdGuard risponderà alle richieste DNS che dovrebbero essere bloccate:

- Default — risponde con l'indirizzo IP zero quando bloccate dalle regole in stile adblock; risponde con l'indirizzo IP specificato nella regola quando bloccate dalle regole /etc/hosts-style
- REFUSED — risponde con il codice REFUSED
- NXDOMAIN — risponde con il codice NXDOMAIN
- Unspecified IP — risponde con l'indirizzo IP zero
- IP personalizzato— rispondi con un indirizzo IP impostato manualmente

### Blocca IPv6

Spostando l'interruttore verso destra, attivi il blocco delle query IPv6 (richieste AAAA). Le richieste DNS di tipo AAAA non saranno risolte, dunque, soltanto le richieste IPv4 sono elaborabili.

### Risposta TTL bloccata

Qui puoi impostare il periodo durante cui un dispositivo salvi nella cache la risposta a una richiesta DNS. Durante il periodo di tempo specificato (in secondi), la richiesta è leggibile dalla cache senza eseguirla nuovamente al server DNS.

### Server di bootstrap

Per DNS-over-HTTPS, DNS-over-TLS e DNS-over-QUIC, un server di bootstrap è necessario per ottenere l'indirizzo IP del server DNS principale. Se non specificato, il server DNS dalle impostazioni di IOS è utilizzato come server di boostrap.

### Server di fallback

Qui puoi specificare un server alternativo cui sarà reindirizzata una richiesta, se il server principale fallisce nel rispondere. Se non specificato, sarà utilizzato il server DNS di sistema come fallback. È anche possibile specificare `nessuno`; in tal caso, non sarà impostato alcun server di fallback e soltanto il server DNS principale sarà utilizzato.

### Tempo di aggiornamento dell'app in background

Qui puoi selezionare la frequenza con cui l'applicazione cercherà gli aggiornamenti del filtro, mentre in background. Nota che i controlli d'aggiornamento non saranno eseguiti più spesso del periodo specificato, ma gli intervalli esatti potrebbero non esser rispettati.
