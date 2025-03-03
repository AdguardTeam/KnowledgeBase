---
title: Impostazioni
sidebar_position: 2
---

:::info

Questo articolo riguarda AdGuard per Windows, un blocca-inserzioni multifunzionale che protegge il tuo dispositivo a livello di sistema. Per vedere come funziona, [scarica l'app di AdGuard](https://agrd.io/download-kb-adblock)

:::

_Impostazioni_ è la sezione che richiede maggiore attenzione. Qui, puoi configurare l'app così che soddisfi pienamente le tue esigenze: blocchi soltanto ciò che ti infastidisce, utilizzi il server DNS del fornitore di fiducia, rimuova i cookie di terze parti e così via.

![Impostazioni \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/settings.png)

### Impostazioni generali

Qui, puoi impostare la lingua e il tema (Scuro o Chiaro), abilitare l'avvio di AdGuard all'avvio del sistema e silenziare gli aggiornamenti automatici, scegliere il canale d'aggiornamento e filtrare l'intervallo di controllo per gli aggiornamenti. Inoltre, Impostazioni è il posto in cui andare se AdGuard per Windows non funziona correttamente e se il team di supporto ti ha richiesto di [raccogliere i _Registri di debug_](/adguard-for-windows/solving-problems/adguard-logs.md).

![Impostazioni Avanzate \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/advanced-settings.png)

In fondo alla schermata, troverai le _Impostazioni Avanzate_. Modificarne alcune in modo irragionevole, potrebbe causare problemi con le prestazioni di AdGuard, interrompere la connessione a Internet o compromettere la tua sicurezza e privacy. Ecco perché ti suggeriamo di aprire questa sezione soltanto se sai ciò che stai facendo o se il nostro team di supporto ti ha chiesto di farlo. Se desideri scoprire cosa è possibile configurare nelle _Impostazioni Avanzate_, leggi l'[articolo dedicato](/adguard-for-windows/solving-problems/low-level-settings.md).

### Blocco degli Annunci

Questo è il modulo principale di AdGuard per Windows che rimuove gli annunci dai siti web che visiti e dalle app installate sul tuo dispositivo. Per filtrare i contenuti inserzionistici e che minacciano la privacy, quali banner, popup, o tracciatori, AdGuard utilizza filtri differenti: gruppi di regole con uno scopo simile, scritte con una [sintassi speciale](/general/ad-filtering/create-own-filters). Per comprendere cosa sono i filtri e come funzionano, leggi [questo articolo](/general/ad-filtering/how-ad-blocking-works).

![Blocco inserzioni \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/settings_ad_blocker.png)

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

![Modalità Stealth \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/stealth-mode.png)

Puoi regolare in modo flessibile il funzionamento della Modalità Stealth: ad esempio, puoi impedire al sito web di ricevere la richiesta di ricerca che hai utilizzato per trovarlo su Internet, eliminare automaticamente i cookie di terze parti e del sito web e disabilitare la condivisione della posizione sul tuo browser, utilizzabile per tracciare la tua posizione.

Per imparare tutto sulla Modalità Stealth e sulle sue tante opzioni, [leggi questo articolo](/general/stealth-mode).

### Sicurezza di navigazione

La Sicurezza di navigazione offre una forte protezione dai siti web dannosi e di phishing. No, AdGuard per Windows non è un antivirus. Non interromperà il download di un virus quando è già avviato, né eliminerà quelli già esistenti. Ma ti avviserà se stai per procedere a un sito web il cui dominio è stato aggiunto al nostro database dei "siti non attendibili" o se stai per scaricare un file da tale sito web. Puoi trovare ulteriori informazioni sul funzionamento di questo modulo nell'[articolo dedicato](/general/browsing-security).

In questo modulo, puoi

- abilitare le notifiche per bloccare le richieste a siti dannosi e di phishing,
- attivare le notifiche sonore,
- acconsentire all'invio di informazioni anonime correlate alla sicurezza al server di AdGuard, per aiutarci a mantenere aggiornato il database dei siti web dannosi e di phishing.

![Sicurezza di navigazione \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/browsing-security.png)

Nel caso in cui tu desideri scoprire di più sulla Sicurezza di navigazione, leggi [questo articolo](/general/browsing-security/).

### Protezione DNS

Esistono tre motivi significativi per cui potresti voler esplorare le impostazioni di Protezione DNS. Primo, per evitare di essere tracciato dal tuo ISP. Ogni volta che apri un sito web, ad esempio 'google.com', il tuo browser invia una richiesta a un server DNS per ottenere in cambio l'indirizzo IP del sito web. Solitamente, il server DNS appartiene al tuo ISP, che gli consente di tracciare la tua attività online. Secondo, per crittografare il tuo traffico DNS. E il terzo è [bloccare contenuti al livello del DNS](https://adguard-dns.io/kb/general/dns-filtering/).

![Protezione DNS \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/dns-settings.png)

In the DNS protection module of AdGuard for Windows, you can choose DNS servers from known DNS providers, including AdGuard DNS, which blocks ads and trackers, AdGuard DNS Family Protection, which also blocks adult content, or AdGuard DNS Non-filtering, which provides a secure and reliable connection but doesn’t filter anything. You can even add custom DNS servers and rules using [DNS rule syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/). If necessary, you can add [DNS filters of your choice](https://filterlists.com).

Starting with v7.20, you can also add filters by simply selecting them from a list of pre-built, trusted filters. They are grouped into four categories for your convenience:

- **General**: block ads and trackers
- **Regional**: block ads and trackers on language-specific websites
- **Security**: block phishing and unreliable websites
- **Other**: cover special use cases that don’t fit into the above categories

![DNS filters \*border](https://cdn.adtidy.org/content/release_notes/ad_blocker/windows/v7.20/dns_filters/en.png)

### Parental Control

There are several websites to which access should be restricted from a PC used by children. This task is accomplished by Parental Control.

![Parental Control \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/parental-control.png)

The module checks the contents of web pages opened in the browser and filters those with content undesirable for children: images and texts for adults, crude language, violence, drug propaganda, etc. Parental Control settings are password-protected so that the child is not able to go round the restrictions. This module not only blocks directions to undesirable sites but can also delete the links that are inappropriate for children from the search results.

In the _Parental Control_ module you can enable the _Safe search_ and manage the _blocklist_ and the _allowlist_ to customize how this option works. You can also check the _Block executable files download_ box to prevent your child from downloading and installing software on the computer. There are two more options in the _Parental Control_ module: you can select a specific Windows user to be protected by _Parental Control_ and set a password to protect AdGuard settings from change.

![Parental Control \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/parental-control.png)

### Browser Assistant

![Browser Assistant \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/browser-assistant/browser-assistant.png)

From this tab you can easily proceed to install AdGuard Browser Assistant, which primary function is to manage filtering directly from the browser. We explained more about how to work with it and what to do if there is no Browser Assistant for your browser in the [separate article](/adguard-for-windows/browser-assistant.md).
