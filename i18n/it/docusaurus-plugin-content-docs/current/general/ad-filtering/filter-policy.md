---
title: Politica sui Filtri di AdGuard
sidebar_position: 6
---

:::nota Dichiarazione di non responsabilità

Leggere attentamente questa politica del filtro prima di abilitare qualunque filtro.

L'uso di AdGuard Ad Blocker, AdGuard DNS e dei relativi filtri può influire sul funzionamento di siti web e servizi di terzi. Sei responsabile di rivedere e seguire le politiche e i termini di qualunque sito web o servizio che usi.

Prima di abilitare i filtri forniti da terze parti, accetti di esaminare i loro termini applicabili e prendere una decisione informata sul loro uso. AdGuard non è responsabile di come funzionano i filtri di terze parti o di ciò che contengono i loro termini, e la loro presenza nei prodotti AdGuard non è una raccomandazione per usarli.

:::

Ad AdGuard, seguiamo certi principi nel realizzare i nostri filtri che, insieme alle loro descrizioni, sono delineati di seguito come parte della nostra politica di filtraggio.

## Criteri comuni

Questi criteri sono applicati egualmente alle regole di tutti i filtri.

- Le regole per un sito specifico saranno aggiunte soltanto se esiste traffico a sufficienza. Il traffico è determinato dalle statistiche pubbliche (se disponibili), o da indicatori diretti, come il numero di iscritti sui reti sociali. Il traffico di un sito è considerato sufficiente se raggiunge le 100.000 visite al mese. Considereremo l'aggiunta di una regola per un sito che non è altrettanto popolare, ma la decisione finale sta agli sviluppatori del filtro. I siti con traffico scarso dovrebbero essere controllati, per le statistiche di terze parti e per le reti inserzionistiche
- La decisione sulle farm di contenuti (siti web che producono grandi quantità di contenuti, mirati principalmente all'ottenimento di visibilità elevata nei risultati di ricerca e generazione di entrate pubblicitarie), è presa dagli sviluppatori del filtro, a seconda della qualità dei contenuti

I requisiti qualitativi per le regole di filtraggio:

- Le regole non dovrebbero influenzare negativamente i siti web, per quanto riguarda le prestazioni
- Le regole di sblocco devono essere il più specifiche possibile, per evitare lo sblocco di qualsiasi cosa non sia necessaria
- Le regole in JavaScript dovrebbero essere il più raramente possibile e soltanto se il blocco degli annunci è impossibile senza di esse

## Filtri di blocco degli annunci

### Terminologia

Un **ad blocker**, o blocco annunci, è uno strumento software o hardware progettato per filtrare, nascondere o bloccare le inserzioni e altri elementi, sulle pagine web. I blocchi di annunci sono creati per migliorare l'esperienza degli utenti, ridurre i tempi di caricamento delle pagine, ridurre il consumo di traffico Internet, bloccare annunci, miglorare la privacy di navigazione su siti web e di utilizzo sulle applicazioni e app, e bloccarre gli elementi fastidiosi.

Un **filtro** (o un **elenco di filtri**) è una serie di regole di filtraggio, per filtrare i contenuti e bloccare vari tipi di inserzioni e altri tipi di contenuti, utilizzando gli ad blocker. Questi filtri, solitamente, funzionano al livello del browser web, programma, o server DNS.

Gli **anti-adblock** sono tecnologie utilizzate dai siti web o dalle applicazioni, intese a rilevare il blocco degli annunci e reagirvi in modi differenti: tracciamento, reiniezione delle inserzioni, incoraggiamento a disabilitare il blocco di annunci (cosiddetti "muri adblock"). Gli anti-adblock potrebbero essere di diversi tipi:

- Anti-adblock che bloccano i contenuti del sito web senza offrire un'alternativa: per continuare a utilizzare il sito, l'utente deve disabilitare l'ad blocker sul sito
- "Muri anti-adblock" con opzioni alternative offerte, come l'acquisto di un abbonamento per continuare a utilizzare il blocco annunci
- Messaggi informativi che non obbligano azioni: agli utenti è chiesto di disabilitare il blocco annunci, ma questi messaggi possono essere chiusi, consentendo agli utenti di continuare a utilizzare il sito, senza limitazioni
- Implementazione di inserzioni alternative in risposta all'utilizzo del blocco annunci: i siti introducono inserzione alternative al rilevamento degli ad blocker
- Paywall: un metodo di monetizzazione dei contenuti, in cui i contenuti sono nascosti parzialmente o completamente dagli utenti, con un messaggio che richiede loro di acquistare un abbonamento per accedere

### Filtri

I filtri di blocco degli annunci di AdGuard includono:

- Filtro di base di AdGuard
- Filtro Inserzioni Mobili di AdGuard
- Filtri regionali divisi per principio linguistico: cinese, olandese, francese, tedesco, giapponese, russo, spagnolo/portoghese, turco e ucraino

### Lo scopo di questi filtri

- Il **filtro di base** è progettato per bloccare le inserzioni sui siti web in lingua inglese, nonché quelle per le quali non è presente alcun filtro separato. Inoltre, contiene le regole di filtraggio generali che si applicano a tutti i siti, indipendentemente dalla lingua
- Il **filtro delle Inserzioni Mobili** blocca le inserzioni sulle versioni mobili dei siti web, e sulle app mobili. Non esiste alcuna segmentazione basata sulla lingua
- I **filtri regionali** seguono la stessa politica del **filtro di base**, ma si limitano ai siti web in certe lingue

L'obiettivo dei filtri di blocco delle inserzioni è bloccare ogni tipo di inserzione sui siti web, le applicazioni, e certi dispositivi capaci di caricare inserzioni da Internet:

- Banner: le inserzioni pubblicitari mostrate come immagini in varie parti delle pagine web
- Teaser: annunci testuali o grafici, spesso animati, progettati per intrigare i visitatori (titoli sensazionali, immagini che attirano l'attenzione) e indurli a cliccare sul banner (clickbait)
- Annunci testuali: inserzioni in forma di testo, link inclusi
- Pubblicità modali: inserzioni che appaiono improvvisamente sul contenuto corrente, nella forma di finestre modali
- Popunder: inserzioni che si aprono in una finestra separata, sotto la corrente, cliccando in qualsiasi punto della pagina
- Inserzioni di reindirizzamento: meccanismi che reindirizzano automaticamente gli utenti a un altro sito, dopo il click
- Inserzioni pubblicitari mascherate da contenuti del sito, che aprono pagine con i prodotti promossi, o contenuti non correlati, al click
- Inserzioni video: video pubblicitari incorporati nel contenuto del video o in elementi pubblicitari separati, sui siti web e sulle applicazioni
- Inserzioni interattive: annunci con cui gli utenti possono interagire (es., giochi e sondaggi, al completamento dei quali si apre l'elemento pubblicizzato)
- Inserzioni interstiziali: annunci a schermo intero sui dispositivi mobili, che coprono l'interfaccia dell'app o del browser web
- Residui di inserzioni pubblicitari che occupano grandi spazi o sono a contrasto con lo sfondo e attirano l'attenzione dei visitatori (tranne quelli a malapena distinguibili o invisibili)
- Inserzioni anti-adblock: inserzioni alternative mostrate sul sito quando quelle principali sono bloccate
- Bait elements that are used by multiple known adblock detection scripts to detect an ad blocker presence for different goals including changing the way ads are shown, fingerprinting, etc.
- Propri inserzioni del sito, se bloccate dalle regole di filtraggio generali (consulta *Limitazioni ed eccezioni*)
- Script anti-adblock che impediscono l'utilizzo del sito (consulta *Limitazioni ed eccezioni*)
- Inserzioni pubblicitari iniettate da malware, se sono fornite informazioni dettagliate sul metodo di caricamento o i passaggi per la riproduzione
- Mining indesiderato: script che minano criptovalute senza il consenso dell'utente

### Limitazioni ed eccezioni

- Le inserzioni del sito non dovrebbero essere bloccate deliberatamente. Tuttavia, non dovrebbero essere sbloccate se il blocco è causato dalle regole di filtraggio generali
- Content access measures like paywalls are not blocked by Ad blocking filters. However, they may be blocked by Tracking protection filters if their operation results in a violation of user privacy
- I muri anti-adblock saranno bloccati nei seguenti casi:
    - Insistono in modo aggressivo sulla disattivazione o la rimozione dell'ad blocker o impediscono di fatto l'utilizzo del sito web
    - Presentano descrizioni errate e fuorvianti delle possibili conseguenze dell'utilizzo dei blocchi di annunci
    - Mettono i visitatori a rischio di pubblicità dannose: quando le inserzioni provengono da fonti dubbie
    - They violate or negatively impact user privacy
- Non blocchiamo i messaggi di rilevamento dell'ad blocker che soddisfano almeno uno dei seguenti criteri:
    - Consentono l'utilizzo del sito e non coprono una significativa quantità di contenuti
    - Forniscono un'alternativa a disabilitare un ad blocker, a patto che tale alternativa non metta a rischio la privacy o la sicurezza degli utenti
    - They allow the user to proceed to the website’s content
    - Alcune regole ereditarie potrebbero continuare a bloccare i messaggi che soddisfano uno o più di questi criteri. Se identificate, tali regole saranno gestite secondo questa politica
- I gruppi di mining non sono bloccati se sono pubblici e non utilizzati esclusivamente per scopi malevoli

## Filtri di Protezione dal monitoraggio

### Terminologia

**Tracciamento**: il processo di monitoraggio e raccolta dei dati sugli utenti e le loro interazioni con i siti web e le applicazioni per scopi di marketing, nonché l'ottenimento della telemetria sul funzionamento dei siti web o delle applicazioni, allo scopo di analizzarne l'operazione. Questo processo include il tracciamento delle pagine visitate, del tempo di utilizzo, dell'interazione con gli elementi del sito web (es., click, invii di moduli), e altre misurazioni. Consente ai proprietari del sito web e dell'applicazione di meglio comprendere il comportamento dell'utente, ottimizzare la funzionalità e adattare le strategie di marketing. Il tracciamento è inoltre utilizzato per monitorare le prestazioni, le abitudini d'utilizzo e identificare i problemi, fornendo agli sviluppatori i dati necessari a migliorare la stabilità e la qualità del sito web o dell'applicazione. Anche se i dati ottenuti non possono rivelare l'identità di una persona, tali azioni sono comunque considerate come tracciamento.

**Tracker** o tracciatore: software utilizzato su un sito web o in un'applicazione e progettato per raccogliere informazioni sulla loro operazione e sulle azioni dei visitatori. Traccia l'interazione dell'utente con il sito web o l'applicazione, registrando i dati sulle visualizzazioni della pagina, il tempo di utilizzo, i click, gli invii di moduli, e altri eventi. Il suo scopo è fornire ai proprietari del sito web e dell'applicazione uno strumento per analizzare il comportamento degli utenti, migliorandone l'esperienza e ottimizzando contenuti e inserzioni.

**Parametro di tracciamento URL** — una parte dell'indirizzo che viene aggiunta ai collegamenti dai sistemi di analisi o presente in alcuni collegamenti sulle pagine web. Quando viene effettuata una richiesta, questo parametro di tracciamento dell'URL può essere elaborato dal backend di un sistema di analisi o di un sito web, che ne estrarrà informazioni. Ad esempio, i parametri di tracciamento degli URL possono trasmettere informazioni sui clic o sulle campagne pubblicitarie. I parametri di tracciamento degli URL possono essere utilizzati anche dai sistemi di protezione dalle frodi o di rilevamento dei bot.

**Cookie**: file che i siti web inviano a e memorizzano sui dispositivi. Questi file contengono varie informazioni, sia necessarie al funzionamento del sito sul dispositivo, che utilizzate per scopi analitici: identificativi univoci utilizzati per tracciare l'attività del visitatore sul sito web, parametri inserzionistici e molto altro.

### Filtri

I filtri di protezione dal tracciamento di AdGuard includono:

- Filtro AdGuard Anti-Monitoraggio
- Filtro AdGuard Anti-Monitoraggio URL

### Lo scopo di questi filtri

Il **Filtro AdGuard Anti-Monitoraggio** è progettato per bloccare i tracker che raccolgono i dati personali degli utenti e per migliorare la privacy degli utenti.

Cosa blocca:

- Script dei sistemi analitici
- Script di tracciamento dei siti web e delle applicazioni
- Tracciatori CNAME mascherati
- Cookie di tracciamento
- Pixel di tracciamento
- API di tracciamento dei browser
- Detection of the ad blocker for tracking purposes
- Funzionalità Sandbox Privacy su Google Chrome e le sue biforcazioni utilizzate per il tracciamento (Google Topics API, la Protected Audience API)

Il filtro **Filtro Anti-Monitoraggio URL** è progettato per rimuovere i parametri di monitoraggio dagli indirizzi web

### Limitazioni ed eccezioni

I filtri di protezione dal tracciamento non dovrebbero bloccare un tracker se il blocco potrebbe interrompere il corretto funzionamento del sito web:

- Protezione anti-bot e antifrode se interferisce con l'utilizzo del sito. Ad esempio, con PerimeterX o hCaptcha il blocco causa problemi quando il sito tenta di verificare il suo visitatore con un captcha
- I sistemi di tracciamento degli errori come Sentry o Bugsnag non sono bloccati

## Filtri anti-fastidi

I filtri anti-fastidi sono progettati per migliorare l'utilizzabilità dei siti web, bloccando gli elementi sulle pagine che non sono inserzioni, ma distraggono da e interferiscono con l'interazione del sito o il consumo dei contenuti: come varie finestre modali e moduli interattivi, notifiche e richieste di consenso ai cookie, banner delle app mobili, e vari widget.

### Terminologia

**Avviso sui cookie**: un modulo che descrive i tipi e l'utilizzo dei cookie su un sito web. Un avviso sui cookie appare quando un utente visita un sito web, informandolo del fatto che il sito web utilizza i cookie o altre tecnologie di tracciamento, per raccogliere e utilizzare informazioni personali, e spiegando perché e con chi sono condivise le informazioni raccolte.

**CMP (Consent Management Platform)** — software che aiuta i siti web a rispettare le regole sull'utilizzo dei cookie. Le CMP limitano l'utilizzo dei cookie finché non viene ottenuto il consenso dell'utente, offrendo agli utenti la possibilità di accettare determinati cookie e gestire le impostazioni sulla privacy.

**Widget** — un elemento dell'interfaccia utente che estende le funzionalità di un sito web. I widget web sono integrati nelle pagine web e possono includere elementi interattivi come pulsanti, moduli o banner. Possono fornire agli utenti l'accesso a servizi o contenuti specifici senza richiedere la navigazione in altre pagine.

**Popup** — una finestra che appare sopra la pagina web corrente. Ha lo scopo di visualizzare informazioni aggiuntive, annunci pubblicitari, notifiche o moduli di immissione dati. I popup di solito bloccano la visualizzazione del contenuto principale della pagina e richiedono l'azione dell'utente per chiudersi, il che può essere irritante.

### Filtri

Per una migliore personalizzazione, i filtri anti-fastidi sono divisi a seconda del loro scopo:

- Filtro per Avvisi sui Cookie di AdGuard
- Filtro Popup di AdGuard
- Filtro per Banner App Mobili di AdGuard
- Filtro per Widget di AdGuard
- Filtro Altri Fastidi di AdGuard
- Filtro Anti-Fastidi di AdGuard: un filtro combinato che include tutti i 5 filtri anti-fastidi specializzati

### Lo scopo di questi filtri

#### Filtro per Avvisi sui Cookie di AdGuard

Questo filtro è progettato per bloccare gli avvisi e le richieste sui cookie dalle piattaforme di gestione dei cookie (CMP). Depending on how a website implements its consent mechanism, different methods may be applied.

In most cases, simply hiding or blocking the corresponding scripts is sufficient. However, when a website requires a cookie decision for certain features or third-party content to work, the filter automatically handles the request using alternative methods.

Whenever possible, non-essential cookies are declined by default. If this is not technically feasible and consent must be granted for the site to function correctly, the site is additionally reviewed for analytics and tracking technologies, which are then blocked by the **AdGuard Tracking Protection filter**.

**Limitazioni ed eccezioni**

In some cases, the decision to add rules is made independently by filter developers; mostly, when the choice made when simulating actions would affect the site’s functionality (for example, history may not work, or user settings may not be saved on such a site).

#### Filtro Popup di AdGuard

This is a filter that blocks various popups on web pages that are not necessary for normal site usage, including but not limited to:

- Requests for permission to receive push notifications
- Popups and forms for subscribing to news, promotions, and various events, including third-party channels for receiving them (such as Google News, Telegram)
- Popups that encourage users to disable ad blocker and violate user’s privacy (at the discretion of the filter developers)
- Other types of popups that may annoy users (at the discretion of filter developers)

**Limitazioni ed eccezioni**

- Push notifications are only blocked on sites where they are not used for practical purposes. For example, in email web clients or tools used for work purposes, such notifications will not be blocked
- Some popups that do not fall into the categories described above but still interfere with the user’s experience may be also blocked. For example, registration prompts on a site or popups that introduce the site’s features. The decision is made by filter developers
- Content access measures that ask the user to pay to access the content must not be circumvented

#### Filtro per Banner App Mobili di AdGuard

This is a filter that blocks banners and popups that encourage visitors to install mobile apps.

**Limitazioni ed eccezioni**

Banners located in the headers or in the menus of websites are not blocked if they are not animated and do not occupy a significant portion of usable space. If a banner is located in the footer, the decision is made by filter developers case-by-case. Usually, banners in the footer do not stand out against other elements and are not distracting.

#### Filtro per Widget di AdGuard

This is a filter that blocks various widgets that are not essential for the functioning of websites or for interaction with them:

- Widgets for content recommendations — related articles, similar websites, various personalized recommendations
- Chat widgets that are not integrated with the content and are not the main content of the page
- Marketing widgets:
    - Chats for communication with assistants or bots
    - Widgets with product recommendations that are shown to the user
    - Call-back forms
- Other widgets that do not have a separate category but may visually clutter the page. For example, weather widgets, currency exchange rates, job listings, and donations

**Limitazioni ed eccezioni**

This filter doesn’t block:

- Widgets closely related to the content of the page, such as comments sections, live chat streams, with an exception of unmoderated chats on sites with unofficial streams, which are often filled with spam and similar content
- Widgets for self-promotion and site-specific promotional activities
- Donation widgets, except the cases where they occupy a significant portion of the page and stand out prominently against the content. The decision to block is made by filter developers

#### Filtro Altri Fastidi di AdGuard

This filter is designed to block annoying elements that are not included in other filters, as well as to apply various tweaks. It’s purpose is to:

- Block self-promotion of websites (any type of advertising promoting goods or services owned by the site owner, without receiving commercial compensation from a third party), if it is considered an annoying element
- Block annoying elements that are not included in other categories
- Unblock actions on the page, such as opening the context menu, selecting and copying text, if they are blocked
- Speed up countdown timers when loading files from websites, if the check is not controlled by the server or is not hindered
- Apply various rules that may be useful for filter developers. For example, blocking web debugger detection

**Limitazioni ed eccezioni**

This filter may contain rules that are not suitable for all users. Sometimes it is recommended to disable this filter. The decisions to add rules to this filter are made by filter developers on a rule-by-rule basis.

## Filtri per i social media

### Filtri

AdGuard Social Media filters include:

- AdGuard Social Media filter

### Lo scopo di questi filtri

This filter will block social media widgets on third-party websites, such as “Like” and “Share” buttons, group widgets, recommendations, and similar widgets.

### Limitazioni ed eccezioni

Widgets that are part of the website’s functionality or content, such as comments, embedded posts, polls, as well as social media login widgets, are not blocked. Links to the website’s social media pages are also not blocked.

## Altri filtri

This group contains filters that are not essential for blocking advertisements.

### Terminologia

**Contextual advertising** is a type of internet advertising where the advertisement is displayed based on the content, selected audience, location, time, or other context of internet pages.

**Search advertising** is a subclass of contextual advertising where ads are displayed based on the visitor's search query.

**Self-promotion of websites** refers to the banners of a website promoting goods and services owned by the site owner, for which they do not receive compensation from third parties.

For more details on these types of advertising, refer to the [article on search ads](https://adguard.com/kb/general/ad-filtering/search-ads/).

### Filtri

- Filter unblocking search ads and self-promotion
- AdGuard DNS filter
- AdGuard Experimental filter

### Lo scopo di questi filtri

#### Filter unblocking search ads and self-promotion

This filter unblocks:

- Contextual advertising in search results when using search engines (such as Google, Bing, Yandex, DuckDuckGo)
- Self-promotion of websites

**Limitazioni ed eccezioni**

- Search advertising is unblocked only if it corresponds to the user’s search query, as it is contextual. Otherwise, the advertising remains blocked
- Self-promotion is unblocked only if it complies with the filter policy. A request for unblocking may be rejected by filter developers
- Any other advertising will not be unblocked

#### Filtro DNS di AdGuard

This filter is used in AdGuard DNS. It is not a replacement for ad-blocking filters.

**Limitazioni ed eccezioni**

Same as for ad-blocking filters.

#### Filtro AdGuard Sperimentale

This filter is intended for testing and debugging rules that potentially may break websites’ functionality. Rules are added by filter developers when there’s a need to test a particular solution. As the filter is designed for debugging purposes, its limitations are minimal.

**Limitazioni ed eccezioni**

- Rules should not intentionally break websites’ functionality
- Rules should not unblock advertisements or otherwise violate the Policy
