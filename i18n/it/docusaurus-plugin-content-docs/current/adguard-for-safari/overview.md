---
title: Panoramica delle funzionalità
sidebar_position: 1
---

:::info

Questo articolo riguarda AdGuard per Safari, che protegge solo il tuo browser Safari. Per proteggere il tuo intero dispositivo, [scarica l'app di AdGuard](https://agrd.io/download-kb-adblock)

:::

AdGuard per Safari è stato progettato per conformarsi alle restrizioni di Apple per le estensioni del browser di blocco degli annunci ed è il blocco degli annunci più popolare per Safari. Sebbene non possa esser paragonata alle nostre app di blocco degli annunci per desktop, è gratuita e può proteggerti da annunci, tracciatori e siti web dannosi e quelli di phishing.

## Generali {#general}

![Scheda Generale](https://cdn.adtidy.org/public/Adguard/Blog/AG_for_Safari_in-depth_review/General.png)

La prima scheda è la schermata Generale, dove puoi configurare cose fondamentali quali notifiche, intervalli di aggiornamento e avviare AdGuard all'avvio di sistema. Inoltre, puoi scegliere di mostrare l'icona di AdGuard nella barra dei menu. Qui, puoi inoltre attivare il [blocco dei contenuti](#contentblockers) per bloccare annunci, tracciatori, disturbi, etc.

## Filtri {#filters}

![Scheda Filtri](https://cdn.adtidy.org/public/Adguard/Blog/AG_for_Safari_in-depth_review/Filters.png)

Un filtro è un elenco di regole scritte in una sintassi speciale. Seguendo tali regole, il blocco dei contenuti può filtrare il traffico web: bloccare gli annunci o le richieste ai siti web dannosi.

I filtri sono combinati in otto categorie tematiche: *Blocco Annunci, Privacy, Widget Social, Disturbi, Sicurezza, Filtri specifici per lingua, Personalizzati e Altri filtri*.

Ulteriori informazioni su [filtri AdGuard](/general/ad-filtering/adguard-filters) o [filtraggio degli annunci in generale](/general/ad-filtering/how-ad-blocking-works).

Nella scheda Filtri, puoi abilitare l'intera categoria o filtri separati. Le modifiche nella scheda Filtri si riflettono nella sezione Blocco dei contenuti (che si trova nella scheda Generale).

## Blocco dei contenuti {#contentblockers}

![Scheda Blocco dei contenuti](https://cdn.adtidy.org/public/Adguard/Blog/AG_for_Safari_in-depth_review/Contentblockers.png)

Un blocco dei contenuti è un gruppo tematico di filtri. I filtri relativi alla privacy sono inclusi nel blocco dei contenuti con il nome corrispondente — *AdGuard Privacy*.

Il Blocco dei contenuti è stato progettato per due motivi: strutturare i filtri e conformarsi alle limitazioni di Apple.

[Nel 2019](https://adguard.com/en/blog/adguard-safari-1-5.html) Apple ha imposto dei limiti agli ad blocker per Safari, consentendo loro di utilizzare solo 50.000 regole di filtraggio contemporaneamente. Poiché questo numero non era sufficiente affinché un ad blocker fornisse una buona qualità di filtraggio (Filtro di Base AdGuard da solo ha 30.000 regole di filtraggio), abbiamo suddiviso AdGuard per Safari in 6 blocchi dei contenuti ciascuno contenente fino a 50.000 regole.

[Nel 2022](https://adguard.com/en/blog/adguard-for-safari-1-11.html) Apple ha aumentato il limite delle regole di filtraggio per ciascun blocco dei contenuti a 150.000 regole applicate contemporaneamente. Per quanto riguarda AdGuard per Safari, è possibile abilitare fino a 900.000 regole per tutti e sei i blocchi dei contenuti.

Mentre il limite è stato aumentato, la struttura dei blocchi dei contenuti è rimasta la stessa.

Nella scheda Blocco dei Contenuti, puoi visualizzare quali sono abilitati, quante regole ognuno di essi sta utilizzando e quali filtri stanno funzionando.

:::tip

Puoi gestire i filtri abilitati nella scheda dei Filtri. Nella sezione di Blocco dei Contenuti, puoi visualizzare soltanto l'elenco dei filtri già abilitati.

:::

### AdGuard Generale {#adguard_general}

*AdGuard Generale* è un blocco dei contenuti che combina i filtri più essenziali per bloccare gli annunci. Consigliamo di mantenere sempre abilitato il Filtro di Base di AdGuard.

### AdGuard Privacy {#adguard_privacy}

Questo blocco dei contenuti è lo strumento principale contro contatori e altri strumenti analitici web. Il *filtro di Protezione dal Tracciamento di AdGuard* è abilitato di default.

### AdGuard Social {#adguard_social}

*AdGuard Social* contiene i filtri contro pulsanti, widget, script e icone dei social media. In questa sezione si possono trovare altri filtri dei fastidi: filtri contro popup, banner di app mobili, avvisi sui cookie e altri. Per abilitarli, trova *Widget Social* nella scheda dei Filtri.

### AdGuard Sicurezza {#adguard_security}

Questo blocco dei contenuti unisce diversi filtri correlati alla sicurezza. La *Blocklist dei Domini Malware* blocca i domini noti per diffondere malware e spyware. *Spam404* ti protegge dai truffatori in Internet. L'*Elenco di Filtri di NoCoin* interrompe i cripto-miner basati sul browser, come Coinhive.

### AdGuard Altri {#adguard_other}

*AdGuard Altri* contiene filtri con varie funzionalità. Ad esempio, contiene un filtro che sblocca gli annunci di ricerca e gli annunci di auto-promozione. In alcuni casi, aiuta a trovare esattamente ciò che stai cercando, poiché questo tipo di annunci sono più rilevanti e meno intrusivi di altri.

:::nota Dichiarazione di non responsabilità

Non abbiamo "annunci accettabili" pagati dagli inserzionisti. Invece, forniamo agli utenti un'opzione per visualizzare gli [annunci di ricerca e l'auto-promozione dei siti web](/general/ad-filtering/search-ads).

:::

### AdGuard Personalizzati {#adguard_custom}

![Scheda Personalizzati](https://cdn.adtidy.org/public/Adguard/Blog/AG_for_Safari_in-depth_review/AGCustom.png)

Se necessiti di altri filtri, puoi aggiungerli in *AdGuard Personalizzati*. Per aggiungere un filtro personalizzato, inserisci un URL o un percorso locale di file nel campo rilevante. Puoi trovare nuovi filtri su [filterlists.com](https://filterlists.com/).

## Regole dell'utente {#userrules}

Le regole dell'utente sono utilizzabili per personalizzare il blocco degli annunci. Possono essere aggiunte manualmente, importate o create automaticamente al blocco di un elemento su una pagina. Per aggiungere le tue regole di filtraggio, utilizza una [sintassi speciale](/general/ad-filtering/create-own-filters).

## Info {#about}

![Scheda Informazioni](https://cdn.adtidy.org/public/Adguard/Blog/AG_for_Safari_in-depth_review/About.png)

Nella scheda Informazioni, puoi visualizzare le informazioni sulla versione corrente del tuo prodotto e i collegamenti ai documenti legali. È inoltre presente un collegamento alla nostra repository su GitHub. Lì, puoi monitorare lo sviluppo del prodotto, creare richieste di funzionalità e segnalazioni di bug.

:::nota Promemoria

AdGuard per Safari può essere scaricato gratuitamente [dall'App Store](https://apps.apple.com/app/adguard-for-safari/id1440147259). Le istruzioni dettagliate di configurazione sono disponibili nella [Base di conoscenza](../installation).

:::
