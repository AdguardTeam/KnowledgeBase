---
title: Tracking protection
sidebar_position: 2
---

Molti siti web raccolgono dati sui loro visitatori, inclusi indirizzi IP, browser e informazioni sul sistema operativo, risoluzione dello schermo e persino la pagina da cui provengono. I cookie possono essere usati per identificare il tuo browser, ricordare le tue preferenze o riconoscerti al tuo ritorno. La Protezione dal tracciamento impedisce a tali sistemi di raccogliere i tuoi dati personali. Scopri di più nel nostro [articolo sulla Protezione dal tracciamento in AdGuard](https://adguard.com/kb/general/stealth-mode/)

![Tracking protection \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/tracking_protection.png)

Se non vuoi perdere tempo ad aggiustare i filtri manualmente, puoi semplicemente scegliere uno dei livelli di protezione preimpostati:

- _Standard_: abilitato come impostazione prescelta e fornisce una protezione affidabile per la navigazione quotidiana.
- _Alto_: rimuovi i parametri di tracciamento dagli URL delle pagine e blocca i cookie di terze parti. Puoi dover ripetere l'accesso ad alcuni siti web o riscontrare altri problemi correlati ai cookie.
- _Estremo_: limita la durata dei cookie di terze parti e blocca certe API del browser. Alcuni siti web possono non funzionare correttamente.

Per la massima flessibilità, seleziona _Personale_ e regola tutto manualmente. Le impostazioni sono suddivise in cinque categorie:

- [Impostazioni generali](#general-settings)

- [Metodi di tracciamento](#tracking-methods)

- [API del browser](#browser-api)

- [Tracciamento di Windows](#windows-tracking)

- [Varie](#miscellaneous)

## Impostazioni generali

![General settings \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_general_settings.png)

### Bloccare tracciatori

Blocca i tracciatori e le analisi della rete usando il _filtro Protezione dal tracciamento AdGuard_.

### Elimina i parametri di tracciamento dagli URL

Rimuove i parametri di tracciamento come `utm_*` e `fb_ref` dagli URL delle pagine usando il _Filtro tracciamento URL di AdGuard_.

### Nascondi le richieste di ricerca

Nasconde le richieste per i siti web visitati arrivandoci da un motore di ricerca. Quando vieni diretto a un sito web da Google, Yahoo o qualunque altro motore di ricerca, quest'opzione nasconde la richiesta di ricerca che hai usato per trovare quel sito web.

### Chiedi ai siti web di non tracciarmi

Invia i segnali [Controllo Privacy Globale](https://globalprivacycontrol.org/#gpc-spec) e [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) ai siti web che visiti.

### Altri filtri per la riservatezza

Applies a set of additional privacy protection filters. The number next to _Enabled in Filters_ shows how many filters are currently active.

## Metodi di tracciamento

![Tracking methods \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_settings_tracking_methods.png)

### Elimina i cookie di terze parti

I siti web usano i cookie per memorizzare le tue preferenze. Per esempio, la lingua scelta, la posizione o gli articoli nel tuo carrello. Quando ci ritorni, il browser invia nuovamente questi cookie in modo che il sito possa riconoscerti.

I cookie di terze parti funzionano allo stesso modo, ma sono creati da domini diversi da quello che stai visitando. Ad esempio, cnn.com può includere un elemento _Like_ di Facebook che imposta un cookie successivamente letto da Facebook. Gli inserzionisti spesso usano questi cookie per tracciare quali altri siti visiti.

Con questa opzione, puoi impostare un limite di tempo (in minuti) dopo il quale tutti i cookie di terze parti saranno eliminati. Se imposti il temporizzatore a 0, tali cookie saranno completamente bloccati.

![Time-to-live \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/delete_third_party.png)

:::caution

Tieni presente che questa impostazione rimuove tutti i cookie di terze parti, inclusi quelli usati per gli accessi tramite rete sociale o altri servizi esterni. Ciò significa che potresti dover accedere di nuovo di tanto in tanto o affrontare altri problemi relativi ai cookie. Se vuoi solo bloccare i cookie di tracciamento, usa il [_Filtro AdGuard per protezione dal tracciamento_](/general/ad-filtering/filter-policy/#tracking-protection-filter).

:::

### Elimina i cookie proprietari (non consigliato)

Questa opzione elimina i cookie impostati dal sito web che stai attualmente visitando dopo un lasso di tempo selezionato (in minuti). Quando il temporizzatore scade, tutti questi cookie sono rimossi. Imposta il temporizzatore a 0 per bloccarli completamente.

:::caution

Sconsigliamo di abilitare quest'opzione, poiché potrebbe interferire gravemente con il funzionamento di certi siti web.

:::

### Blocca le intestazioni ETag e If-None-Match

Rimuove le intestazioni ETag e If-None-Match dalle richieste e dalle risposte per impedire ai siti web di usarle per il tracciamento.

Quando un browser indirizza a una pagina, il server le assegna un ETag — un identificatore unico usato per memorizzare nella memoria temporanea il contenuto della pagina. Nelle visite successive, il browser invia lo stesso ETag al server. Ciò consente al server di riconoscere il visitatore. Finché i file temporanei rimangono, l'ETag è trasmesso con ogni richiesta. Se la pagina contiene anche elementi incorporati da altri server, come immagini o iframe, quei server possono usare gli ETag per tracciare la tua attività a tua insaputa.

### Blocca l'Intestazione di Autorizzazione da terze parti

Disabilita i dati di autorizzazione temporanei che possono essere usati per scopi di tracciamento. Può interferire con la funzionalità di alcune estensioni browser e siti web.

Il valore dell'intestazione Autorizzazione è temporaneo nel browser e inviato automaticamente con ogni richiesta allo stesso dominio. Poiché accompagna ogni richiesta, può essere usato per identificarti e tracciarti in modo simile ai cookie.

## API del Browser

![Browser API \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_settings_browser_api.png)

### Prevent IP address leaks through WebRTC

Makes WebRTC use a stricter IP address policy to prevent your real IP address from being exposed, even if you use a proxy or VPN.

WebRTC (Web Real-Time Communication) è una tecnologia che consente flusso dati diretto di dati tra browser e app. By default, it can reveal your true IP address even when a proxy or VPN is active. This option enforces a stricter IP address policy instead of blocking WebRTC entirely, so browser applications such as messengers, chats, and games are less likely to be affected.

### Blocca l'API Push

L'API push consente ai server di inviare messaggi alle applicazioni di rete indipendentemente dallo stato di attività del tuo browser. Ecco perché puoi ricevere notifiche da siti web anche se il tuo browser è nascosto nella barra delle applicazioni o non è stato lanciato. L'abilitazione di questa opzione blocca completamente l'API push.

### Blocca l'API di Posizione

Quando questa opzione è abilitata, il browser non invierà più dati GPS ai siti web. Ciò impedisce loro di determinare la tua posizione, modificare i risultati di ricerca o adattare i contenuti in base a dove ti trovi.

## Monitoraggio di Windows

![Windows tracking \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_settings_windows_tracking.png)

### Disabilita telemetria Windows

Disabilita l'invio dei dati tecnici sul tuo sistema e sull'uso delle app.

### Disabilita Windows Recall

Disables the Windows Recall feature, which periodically takes snapshots of your screen and stores them locally. This prevents sensitive information visible on your screen from being captured and saved.

### Disattiva ID Pubblicitario

Disabilita l'ID pubblicitaria per bloccare il tracciamento del tuo uso dell'app.

### Disabilita la reportistica automatica di Microsoft Defender

Blocca la segnalazione automatica e il campionamento di malware sospetto.

### Disabilita il servizio di instradamento dei messaggi WAP Push

Disables data collection about Windows component problems.

## Varie

![Miscellaneous \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_settings_miscellaneous.png)

### Nascondi Referente dalle terze parti

Referer è un'intestazione HTTP inclusa nelle richieste dal browser al server. Contiene l'URL dell'origine della richiesta. Quando navighi da una pagina all'altra, il Referente salva l'URL della pagina iniziale. Il server che ospita la pagina web di destinazione, spesso, dispone di software che analizzano il Referente, estraendo da esso varie informazioni.

Enabling the _Hide Referer from third parties_ option prevents third-party websites from seeing this information by altering or removing the header.

Puoi anche immettere un valore personalizzato nel campo _Referer personale_. Per utilizzare il Referente predefinito, lascia vuoto il campo.

Tieni presente che per poter filtrare il traffico, le applicazioni AdGuard "intercettano" le richieste dal browser al server. Le richieste effettuate agli server di annunci, tracciamento e di phishing possono essere modificate prima dell'invio al server o bloccate completamente.

Lo stesso vale per l'opzione _Nascondi Referer dalle terze parti_: per filtrare il traffico, AdGuard intercetta le richieste HTTP(S) e può alterarle o bloccarle prima che raggiungano il server. La modifica avviene solo dopo che la richiesta lascia il tuo browser. Per questa ragione, se controlli gli estratti all'interno del browser (ad esempio con Chrome Developer Tools), vedrai comunque il Referer originale. Per confermare che sia stato modificato, puoi usare strumenti esterni come Fiddler.

### Nascondi User Agent

Quando visiti un sito web, il tuo browser invia un estratto chiamato User-Agent come parte della richiesta HTTP. Somiglia a una riga di testo che inizia con "User-Agent:". Questa riga di solito contiene dettagli come il nome e la versione del browser, il sistema operativo e le impostazioni della lingua.

Abilitando questa opzione, AdGuard rimuove le informazioni identificative da User-Agent in modo che inserzionisti e tracciatori non possano usarle per profilarti. Se preferisci, puoi inserire un valore personale nel campo _User Agent personale_. Per mantenere il valore prescelto, lascia semplicemente il campo vuoto.

### Nascondi indirizzo IP

AdGuard non può nascondere completamente il tuo vero indirizzo IP, ma può rimpiazzarlo con uno diverso in modo che i siti web interpretino la tua connessione come proveniente da un proxy. In alcuni casi questo aiuta a nascondere il tuo vero IP.

Puoi inserire qualunque indirizzo IP che vuoi usare nel campo corrispondente. Per utilizzare l'indirizzo IP predefinito, lascia vuoto il campo.

### Rimuovi intestazione X-Client-Data

Impedisce a Google Chrome di inviare informazioni sulla sua versione e sulle modifiche nelle richieste ai domini Google, inclusi servizi come DoubleClick e Google Analytics.

### Proteggiti dall'IAP

![Protect against DPI \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/protect_against_dpi.png)

Deep Packet Inspection (DPI) is a technology that allows ISPs to analyze and filter traffic based on packet content. With this option enabled, AdGuard modifies outgoing packet data to make it harder for DPI systems to identify and analyze your traffic, helping protect your connection privacy.

When you click on _Protect against DPI_, a separate screen opens with three groups of settings:

**ClientHello split** — modifies the TLS ClientHello message to make it harder for DPI systems to detect and block encrypted connections. The following strategies are available:

- _Split TCP packet at fixed position_ — splits the ClientHello TCP packet at a specified byte position.
- _Split TLS record at fixed position_ — splits the TLS record containing the ClientHello at a specified byte position.
- _Split TLS before SNI_ — splits the ClientHello before the Server Name Indication field.
- _Split TLS after SNI_ — splits the ClientHello after the Server Name Indication field.
- _Split TLS in the middle of SNI_ — splits the ClientHello in the middle of the Server Name Indication field.
- _Split TLS randomly within SNI_ — splits the ClientHello at a random position within the Server Name Indication field.

When using a fixed-position strategy, set the _Split byte position_ (1–1500) to specify where the split occurs.

**HTTP request split** — splits HTTP requests into multiple TCP packets to bypass DPI systems that rely on inspecting complete HTTP requests.

**HTTP space juggling** — manipulates whitespace in HTTP requests to confuse DPI systems that parse HTTP headers, making it harder for them to identify and block specific traffic.

:::caution

This feature can break access to some unencrypted websites. If this feature is enabled in AdGuard for Windows, it may also interfere with the ESET antivirus — ESET will not be able to filter traffic, leaving some malicious or blocked websites accessible.

:::
