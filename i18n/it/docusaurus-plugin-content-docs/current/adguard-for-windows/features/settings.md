---
title: Impostazioni
sidebar_position: 2
---

:::info

Questo articolo riguarda AdGuard per Windows, un blocca-inserzioni multifunzionale che protegge il tuo dispositivo a livello di sistema. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock).

:::

_Impostazioni_ è la sezione che richiede maggiore attenzione. Qui, puoi configurare l'app così che soddisfi pienamente le tue esigenze: blocchi soltanto ciò che ti infastidisce, utilizzi il server DNS del fornitore di fiducia, rimuova i cookie di terze parti e così via.

![Settings \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/general_settings.png)

### Impostazioni generali

Qui, puoi impostare la lingua e il tema (Scuro o Chiaro), abilitare l'avvio di AdGuard all'avvio del sistema e silenziare gli aggiornamenti automatici, scegliere il canale d'aggiornamento e filtrare l'intervallo di controllo per gli aggiornamenti. Inoltre, Impostazioni è il posto in cui andare se AdGuard per Windows non funziona correttamente e se il team di supporto ti ha richiesto di [raccogliere i _Registri di debug_](/adguard-for-windows/solving-problems/adguard-logs.md).

![Advanced Settings \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/advanced_settings.png)

In fondo alla schermata, troverai le _Impostazioni Avanzate_. Changing some of them mindlessly may potentially cause problems with AdGuard’s performance, break the Internet connection or compromise your security and privacy. That’s why we suggest you open this section only if you are sure of what you are doing or our support team has asked you about it. If you want to know what can be set up in _Advanced Settings_, read the [dedicated article](/adguard-for-windows/solving-problems/low-level-settings.md).

### Ad blocking

Questo è il modulo principale di AdGuard per Windows che rimuove gli annunci dai siti web che visiti e dalle app installate sul tuo dispositivo. Per filtrare i contenuti inserzionistici e che minacciano la privacy, quali banner, popup, o tracciatori, AdGuard utilizza filtri differenti: gruppi di regole con uno scopo simile, scritte con una [sintassi speciale](/general/ad-filtering/create-own-filters). Per comprendere cosa sono i filtri e come funzionano, leggi [questo articolo](/general/ad-filtering/how-ad-blocking-works).

![Ad blocking \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/ad_blocking.png)

In the Ad blocking module you can:

- abilitare l'attivazione automatica dei filtri specifici per lingua,
- disabilitare il blocco [degli annunci di ricerca e dell'auto-promozione](/general/ad-filtering/search-ads) blocking,
- disabilitare gli annunci nel menu Start su Windows 11,
- attivare i filtri preinstallati come il _Filtro base di AdGuard_,
- installare i filtri dall'elenco o aggiungine uno personalizzato cliccando sul pulsante _Aggiungi un filtro_,
- apportare modifiche ai gruppi di regole esistenti, utilizzando il pulsante _Editor filtri_,
- visualizzare tutte le richieste da browser e app installate sul tuo computer, cliccando sul pulsante _Registro di filtraggio_. Da lì, puoi anche bloccare o sbloccare qualsiasi richiesta, creando una regola personalizzata,
- comporre un filtro dalle tue regole scritte manualmente, importate o create con l'estensione AdGuard Assistant.

Prima d'iniziare a scrivere manualmente le tue regole, leggi la nostra dettagliata [guida alla sintassi](/general/ad-filtering/create-own-filters).

### Tracking protection

Molti siti web raccolgono informazioni sui propri visitatori, quali i loro indirizzi IP, informazioni sul browser e il sistema operativo installato, risoluzione dello schermo e persino la pagina da cui l'utente proviene o è stato reindirizzato. Some web pages use cookies to mark the browser and save your personal settings, user preferences, or “recognize” you upon your next visit. _Tracking protection_ safeguards your personal information from such data and statistics gathering systems.

![Tracking protection \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/tracking_protection.png)

Puoi regolare in modo flessibile il funzionamento della Modalità Stealth: ad esempio, puoi impedire al sito web di ricevere la richiesta di ricerca che hai utilizzato per trovarlo su Internet, eliminare automaticamente i cookie di terze parti e del sito web e disabilitare la condivisione della posizione sul tuo browser, utilizzabile per tracciare la tua posizione.

Per imparare tutto sulla Modalità Stealth e sulle sue tante opzioni, [leggi questo articolo](/general/stealth-mode).

### Sicurezza di navigazione

La Sicurezza di navigazione offre una forte protezione dai siti web dannosi e di phishing. No, AdGuard per Windows non è un antivirus. It will neither stop the download of a virus when it’s already started, nor delete the already existing ones. But it will warn you if you’re about to proceed to a website whose domain has been added to our “untrusted sites” database, or to download a file from such website. Puoi trovare ulteriori informazioni sul funzionamento di questo modulo nell'[articolo dedicato](/general/browsing-security).

In questo modulo, puoi:

- abilitare le notifiche per bloccare le richieste a siti dannosi e di phishing,
- attivare le notifiche sonore,
- acconsentire all'invio di informazioni anonime correlate alla sicurezza al server di AdGuard, per aiutarci a mantenere aggiornato il database dei siti web dannosi e di phishing.

![Browsing security \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/browsing_security.png)

Nel caso in cui tu desideri scoprire di più sulla Sicurezza di navigazione, leggi [questo articolo](/general/browsing-security/).

### Protezione DNS

Esistono tre motivi significativi per cui potresti voler esplorare le impostazioni di Protezione DNS. Primo, per evitare di essere tracciato dal tuo ISP. Ogni volta che apri un sito web, ad esempio 'google.com', il tuo browser invia una richiesta a un server DNS per ottenere in cambio l'indirizzo IP del sito web. Solitamente, il server DNS appartiene al tuo ISP, che gli consente di tracciare la tua attività online. Secondo, per crittografare il tuo traffico DNS. E il terzo è [bloccare contenuti al livello del DNS](https://adguard-dns.io/kb/general/dns-filtering/).

![DNS Protection \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/dns_protection.png)

Nel modulo di Protezione DNS di AdGuard per Windows, puoi selezionare i server DNS dai fornitori noti, incluso AdGuard DNS che blocca inserzioni e tracciatori, AdGuard DNS Protezione Famiglie, che blocca anche i contenuti per adulti, o AdGuard DNS Senza filtraggio, che fornisce una connessione sicura e affidabile, ma non filtra tutto. Puoi anche aggiungere server DNS e regole personali utilizzando la [sintassi delle regole DNS](https://adguard-dns.io/kb/general/dns-filtering-syntax/). E, se necessario, puoi aggiungere dei [filtri DNS di tua scelta](https://filterlists.com).

A partire dalla v7.20, puoi anche aggiungere filtri semplicemente selezionandoli da una lista di filtri predefiniti e affidabili. Sono raggruppati in quattro categorie per la tua comodità:

- **Generale**: blocca inserzioni e tracciatori
- **Regionale**: blocca inserzioni e tracciatori nei siti web specifici per lingua
- **Sicurezza**: blocca siti web di phishing e non affidabili
- **Altro**: copre casi d'uso speciali che non rientrano nelle categorie sopra indicate

![Filtri DNS \*border](https://cdn.adtidy.org/content/release_notes/ad_blocker/windows/v7.20/dns_filters/en.png)

### Controllo Parentale

Esistono numerosi siti web a cui dovrebbe essere limitato l'accesso da un PC utilizzato da bambini. This task is accomplished by _Parental Control_.

![Parental Control \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/parental_control.png)

Il modulo controlla i contenuti delle pagine web aperte nel browser e filtra quelle con contenuti indesiderabili per i bambini: immagini e testi per adulti, linguaggio volgare, violenza, sostanze stupefacenti, etc. Le impostazioni del Controllo Parentale sono protette da password, così che i bambini non possano aggirare le limitazioni. Questo modulo non blocca soltanto le indicazioni ai siti indesiderati, ma può anche eliminare i collegamenti inappropriati per i bambini, dai risultati di ricerca.

Nel modulo _Controllo Parentale_, puoi abilitare la _Ricerca sicura_ e gestire l'_elenco di blocco_ e l'_elenco consentiti_ per personalizzare il funzionamento d quest'opzione. Inoltre, puoi anche spuntare la casella _Blocca download file eseguibili_ per impedire ai tuoi figli di scaricare e installare software sul computer. Esistono ancora altre due opzioni nel modulo _Controllo Parentale_: puoi selezionare un utente di Windows specifico da proteggere con il _Controllo Parentale_ e impostare una password per proteggere le impostazioni di AdGuard dalla modifica.

### Browser Assistant

![Browser Assistant \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/browser_assistant.png)

From this tab you can easily proceed to install AdGuard Browser Assistant, which primary function is to manage filtering directly from the browser. We explained more about how to work with it and what to do if there is no Browser Assistant for your browser in the [separate article](/adguard-for-windows/browser-assistant.md).
