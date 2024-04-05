---
title: Panoramica delle funzionalità
sidebar_position: 1
---

:::info

Questo articolo riguarda l'Estensione di browser AdGuard, che protegge solo il tuo browser. Per proteggere il tuo intero dispositivo, [scarica l'app di AdGuard](https://agrd.io/download-kb-adblock)

:::

AdGuard fornisce numerosi prodotti software che bloccano annunci e tracciatori, su diverse piattaforme. Uno dei prodotti più popolari di AdGuard è un'estensione gratuita che funziona su cinque browser popolari: Chrome, Firefox, Edge, Opera e Yandex Browser. Browser extensions include basic ad-blocking features but cannot be compared with full-featured desktop programs, such as [AdGuard for Windows](/adguard-for-windows/features/home-screen) and [AdGuard for Mac](/adguard-for-mac/overview).

![Estensione AdGuard Browser per Chrome *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_overview.png)

## Disponibilità {#br-extension}

[L'estensione di browser AdGuard](https://adguard.com/adguard-browser-extension/overview.html) è disponibile per la maggior parte dei browser principali. Puoi trovarla facilmente sul negozio online del tuo browser o sul nostro sito web ufficiale.

![Disponibile per i browser più popolari *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_availability.png)

:::note

Per Safari, abbiamo un'estensione indipendente. Dal rilascio di [Safari 13](https://adguard.com/en/blog/adguard-safari-1-5.html), la maggiorità delle estensioni di blocco degli annunci hanno sperimentato grossi problemi e, molte di esse, hanno smesso di funzionare. We had to develop a [separate extension for Safari](/adguard-for-safari/features/general) that has some differences in comparison with the extension described in this article.

:::

**Non dimenticare che la funzionalità di ogni estensione è rigorosamente limitata dalle capacità del browser.** Quindi, se desideri ottenere una protezione completa, considera d'installare un programma indipendente per il tuo computer. [Ecco perché](#comparison).

## Blocco degli annunci {#adblocker}

Il blocco degli annunci è chiaramente la funzionalità principale di qualsiasi app dedicata e, AdGuard, non è un'eccezione. L'estensione bloccherà correttamente gli annunci su qualsiasi pagina nel tuo browser. Il blocco degli annunci si basa sui cosiddetti elenchi di filtraggio o, semplicemente, [filtri](/general/ad-filtering/how-ad-blocking-works). I filtri possono essere abilitati o disabilitati nelle impostazioni della tua estensione. Puoi personalizzare il blocco degli annunci, attivando i filtri specifici.

### Filtri {#filters}

In sostanza, gli elenchi di filtraggio sono serie di regole scritte in un linguaggio speciale. Il tuo blocco degli annunci interpreta e implementa tali regole. Di conseguenza, smetti di vedere annunci sulle pagine web.

![Filtri *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_filters.png)

Tutti i filtri sono raggruppati a seconda del loro ruolo. Ad esempio, esistono categorie per i filtri di blocco degli annunci, di protezione della privacy, correlati ai social, etc. Puoi abilitare singoli filtri o l'intero gruppo, in una volta sola.

![Filtri di blocco annunci *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_filters1.png)

#### Filtri personalizzati {#custom}

Mentre le funzionalità degli altri gruppi di filtraggio sono più o meno prevedibili, esiste un gruppo, detto *Personalizzati*, che potrebbe sollevare ulteriori dubbi.

![Filtri personalizzati *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_custom_filters.png)

In questa scheda, puoi aggiungere filtri non presenti nell'estensione di default. Esistono numerosi [filtri disponibili pubblicamente su Internet](https://filterlists.com). Inoltre, puoi creare e aggiungere i tuoi filtri. In effetti, puoi creare qualsiasi serie di filtri e personalizzare il blocco degli annunci come preferisci.

Per aggiungere un filtro, basta cliccare *Aggiungi filtro personalizzato*, inserire l'URL o il percorso del file del filtro che desideri aggiungere e cliccare *Avanti*.

![Aggiungi un filtro personalizzato *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_custom_filters1.png)

### Regole utente {#user-rules}

Le *regole utente* sono un altro strumento che ti aiuta a personalizzare il blocco degli annunci.

![Regole utente *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_user_rules.png)

Esistono diversi modi per aggiungere le nuove regole. Il più diretto è semplicemente digitare una regola, ma richiede una certa conoscenza della [sintassi delle regole](/general/ad-filtering/create-own-filters).

Inoltre, puoi importare un elenco di filtraggio pronto all'uso da un file di testo. **Assicurati che le differenti regole siano separate da interruzioni di riga.** Nota che è meglio importare un elenco di filtraggio pronto all'uso nella scheda dei [Filtri personalizzati](#custom).

Inoltre, puoi esportare le tue regole di filtraggio. Quest'opzione è ottima per trasferire i tuoi elenchi di regole tra browser o dispositivi.

Quando aggiungi un sito web alla lista consentita (di più a riguardo [di seguito](#allowlist)) o utilizzi lo strumento Assistant per nascondere un elemento sulla pagina, una regola corrispondente è anche salvata nelle *Regole utente*.

### Lista consentita {#allowlist}

La *lista consentita* è utilizzata per escludere certi siti web dal filtraggio. Le regole di blocco non si applicano ai siti web di questo elenco.

![Lista consentita *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_allowlist.png)

Inoltre, la *lista consentita* può essere invertita: puoi sbloccare gli annunci ovunque, tranne che sui siti web aggiunti a questo elenco. Per farlo, attiva l'opzione *Inverti lista consentita*.

![Inverti lista consentita *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_allowlist1.png)

Inoltre, puoi importare ed esportare le liste consentite esistenti. È utile, ad esempio, se desideri applicare le stesse regole d'autorizzazione, su ognuno dei tuoi browser.

## Modalità Invisibilità {#stealth-mode}

La *Modalità Invisibilità* mira ad assicurare la protezione dei dati personali sensibili, da tracciatori e truffatori online.

![Modalità Invisibilità *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_stealth_mode.png)

In Modalità Invisibilità, puoi impedire a un sito web di visualizzare i tuoi quesiti di ricerca utilizzati per trovarlo su Internet, eliminare automaticamente i cookie di terze parti o del sito stesso, etc. Un [articolo separato](/general/stealth-mode) è dedicato a tutte queste funzionalità.

:::note

Alcune delle opzioni *Modalità Invisibilità* disponibili nelle app complete non sono presenti nelle estensioni dei browser a causa di restrizioni tecniche.

:::

## Altre funzionalità e opzioni {#other}

Oltre ai grandi moduli chiave dell'estensione del browser AdGuard, ci sono molte altre funzionalità specifiche che possono essere configurate nelle schede *Generali* e *Impostazioni aggiuntive* delle impostazioni dell'estensione.

### Generale {#general}

Nella scheda *Generale*, puoi consentire la ricerca di annunci e l'[auto-promozione dei siti web](/general/ad-filtering/search-ads), abilitare l'attivazione automatica di filtri specifici per la lingua, indicare l'intervallo di aggiornamento dei filtri, etc.

![Generale *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_general.png)

Inoltre, qui puoi abilitare la [*Protezione da phishing e malware*](/general/browsing-security).

Puoi salvare la configurazione delle tue impostazioni cliccando il pulsante *Esporta impostazioni*. Le impostazioni saranno salvate come un file .json. Per caricare la configurazione di impostazioni precedentemente salvata, utilizza la funzionalità *Importa impostazioni*. Puoi anche utilizzarla per passare tra diversi profili di impostazioni, o persino per trasferire le configurazioni di impostazioni tra browser differenti.

### Impostazioni aggiuntive {#misc}

La sezione delle *Impostazioni aggiuntive* contiene una gamma di varie impostazioni, correlate al processo di blocco degli annunci e di utilizzabilità dell'applicazione.

![Impostazioni aggiuntive *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_additional_settings.png)

Da questa scheda, puoi attivare i filtri ottimizzati, abilitare le notifiche sugli aggiornamenti dell'estensione, aprire il *Registro di filtraggio* o cancellare le statistiche di annunci e tracciatori bloccati.

Inoltre, puoi decidere di aiutarci con lo sviluppo dei filtri, inviandoci le statistiche sulle regole applicate: quali sono innescate, su quali siti web e quanto spesso. Questa opzione è disabilitata di default in quanto non raccogliamo dati dell'utente senza consenso. Tuttavia, se l'abiliti, tutti i dati saranno strettamente anonimizzati.

### Info {#about}

Nella sezione *Info*, puoi trovare le informazioni sulla versione corrente, collegamenti all'EULA e la Politica sulla Privacy e alla repository dell'estensione del Browser su GitHub.

![Info *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_about.png)

## Menu principale dell'estensione {#main-menu}

La pagina principale dell'estensione è accessibile cliccando sull'icona dell'estensione, nella barra degli strumenti del tuo browser.

![Menu principale *mobile_border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_main.png)

Sulla pagina principale, puoi nascondere qualsiasi elemento, su qualsiasi pagina, manualmente (sarà aggiunta una regola corrispondente alle *Regole dell'utente*), aprire il *Registro di filtraggio* per visualizzare al volo le informazioni complete sul traffico del tuo browser e le richieste di blocco, o visualizzare il rapporto di sicurezza di un sito web. Inoltre, puoi inviare un reclamo su qualsiasi sito web (ad esempio, se alcuni annunci sulla pagina non sono bloccati, i nostri ingegneri di filtraggio revisioneranno il rapporto e risolveranno il problema) e visualizzare le statistiche sulle regole di blocco applicate.

Tutte le richieste web effettuate dal browser sono registrate nel *Registro di filtraggio*, insieme a informazioni dettagliate su ogni richiesta. Il *Registro di filtraggio* semplifica, ad esempio, il monitoraggio delle richieste bloccate dall'estensione di browser AdGuard. Inoltre, ti consente di bloccare qualsiasi richiesta o di aggiungere una richiesta bloccata in precedenza alla lista consentita, in due click. Inoltre, il *Registro di filtraggio* ti offre numerose opzioni per ordinare le richieste web, il che può essere utile creando le tue regole di filtraggio. Puoi aprire il *Registro di filtraggio* selezionando la voce corrispondente nel menu principale, o dalla pagina delle impostazioni (nella scheda "Impostazioni aggiuntive").

Cliccando le icone in alto a destra sul menu principale dell'estensione, puoi aprire le impostazioni dell'estensione o interrompere la protezione.

## Estensione di browser AdGuard vs. app indipendenti {#comparison}

<iframe width="560" height="315" class="youtube-video" src="https://www.youtube-nocookie.com/embed/ZGwceZP-0mM" title="Lettore video di YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Il vantaggio principale dei programmi indipendenti di AdGuard rispetto alle estensioni del browser è che i programmi possono bloccare gli annunci su qualsiasi browser e su quasi tutte le app. Puoi utilizzare diversi browser allo stesso tempo: l'app filtrerà gli annunci e le minacce online in tutti essi, altrettanto bene.

La seconda differenza è che le possibilità del blocco degli annunci basato sull'estensione sono rigorosamente limitate dalle linee guida del browser. Le estensioni del browser devono conformarsi alle politiche del browser, in cui il blocco degli annunci potrebbe essere limitato. Dunque, alcuni tipi di regole di filtraggio non sono supportate dalle estensioni. La funzionalità delle app per desktop non è limitata, quindi, hanno una migliore qualità di filtraggio.

Mentre l'estensione di browser AdGuard è gratuita e facile da installare e contiene filtri per bloccare annunci e combattere le minacce online, le app complete sono più potenti e includono un elenco di funzionalità avanzate. Visualizza tutte le differenze nella seguente tabella comparativa.

![Estensione vs. App *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_comparison.png)

`1`: entro le limitazioni del browser ed esclusivamente sul browser in cui è installata;

`2`: l'estensione non è in grado di rilevare le richieste da altre estensioni. Se un'estensione dannosa o di tracciamento invia una richiesta al proprio server per mostrarti annunci o tracciare la tua attività, l'estensione del browser AdGuard non sarà in grado di bloccare tale richiesta;

`3` – non tutti i tipi di annunci e minacce possono essere bloccati dalle estensioni del browser per via di alcune limitazioni dello stesso. Alcuni elementi potrebbero arrivare sulla pagina e rallentare il processo di caricamento. Inoltre, a differenza del blocco di annunci basato su browser, l'app di AdGuard blocca gli annunci prima che siano caricati sul browser. Ciò, risparmia traffico e velocizza il caricamento della pagina.
