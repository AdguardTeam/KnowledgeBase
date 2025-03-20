---
title: Impostazioni
sidebar_position: 4
---

:::info

Questo articolo riguarda AdGuard per Android, un blocca-inserzioni multifunzionale che protegge il tuo dispositivo a livello di sistema. Per vedere come funziona, [scarica l'app di AdGuard](https://agrd.io/download-kb-adblock)

:::

La scheda _Impostazioni_ può essere accessibile toccando l'icona più a destra in fondo allo schermo. Questa sezione contiene varie impostazioni, informazioni sulla tua app, licenza e abbonamento, e varie risorse di assistenza.

## Generali

Questa sezione ti aiuta a gestire l'aspetto e il comportamento dell'app: puoi impostare il tema del colore e la lingua, gestire le notifiche, e altro ancora. Se vuoi aiutare il gruppo di AdGuard a rilevare gli arresti anomali dell'app ed effettuare ricerche sull'utilizzabilità, puoi abilitare _Segnala automaticamente gli arresti anomali_ e _Invia dati tecnici e d'interazione_.

![Generale \*mobile_border](https://cdn.adtidy.org/blog/new/my5quggeneral.png)

In _Aggiornamenti dell'app e dei filtri_, puoi configurare gli aggiornamenti automatici dei filtri e selezionare un canale di aggiornamento dell'app. Scegli _Release_ per una maggiore stabilità, e _Beta_ o _Nightly_ per l'accesso anticipato a nuove funzioni.

![Aggiornamenti \*mobile_border](https://cdn.adtidy.org/blog/new/hqm8kupdates.png)

### Impostazioni avanzate

_Automatizzazione_ ti consente di gestire AdGuard tramite gestori attività.

_Watchdog_ aiuta a proteggere AdGuard dall'essere disabilitata dal sistema ([leggi di più sulla modalità di risparmio energetico di Android](/adguard-for-android/solving-problems/background-work/)). Il valore che inserisci sarà l'intervallo in secondi tra i controlli del watchdog.

_Il Livello di registrazione_ definisce quali dati sull'operazione dell'app devono essere registrati. Per impostazione predefinita, l'app raccoglie i dati sui suoi eventi. Il livello _Debug_ registra più eventi: abilitalo se richiesto dal gruppo di AdGuard, per aiutarli a comprendere meglio un problema. [Leggi di più su raccolta e invio dei registri](/adguard-for-android/solving-problems/log/)

![Avanzate \*mobile_border](https://cdn.adtidy.org/blog/new/vshfnadvanced.png)

La sezione delle _Impostazioni di basso livello_ è indirizzata agli utenti esperti. [Read more about low-level settings](/adguard-for-android/features/low-level-settings/)

![Impostazioni di basso livello \*mobile_border](https://cdn.adtidy.org/blog/new/n9ztplow_level.png)

## Filtraggio

Questa sezione ti consente di gestire le impostazioni di filtraggio HTTPS, i filtri e gli userscript, e a configurare il server di un proxy.

![Filtraggio \*mobile_border](https://cdn.adtidy.org/blog/new/7v5c6filtering.png)

### Filtri

AdGuard blocca inserzioni, tracciatori e fastidi, applicando le regole dai propri filtri. La maggior parte delle funzioni della sezione _Protezione_ è alimentata da [filtri AdGuard](/general/ad-filtering/adguard-filters/#adguard-filters). Se abiliti la _Protezione di base_, questa attiverà automaticamente il filtro Base di AdGuard e il Filtro per Dispositivi. E viceversa: se disattivi entrambi i filtri, anche la _Protezione di base_ sarà disabilitata.

![Filtri \*mobile_border](https://cdn.adtidy.org/blog/new/7osjdfilters.png)

I filtri abilitati per impostazione predefinita sono sufficienti per il normale funzionamento di AdGuard. Tuttavia, se desideri personalizzare il processo di filtraggio delle inserzioni, puoi usare altri filtri di AdGuard o quelli di terze parti. Per farlo, seleziona una categoria e abilita i filtri desiderati. Per aggiungere un filtro personale, tocca _Filtri personalizzati_ → _Aggiungi filtro personale_ e inserisci il suo URL o il percorso del file.

:::note

Se attivi troppi filtri, alcuni siti web potrebbero non funzionare correttamente.

:::

[Leggi di più sui filtri](https://adguard.com/en/blog/what-are-filters.html)

### Script utente

Gli script utente sono mini-programmi scritti in JavaScript che estendono la funzionalità di uno o più siti web. Per installare uno userscript, hai bisogno di un gestore speciale di script utente. AdGuard dispone di questa funzionalità e ti consente di aggiungere gli script utente tramite URL o da file.

![Script utente \*mobile_border](https://cdn.adtidy.org/blog/new/isv6userscripts.png)

#### AdGuard Extra

AdGuard Extra è uno script utente personalizzato che blocca le inserzioni complesse e i meccanismi che le reinseriscono nei siti web.

#### Disable AMP

Disabilita AMP è uno script utente che disabilita le [pagine mobili accelerate](https://en.wikipedia.org/wiki/Accelerated_Mobile_Pages) nella pagina dei risultati di ricerca di Google.

### Rete dedicata

#### Filtraggio HTTPS

Per bloccare le inserzioni e i tracciatori in gran parte dei siti web e delle app, AdGuard ha bisogno di filtrarne il traffico HTTPS. [Leggi di più sul filtraggio HTTPS](/general/https-filtering/what-is-https-filtering)

##### Certificati di sicurezza

Per gestire il traffico crittografato, AdGuard installa il proprio certificato CA sul tuo dispositivo. È sicuro: il traffico viene filtrato localmente e AdGuard verifica la sicurezza della connessione.

Sulle versioni precedenti di Android, il certificato viene installato automaticamente. Su Android 11 e successive, devi installarlo manualmente. [Istruzioni per l'installazione](/adguard-for-android/solving-problems/manual-certificate/)

Il certificato CA nell'archivio dell'utente è sufficiente per filtrare il traffico HTTPS nei browser e su alcune app. Tuttavia, esistono delle app che si fidano soltanto dei certificati dall'archivio di sistema. Per filtrare il traffico HTTPS su questi, devi installare il certificato CA di AdGuard nell'archivio di sistema. [Istruzioni](/adguard-for-android/solving-problems/https-certificate-for-rooted/)

##### App con filtraggio HTTPS

Questa sezione contiene l'elenco delle app per cui AdGuard filtra il traffico HTTPS. Ti preghiamo di notare che l'impostazione è applicabile a tutte le app soltanto se disponi dei certificati CA sia nell'archivio utente che nell'archivio di sistema.

##### Siti web con filtraggio HTTPS

Quest'impostazione ti consente di gestire i siti web per cui AdGuard dovrebbe filtrare il traffico HTTPS.

Il Filtraggio HTTPS consente ad AdGuard di filtrare i contenuti di richieste e risposte, senza mai raccogliere o archiviare tali dati. Tuttavia, per aumentare la sicurezza, noi [escludiamo i siti web che contengono informazioni potenzialmente sensibili dal filtraggio HTTPS](/general/https-filtering/what-is-https-filtering/#financial-websites-and-websites-with-sensitive-personal-data).

Inoltre, puoi aggiungere i siti web che consideri necessari alle esclusioni, selezionando una delle modalità:

- Escludi siti web specifici dal Filtraggio HTTPS
- Filtra il traffico HTTPS soltanto sui siti web aggiunti alle esclusioni

Per impostazioni predefiniti, inoltre, non filtriamo i siti web che dispongono di certificati di Convalida Estesa (EV), come i siti web finanziari. Se necessario, puoi abilitare l'opzione _Filtra siti web con certificati EV_.

#### Proxy

Puoi configurare AdGuard per instradare tutto il traffico del tuo dispositivo attraverso il tuo proxy. [Come impostare un proxy in uscita](/adguard-for-android/solving-problems/outbound-proxy)

In questa sezione, inoltre, puoi configurare una VPN di terze parti affinché funzioni con AdGuard, se il fornitore della tua VPN lo consente.

In _App operanti tramite proxy_, puoi selezionare le app che instraderanno il proprio traffico attraverso il tuo proxy specificato. Se hai abilitato _Integrazione con AdGuard VPN_, quest'impostazione svolge il ruolo delle esclusioni delle app di AdGuard VPN: ti consente di specificare le app da instradare attraverso il Tunnel VPN di AdGuard.

#### Modalità d'instradamento

Questa sezione ti consente di selezionare il metodo di filtraggio del traffico.

- _VPN Locale_ filtra il traffico attraverso una VPN creata localmente. Questa è la modalità più affidabile. A causa delle limitazioni di Android, inoltre, è il solo metodo di filtraggio del traffico disponibile a livello di sistema, sui dispositivi senza permessi di root.

:::note

La modalità _VPN Locale_ non consente che AdGuard sia usata assieme ad altre VPN. Per usare un'altra VPN con AdGuard, devi riconfigurarla affinché funzioni in modalità proxy, e configurare un proxy in uscita su AdGuard. Per AdGuard VPN, questo viene fatto automaticamente con l'aiuto della [_Modalità Integrata_](/adguard-for-android/features/integration-with-vpn).

:::

- Il _proxy automatico_ è un metodo di instradamento del traffico alternativo che non richiede l'uso di una VPN. Un vantaggio significativo è che può essere eseguito insieme a una VPN. Questa modalità richiede l'accesso di root.

- Il _proxy manuale_ prevede la configurazione di un server proxy su una porta specifica, poi configurabile nelle impostazioni del Wi-Fi. Questa modalità richiede l'accesso di root per Android 10 e superiori.

## Licenza

In questa sezione, puoi trovare le informazioni sulla tua licenza, e gestirla:

- Compra una licenza AdGuard per attivare le [funzionalità della versione completa](/adguard-for-android/features/free-vs-full)
- Accedi al tuo profilo di AdGuard o inserisci la chiave di licenza per attivare la tua licenza
- Iscriviti per attivare il tuo periodo di prova di 7 giorni, se non lo hai ancora usato
- Aggiorna lo stato della licenza dal menu' dei tre punti (⋮)
- Apri il profilo di AdGuard per gestirvi la tua licenza
- Ripristina la tua licenza: ad esempio, se hai raggiunto il limite di dispositivi per questa licenza, e desideri applicarla a un altro

![Schermata della licenza \*mobile_border](https://cdn.adtidy.org/blog/new/3wyh5hlicense.png)

## Assistenza

Usa questa sezione se hai qualsiasi domanda o suggerimento riguardanti AdGuard per Android. Consigliamo di consultare _[FAQ](https://adguard.com/support/adguard_for_android.html)_ o queste nozioni di base prima di contattare l'assistenza.

![Assistenza \*mobile_border](https://cdn.adtidy.org/blog/new/cz55usupport.png)

Se noti un'inserzione non bloccata, segnalala tramite _Segnala bloccaggio scorretto_.

Per i comportamenti inaspettati dell'app, seleziona _Segnala un bug_. Se possibile, descrivi il tuo problema nei dettagli e aggiungi i registri dell'app. [Come descrivere un problema](/guides/report-bugs/#how-to-describe-a-problem)

Per i tuoi suggerimenti, usa _Richiedi una funzione_.

:::note

GitHub è un metodo alternativo per segnalare i bug e suggerire nuove funzionalità. [Istruzioni e collegamenti del dispensario](/guides/report-bugs/#adguard-for-android)

:::
