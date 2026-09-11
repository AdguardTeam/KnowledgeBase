---
title: Filtri di AdGuard
sidebar_position: 2
---

:::info

Questo articolo riguarda i filtri che sviluppiamo e che sono preinstallati in AdGuard. Per dargli un'occhiata, puoi [scaricare l'app di AdGuard](https://agrd.io/download-kb-adblock)

:::

Questo articolo riguarda i filtri che creiamo per l'uso in AdGuard e altri software di blocco delle inserzioni (es., uBlock Origin). I filtri sono insiemi di regole in formato di testo, usate dalle app e programmi di AdGuard per filtrare annunci e contenuti che minacciano la riservatezza, quali banner, comparse o tracciatori. I filtri contengono liste di regole basate sul loro scopo. I filtri linguistici includono regole per i segmenti linguistici corrispondenti di Internet (es. filtro tedesco). I filtri basati sulle attività raggruppano le regole che soddisfano un'attività specificata, come Filtro Social media o Filtro di Protezione dal Tracciamento. Abilitare o disabilitare un filtro semplifica l'utilizzo dell'intero elenco di regole.

## Filtri di AdGuard

- Il **Filtro di base** rimuove gli annunci dai siti web con contenuti in inglese. Originariamente basato su [EasyList](https://easylist.to/) e da noi modificato. [Visualizza regole](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_2_Base/filter.txt)
- Il **Filtro di Protezione da Tracciamento** rimuove gli annunci di vari contatori online e strumenti analitici web. Utilizzalo per nascondere le tue azioni online ed evitare il tracciamento. [Visualizza regole](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_3_Spyware/filter.txt)
- Il **Filtro di Tracciamento URL** migliora la privacy, rimuovendo i parametri di tracciamento dagli URL. Quando un utente sceglie di bloccare i parametri di tracciamento in Modalità Stealth, questo filtro sarà automaticamente abilitato. [Visualizza regole](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_17_TrackParam/filter.txt)
- Il **Filtro Social media** rimuove i numerosi pulsanti "Mi Piace" e "Tweet" e altre integrazioni social sui siti web popolari. [Visualizza regole](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_4_Social/filter.txt)
- Il **Filtro Anti-Fastidio** blocca gli elementi fastidiosi sulle pagine web. [Visualizza le regole](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_14_Annoyances/filter.txt). Include i seguenti filtri di AdGuard (tutti abilitabili separatamente dal filtro Fastidi):

    - **Avvisi sui Cookie** blocca gli avvisi sui cookie sulle pagine web. [Vedi regole](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_18_Annoyances_Cookies/filter.txt)
    - **Popup** blocca ogni tipo di popup non necessario per l'operazione dei siti web. [Vedi regole](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_19_Annoyances_Popups/filter.txt)
    - **Banner App Mobile** blocca i banner che promuovono le app mobili dei siti web. [Vedi regole](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_20_Annoyances_MobileApp/filter.txt)
    - **Widget** blocca i widget di terze parti: assistenti online, chat di supporto dal vivo, etc. [Visualizza regole](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_22_Annoyances_Widgets/filter.txt)
    - **Altri Disturbi** blocca gli elementi che non rientrano nelle categorie popolari di disturbi. [Vedi regole](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_21_Annoyances_Other/filter.txt)

- Il **Filtro di sblocco di inserzioni di ricerca e autopromozioni** sblocca le inserzioni che possono essere utili per gli utenti. Scopri di più su questo filtro in [questa pagina](../search-ads). [Vedi regole](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_10_Useful/filter.txt)
- **Filtro Anti-Monitoraggio delle e-mail ** blocca i pixel di tracciamento incorporati nelle email per impedire ai mittenti di monitorare quando apri i messaggi e raccogliere informazioni sul tuo dispositivo o sulla tua attività. [Visualizza regole](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_25_Mail_Tracking_Protection/filter.txt)
- Il **Filtro russo** rimuove inserzioni dai siti web in russo. [Vedi regole](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_1_Russian/filter.txt)
- Il **Filtro tedesco** rimuove le inserzioni dai siti web in tedesco. Originariamente basato sul filtro [EasyList Germany](https://easylist.to/) e successivamente modificato da noi, secondo i reclami dagli utenti. [Vedi regole](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_6_German/filter.txt)
- Il **filtro francese** rimuove inserzioni dai siti web in francese. Originariamente basato sul filtro [Liste FR](https://forums.lanik.us/viewforum.php?f=91) e successivamente modificato da noi, secondo i reclami dagli utenti. [Vedi regole](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_16_French/filter.txt)
- **Filtro giapponese** rimuove inserzioni dai siti web in giapponese. Originariamente basato sul filtro [Fanboy's Japanese](https://www.fanboy.co.nz/fanboy-japanese.txt) e successivamente modificato da noi, secondo i reclami dagli utenti. [Vedi regole](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_7_Japanese/filter.txt)
- **Filtro olandese** rimuove inserzioni dai siti web in olandese. Originariamente basato sul filtro [EasyList Dutch](https://easylist.to/) e successivamente modificato da noi, secondo i reclami dagli utenti. [Vedi regole](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_8_Dutch/filter.txt)
- Il **Filtro spagnolo/portoghese** rimuove le inserzioni dai siti web in spagnolo e portoghese. Originariamente basato sul filtro [Fanboy's Spanish/Portuguese](https://www.fanboy.co.nz/fanboy-espanol.txt) e successivamente modificato da noi, secondo i reclami dagli utenti. [Vedi regole](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_9_Spanish/filter.txt)
- **Filtro turco** rimuove inserzioni dai siti web in turco. Creato da noi secondo i reclami degli utenti. [Vedi regole](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_13_Turkish/filter.txt)
- Il **Filtro cinese** rimuove inserzioni dai siti web in cinese. Originariamente basato sul filtro [EasyList China](https://github.com/easylist/easylistchina) e successivamente modificato da noi, secondo i reclami dagli utenti. [Vedi regole](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_224_Chinese/filter.txt)
- **Filtro ucraino**: rimuove le inserzioni dai siti web in ucraino. Scopri di più su questo filtro in [questa pagina](https://adguard.com/en/blog/ukrainian-filter.html). [Vedi regole](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_23_Ukrainian/filter.txt)
- Il **Filtro sperimentale** serve a testare alcune nuove regole di filtraggio che potrebbero causare conflitti e interferire con il funzionamento dei siti web. Nel caso in cui queste regole funzionino senza alcun problema, sono aggiunte ai filtri principali. [Vedi regole](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_5_Experimental/filter.txt)
- Il **Filtro annunci mobile** bloccato le inserzioni sui dispositivi mobile. Contiene tutte le reti pubblicitarie note per dispositivi mobile. [Vedi regole](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_11_Mobile/filter.txt)
- **Filtro DNS** — composto da diversi altri filtri (Filtro Base di AdGuard, Filtro social media, Filtro spyware, Filtro inserzioni mobile, EasyList e EasyPrivacy) e semplificato specificatamente per essere meglio compatibile con il blocco delle inserzioni a livello di DNS. Questo filtro è usato dai server [DNS di AdGuard](https://adguard-dns.io/kb) per bloccare inserzioni e tracciatori. [Vedi regole](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_15_DnsFilter/filter.txt)

## Politica sui Filtri di AdGuard

La nostra politica sui filtri definisce cosa dovrebbero e non dovrebbero bloccare i filtri di AdGuard, nonché le regole per aggiungere e rimuovere le regole dai filtri. Leggi il testo completo della [politica sui filtri di AdGuard](../filter-policy) per informazioni dettagliate.

## Contribuire ai filtri di AdGuard

Siamo benedetti da una community unica, che non soltanto ama AdGuard, ma ricambia anche. In molti fanno volontariato per migliorare l'esperienza degli utenti di AdGuard per tutti. Sei il benvenuto per unirti al gruppo e fare la differenza. Faremo la nostra parte e ricompenseremo felicemente i membri più attivi della community. Quindi, che cosa puoi fare?

### Segnalare problemi

Ci affidiamo alla community perché ci informi sui problemi con i nostri filtri. Ci aiuta a sfruttare più efficientemente il nostro tempo e a mantenere costantemente aggiornati i filtri. Per inviare un rapporto, ti preghiamo di usare questo [strumento di segnalazione web](https://agrd.io/report).

### Suggerire Regole di Filtraggio

Troverai molti problemi aperti nella [repository dei filtri di GitHub](https://github.com/AdguardTeam/AdguardFilters/issues). Ognuno si riferisce a un problema con un sito web, come un annuncio mancante o un falso positivo. Seleziona un problema e suggerisci le tue regole nei commenti. Gli ingegneri dei filtri di AdGuard revisioneranno i tuoi suggerimenti e, se appropriati, aggiungeranno le tue regole ai filtri di AdGuard.

Ecco la [documentazione ufficiale](../create-own-filters) sulla sintassi delle regole di filtraggio di AdGuard. Sei pregato di leggerla con attenzione: ti aiuterà a creare le tue regole di filtraggio.

### Altri modi per contribuire

Ecco [una pagina dedicata](https://adguard.com/contribute.html) per chi volesse contribuire ad AdGuard in altri modi.
