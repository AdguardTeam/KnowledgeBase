---
title: Impostazioni
sidebar_position: 2
---

:::info

Questo articolo riguarda AdGuard per Windows, un blocco annunci multifunzionale che protegge il tuo dispositivo a livello di sistema. Per vedere come funziona, [scarica l'app di AdGuard](https://agrd.io/download-kb-adblock)

:::

_Impostazioni_ è la sezione che richiede maggiore attenzione. Qui, puoi configurare l'app così che soddisfi pienamente le tue esigenze: blocchi soltanto ciò che ti infastidisce, utilizzi il server DNS del fornitore di fiducia, rimuova i cookie di terze parti e così via.

![Impostazioni \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/settings.png)

### Impostazioni generali

Qui, puoi impostare la lingua e il tema (Scuro o Chiaro), abilitare l'avvio di AdGuard all'avvio del sistema e silenziare gli aggiornamenti automatici, scegliere il canale d'aggiornamento e filtrare l'intervallo di controllo per gli aggiornamenti. Also Settings is the place to go if AdGuard for Windows is not working properly and the support team asked you to [collect _Debug logs_](/adguard-for-windows/solving-problems/adguard-logs.md).

![Impostazioni Avanzate \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/advanced-settings.png)

In fondo alla schermata, troverai le _Impostazioni Avanzate_. Modificarne alcune in modo irragionevole, potrebbe causare problemi con le prestazioni di AdGuard, interrompere la connessione a Internet o compromettere la tua sicurezza e privacy. Ecco perché ti suggeriamo di aprire questa sezione soltanto se sai ciò che stai facendo o se il nostro team di supporto ti ha chiesto di farlo. Se desideri scoprire cosa è possibile configurare nelle _Impostazioni Avanzate_, leggi l'[articolo dedicato](/adguard-for-windows/solving-problems/low-level-settings.md).

### Blocco degli Annunci

Questo è il modulo principale di AdGuard per Windows che rimuove gli annunci dai siti web che visiti e dalle app installate sul tuo dispositivo. Per filtrare i contenuti inserzionistici e che minacciano la privacy, quali banner, popup, o tracciatori, AdGuard utilizza filtri differenti: gruppi di regole con uno scopo simile, scritte con una [sintassi speciale](/general/ad-filtering/create-own-filters). Per comprendere cosa sono i filtri e come funzionano, leggi [questo articolo](/general/ad-filtering/how-ad-blocking-works).

![Blocco inserzioni \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/settings_ad_blocker.png)

Nel modulo Blocco Annunci puoi:

- abilitare l'attivazione automatica dei filtri specifici per lingua,
- disabilitare il blocco [degli annunci di ricerca e dell'auto-promozione](/general/ad-filtering/search-ads) blocking,
- disabilitare gli annunci nel menu Start su Windows 11,
- attivare i filtri preinstallati come il _Filtro base di AdGuard_,
- installare i filtri dall'elenco o aggiungine uno personalizzato cliccando sul pulsante _Aggiungi un filtro_,
- apportare modifiche ai gruppi di regole esistenti, utilizzando il pulsante _Editor filtri_,
- visualizzare tutte le richieste da browser e app installate sul tuo computer, cliccando sul pulsante _Registro di filtraggio_. Da lì, puoi anche bloccare o sbloccare qualsiasi richiesta, creando una regola personalizzata,
- comporre un filtro dalle tue regole scritte manualmente, importate o create con l'estensione AdGuard Assistant.

Prima d'iniziare a scrivere manualmente le tue regole, leggi la nostra dettagliata [guida alla sintassi](/general/ad-filtering/create-own-filters).

### Modalità Invisibilità

Molti siti web raccolgono informazioni sui propri visitatori, quali i loro indirizzi IP, informazioni sul browser e il sistema operativo installato, risoluzione dello schermo e persino la pagina da cui l'utente proviene o è stato reindirizzato. Alcune pagine web utilizzano i cookie per contrassegnare il browser e salvare le tue impostazioni personali, le preferenze dell'utente o per "riconoscerti" alla tua visita successiva. La Modalità Stealth salvaguarda le tue informazioni personali da tali sistemi di raccolta di dati e statistiche.

![Modalità Stealth \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/stealth-mode.png)

Puoi regolare in modo flessibile il funzionamento della Modalità Stealth: ad esempio, puoi impedire al sito web di ricevere la richiesta di ricerca che hai utilizzato per trovarlo su Internet, eliminare automaticamente i cookie di terze parti e del sito web e disabilitare la condivisione della posizione sul tuo browser, utilizzabile per tracciare la tua posizione.

Per imparare tutto sulla Modalità Stealth e sulle sue tante opzioni, [leggi questo articolo](/general/stealth-mode).

### Sicurezza di navigazione

La Sicurezza di navigazione offre una forte protezione dai siti web dannosi e di phishing. No, AdGuard per Windows non è un antivirus. Non interromperà il download di un virus quando è già avviato, né eliminerà quelli già esistenti. Ma ti avviserà se stai per procedere a un sito web il cui dominio è stato aggiunto al nostro database dei "siti non attendibili" o se stai per scaricare un file da tale sito web. Puoi trovare ulteriori informazioni sul funzionamento di questo modulo nell'[articolo dedicato](/general/browsing-security).

In questo modulo, puoi

- abilitare le notifiche per bloccare le richieste a siti dannosi e di phishing,
- attivare le notifiche sonore,
- acconsentire all'invio di informazioni anonime correlate alla sicurezza al server di AdGuard, per aiutarci a mantenere aggiornato il database dei siti web dannosi e di phishing.

![Sicurezza di navigazione \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/browsing-security.png)

Nel caso in cui tu desideri scoprire di più sulla Sicurezza di navigazione, leggi [questo articolo](/general/browsing-security/).

### Protezione DNS

Esistono tre motivi significativi per cui potresti voler esplorare le impostazioni di Protezione DNS. Primo, per evitare di essere tracciato dal tuo ISP. Ogni volta che apri un sito web, ad esempio 'google.com', il tuo browser invia una richiesta a un server DNS per ottenere in cambio l'indirizzo IP del sito web. Solitamente, il server DNS appartiene al tuo ISP, che gli consente di tracciare la tua attività online. Secondo, per crittografare il tuo traffico DNS. E il terzo è [bloccare contenuti al livello del DNS](https://adguard-dns.io/kb/general/dns-filtering/).

![Protezione DNS \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/dns-settings.png)

Nel modulo di Protezione DNS di AdGuard per Windows, puoi selezionare i server DNS dai fornitori noti, incluso [AdGuard DNS](https://adguard-dns.io/kb/) che blocca inserzioni e tracciatori, AdGuard DNS Protezione Famiglie, che blocca anche i contenuti per adulti, o AdGuard DNS Non filtraggio, che fornisce una connessione sicura e affidabile, ma non filtra tutto. Puoi persino aggiungere dei server DNS personalizzati. Inoltre, esiste un'opzione per aggiungere delle regole personalizzate utilizzando la [sintassi delle regole DNS](https://adguard-dns.io/kb/general/dns-filtering-syntax/). E, se necessario, puoi aggiungere dei [filtri DNS di tua scelta](https://filterlists.com).

### Controllo Genitori

Esistono numerosi siti web a cui dovrebbe essere limitato l'accesso da un PC utilizzato da bambini. Questo compito è svolto dal Controllo Genitori.

![Controllo Genitori \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/parental-control.png)

Il modulo controlla i contenuti delle pagine web aperte nel browser e filtra quelle con contenuti indesiderabili per i bambini: immagini e testi per adulti, linguaggio volgare, violenza, sostanze stupefacenti, etc. Le impostazioni del Controllo Genitori sono protette da password, così che i bambini non possano aggirare le limitazioni. Questo modulo non blocca soltanto le indicazioni ai siti indesiderati, ma può anche eliminare i collegamenti inappropriati per i bambini, dai risultati di ricerca.

In the _Parental Control_ module you can enable the _Safe search_ and manage the _blocklist_ and the _allowlist_ to customize how this option works. Inoltre, puoi anche spuntare la casella _Blocca download file eseguibili_ per impedire ai tuoi figli di scaricare e installare software sul computer. Esistono ancora altre due opzioni nel modulo _Controllo Genitori_: puoi selezionare un utente di Windows specifico da proteggere con il _Controllo Genitori_ e impostare una password per proteggere le impostazioni di AdGuard dalla modifica.

![Controllo Genitori \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/parental-control.png)

### Browser Assistant

![Browser Assistant \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/browser-assistant/browser-assistant.png)

Da questa scheda, puoi facilmente procedere all'installazione di AdGuard Browser Assistant, la cui funzionalità principale è gestire il filtraggio direttamente dal browser. Abbiamo spiegato di più sul funzionamento e sul da farsi se non è presente alcun Browser Assistant per il tuo browser, in un [articolo separato](/adguard-for-windows/browser-assistant.md).
