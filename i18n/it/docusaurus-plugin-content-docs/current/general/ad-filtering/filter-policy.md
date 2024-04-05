---
title: Politica sui Filtri di AdGuard
sidebar_position: 6
---

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

I filtri di blocco degli annunci AdGuard includono:

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
- Propri inserzioni del sito, se bloccate dalle regole di filtraggio generali (consulta *Limitazioni ed eccezioni*)
- Script anti-adblock che impediscono l'utilizzo del sito (consulta *Limitazioni ed eccezioni*)
- Inserzioni pubblicitari iniettate da malware, se sono fornite informazioni dettagliate sul metodo di caricamento o i passaggi per la riproduzione
- Mining indesiderato: script che minano criptovalute senza il consenso dell'utente

### Limitazioni ed eccezioni

- Le inserzioni del sito non dovrebbero essere bloccate deliberatamente. Tuttavia, non dovrebbero essere sbloccate se il blocco è causato dalle regole di filtraggio generali
- Le misure d'accesso ai contenuti come i paywall non sono bloccate
- I muri anti-adblock saranno bloccati nei seguenti casi:
    - Insistono in modo aggressivo sulla disattivazione o la rimozione dell'ad blocker o impediscono di fatto l'utilizzo del sito web
    - Presentano descrizioni errate e fuorvianti delle possibili conseguenze dell'utilizzo dei blocchi di annunci
    - Mettono i visitatori a rischio di pubblicità dannose: quando le inserzioni provengono da fonti dubbie
- Non blocchiamo i messaggi di rilevamento dell'ad blocker che soddisfano almeno uno dei seguenti criteri:
    - Consentono l'utilizzo del sito e non coprono una significativa quantità di contenuti
    - Forniscono un'alternativa a disabilitare un ad blocker, a patto che tale alternativa non metta a rischio la privacy o la sicurezza degli utenti
    - Consentono all'utente di procedere ai contenuti del sito web od offrono uno scambio di valore fattibile, che non metta a rischio la privacy o la sicurezza dell'utente
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

Questo filtro è progettato per bloccare gli avvisi e le richieste sui cookie dalle piattaforme di gestione dei cookie (CMP). Possono essere applicati vari metodi agli avvisi sui cookie e ai CMP. In gran parte dei casi, semplicemente nascondere gli script corrispondenti è sufficiente. Tuttavia, quando la funzionalità del sito e la visualizzazione dei contenuti di terze parti richiede il consenso dei cookie, sono applicati i seguenti metodi:

- Gli scriptlet sono utilizzati per aggirare le richieste di consenso (praticamente non applicabile sui siti con restrizioni sul caricamento dei contenuti di terze parti, fino alla presa di una decisione)
- Impostazione di un cookie o di una chiave nell'archiviazione locale del sito, così che lo script consideri che l'utente abbia fatto una scelta
- Simulazione dell'azione dell'utente utilizzando una regola che clicca su un pulsante specificato, e interrompe la propria esecuzione dopo 10 secondi dal caricamento. Sono possibili due opzioni:
    - Rifiuta (a eccezione dei cookie funzionali, a seconda del sistema CMP): l'opzione preferita, poiché c'è meno rischio di caricare strumenti di analisi aggiuntivi
    - Accetta: questa opzione viene utilizzata come ultima risorsa se altri metodi falliscono. In questo caso, il sito viene inoltre controllato per l'uso di strumenti di analisi, che vengono quindi bloccati dal **Filtro anti monitoraggio AdGuard**

**Limitazioni ed eccezioni**

In alcuni casi, la decisione di aggiungere regole viene presa indipendentemente dagli sviluppatori del filtro; soprattutto, quando la scelta effettuata durante la simulazione delle azioni potrebbe influire sulla funzionalità del sito (ad esempio, la cronologia potrebbe non funzionare o le impostazioni dell'utente potrebbero non essere salvate su tale sito).

#### Filtro Popup di AdGuard

Si tratta di un filtro che blocca vari popup sulle pagine web che non sono necessari per il normale utilizzo del sito, tra cui, a titolo esemplificativo, i seguenti:

- Richieste di autorizzazione a ricevere notifiche push
- Popup e moduli per l'iscrizione a notizie, promozioni ed eventi vari, compresi canali di terze parti per riceverli (come Google News, Telegram)
- Popup che incoraggiano gli utenti a disattivare il blocco degli annunci e a violare la privacy dell'utente (a discrezione degli sviluppatori del filtro)
- Altri tipi di popup che potrebbero infastidire gli utenti (a discrezione degli sviluppatori del filtro)

**Limitazioni ed eccezioni**

- Le notifiche push vengono bloccate solo sui siti in cui non vengono utilizzate per scopi pratici. Ad esempio, nei client web di posta elettronica o negli strumenti utilizzati per motivi di lavoro, tali notifiche non verranno bloccate
- Potrebbero essere bloccati anche alcuni popup che non rientrano nelle categorie sopra descritte ma che comunque interferiscono con l'esperienza dell'utente. Ad esempio, richieste di registrazione su un sito o popup che introducono le funzionalità del sito. La decisione viene presa dagli sviluppatori del filtro
- Le misure di accesso ai contenuti che richiedono all'utente di pagare per accedere ai contenuti non devono essere aggirate

#### Filtro per Banner App Mobili di AdGuard

Si tratta di un filtro che blocca banner e popup che incoraggiano i visitatori a installare app mobili.

**Limitazioni ed eccezioni**

I banner posizionati nelle intestazioni o nei menu dei siti web non vengono bloccati se non sono animati e non occupano una porzione significativa di spazio utilizzabile. Se un banner si trova nel footer, la decisione viene presa caso per caso dagli sviluppatori del filtro. Di solito, i banner nel piè di pagina non si distinguono dagli altri elementi e non distraggono.

#### Filtro per Widget di AdGuard

Si tratta di un filtro che blocca diversi widget non essenziali per il funzionamento dei siti web o per l'interazione con essi:

- Widget per consigli sui contenuti: articoli correlati, siti web simili, vari consigli personalizzati
- Widget di chat che non sono integrati con il contenuto e non costituiscono il contenuto principale della pagina
- Widget di marketing:
    - Chat per comunicare con assistenti o bot
    - Widget con consigli sui prodotti mostrati all'utente
    - Moduli di richiamata
- Altri widget che non hanno una categoria separata ma potrebbero ingombrare visivamente la pagina. Ad esempio, widget meteo, tassi di cambio, annunci di lavoro e donazioni

**Limitazioni ed eccezioni**

Questo filtro non blocca:

- Widget strettamente correlati al contenuto della pagina, come sezioni commenti, flussi di chat dal vivo, a eccezione delle chat non moderate su siti con flussi non ufficiali, che sono spesso pieni di spam e contenuti simili
- Widget per l'auto promozione e attività promozionali specifiche del sito web
- Widget per le donazioni, tranne i casi in cui occupano una parte significativa della pagina e risaltano in modo prominente rispetto al contenuto. La decisione di bloccare viene presa dagli sviluppatori del filtro

#### Filtro Altri Fastidi di AdGuard

Questo filtro è progettato per bloccare elementi fastidiosi che non sono inclusi in altri filtri, nonché per applicare varie modifiche. Il suo scopo è quello di:

- Bloccare l'auto promozione dei siti web (qualsiasi tipo di pubblicità che promuova beni o servizi di proprietà del proprietario del sito, senza ricevere compensi commerciali da terzi), se considerata un elemento fastidioso
- Bloccare gli elementi fastidiosi che non sono inclusi in altre categorie
- Sbloccare le azioni sulla pagina, come l'apertura del menu contestuale, la selezione e la copia del testo, se sono bloccate
- Velocizzare i timer del conto alla rovescia durante il caricamento dei file dai siti web, se il controllo non è controllato dal server o non è ostacolato
- Applicare varie regole che possono essere utili agli sviluppatori di filtri. Ad esempio, bloccare il rilevamento del debugger web

**Limitazioni ed eccezioni**

Questo filtro potrebbe contenere regole non adatte a tutti gli utenti. A volte si consiglia di disabilitare questo filtro. Le decisioni di aggiungere regole a questo filtro vengono prese dagli sviluppatori del filtro regola per regola.

## Filtri per i social media

### Filtri

I filtri dei social media di AdGuard includono:

- Filtro AdGuard Social Media

### Lo scopo di questi filtri

Questo filtro bloccherà i widget dei social media sui siti web di terze parti, quali i pulsanti "Mi Piace" e "Condividi", i widget di gruppo, i consigli, e widget simili.

### Limitazioni ed eccezioni

I widget che fanno parte della funzionalità o dei contenuti del sito web, quali commenti, post incorporati, sondaggi, nonché widget di accesso ai social media, non sono bloccati. Anche i link alle pagine social del sito web non sono bloccati.

## Altri filtri

Questo gruppo contiene i filtri che non sono essenziali per bloccare le inserzioni.

### Terminologia

**La pubblicità contestuale** è un tipo di pubblicità su Internet in cui l'annuncio viene visualizzato in base al contenuto, al pubblico selezionato, alla posizione, all'ora o ad altro contesto delle pagine Internet.

La **pubblicità di ricerca** è una sottoclasse della pubblicità contestuale in cui gli annunci vengono visualizzati in base alla query di ricerca del visitatore.

L'**auto promozione dei siti web** si riferisce ai banner di un sito web che promuovono beni e servizi di proprietà del proprietario del sito, per i quali non riceve compensi da terzi.

Per maggiori dettagli su questi tipi di pubblicità, si prega di consultare l'[articolo sugli annunci di ricerca](https://adguard.com/kb/general/ad-filtering/search-ads/).

### Filtri

- Filtro di sblocco annunci di ricerca e auto-promozione
- Filtro DNS di AdGuard
- Filtro sperimentale di AdGuard

### Lo scopo di questi filtri

#### Filtro di sblocco annunci di ricerca e auto-promozione

Questo filtro sblocca:

- Pubblicità contestuali nei risultati della ricerca utilizzando i motori di ricerca (quali Google, Bing, Yandex, DuckDuckGo)
- Auto-promozione dei siti web

**Limitazioni ed eccezioni**

- Le inserzioni di ricerca sono sbloccate soltanto se corrispondono alla richiesta di ricerca dell'utente, essendo contestuale. Altrimenti la pubblicità resta bloccata
- L'auto-promozione è sbloccata soltanto se è conforme alla politica di filtraggio. Un richiesta di sblocco potrebbe essere rifiutata dagli sviluppatori del filtro
- Qualsiasi altra pubblicità non verrà sbloccata

#### Filtro DNS di AdGuard

Questo filtro è utilizzato in AdGuard DNS. Non è un sostituto ai filtri di blocco degli annunci.

**Limitazioni ed eccezioni**

Lo stesso che per i filtri di blocco degli annunci.

#### Filtro AdGuard Sperimentale

Questo filtro è destinato al test e al debug delle regole che potenzialmente possono interrompere la funzionalità dei siti web. Le regole vengono aggiunte dagli sviluppatori di filtri quando è necessario testare una particolare soluzione. Poiché il filtro è progettato per scopi di debug, le sue limitazioni sono minime.

**Limitazioni ed eccezioni**

- Le regole non dovrebbero corrompere intenzionalmente la funzionalità dei siti web
- Le regole non dovrebbero sbloccare le inserzioni o altrimenti violare la Politica
