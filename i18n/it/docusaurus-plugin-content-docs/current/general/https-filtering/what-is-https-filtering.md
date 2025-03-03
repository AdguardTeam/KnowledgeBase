---
title: Cos'è il filtraggio HTTPS
sidebar_position: 1
---

### Cos'è HTTPS?

HTTPS (acronimo inglese per Protocollo di Trasferimento IperTestuale Sicuro) è un'estensione del protocollo HTTP, che supporta la crittografia per aumentare la sicurezza. Questo protocollo è utilizzato per trasmettere in sicurezza informazioni preziose, quali dati personali, dettagli di carte di credito/debito, etc.

Utilizzare HTTPS è estremamente vantaggioso poiché il traffico crittografato è protetto dall'intercettazione da terze parti, cosa che non possiamo far altro che accoglierlo positivamente. L'accettazione di HTTPS è cresciuta negli ultimi anni, principalmente perché è stata [incoraggiata da Google](https://webmasters.googleblog.com/2014/08/https-as-ranking-signal.html), nonché a causa dell'emergenza dell'autorità di certificazione gratuita [Let’s Encrypt](https://en.wikipedia.org/wiki/Let's_Encrypt).

Il diagramma seguente descrive la differenza tra il protocollo HTTP semplice e il protocollo HTTPS sicuro.

![Cos'è HTTPS?](https://cdn.adtidy.org/public/Adguard/Blog/https/what_is_https.png)

### Cos'è un certificato di sicurezza?

In breve, HTTPS sta per crittografia dei dati. Tuttavia, è presente un problema: come puoi assicurarti di aver stabilito una connessione crittografata con il sito web corretto? Ecco dove entrano in gioco i certificati di sicurezza. Un certificato serve come prova che il sito web è davvero chi o cosa afferma di essere. Se un sito web non dispone di tale certificato, o se il certificato contiene informazioni errate, il browser non ti consentirà di stabilire una connessione sicura. È importante che il certificato utilizzato da un sito web sia emesso da un'autorità di certificazione (CA), considerata attendibile dal tuo browser. Una simile CA garantisce che il certificato SSL sia, senza dubbio, stato emesso dal proprietario del sito web.

### Perché AdGuard deve poter filtrare HTTPS?

Gran parte dei siti, a oggi, utilizzano HTTPS, il che si applica anche agli annunci. Ecco alcuni siti web popolari da cui non puoi rimuovere gli annunci, senza il Filtraggio HTTPS: youtube.com, facebook.com e x.com.

### Come funziona il filtraggio HTTPS?

Se fosse facile, HTTPS non sarebbe così sicuro. Quando un browser tenta di connettersi a un server, AdGuard stabilisce due connessioni sicure: una con il browser (o un'altra app) e l'altra con il server. Il browser deve fidarsi di AdGuard e delle connessioni che crea. Per questo, AdGuard genera un certificato di root speciale (e univoco) e lo installa nel sistema e, quando richiesto, su alcuni browser (es., Firefox). AdGuard ora può visualizzare gli pacchetti dei dati all'interno della connessione sicura e quindi fare il suo lavoro: bloccare annunci e tracciatori.

Per una migliore comprensione, abbiamo raffigurato questo processo:

![Come funziona il filtraggio HTTPS](https://cdn.adtidy.org/public/Adguard/Blog/https/what_is_https_filtering.png)

### Il mio traffico rimane crittografato e sicuro?

Ovviamente! La tua connessione con un server remoto resta crittografata e sicura. AdGuard, proprio come il tuo browser, controlla il certificato del server prima di decidere se filtrarlo o no.

Tuttavia, il filtraggio HTTPS presenta degli svantaggi. Il più importante è che nasconde il certificato effettivo del sito web dal browser. Invece, il browser visualizza il certificato emesso da AdGuard.

Per questo, abbiamo adottato delle misure aggiuntive per migliorare la sicurezza di connessione.

### Siti web finanziari e con dati personali sensibili

Di default, AdGuard non filtra alcuna informazione sui siti web di banche, sistemi di pagamento o siti web contenenti dati personali preziosi. Manteniamo un elenco di [migliaia di esclusioni](https://github.com/AdguardTeam/HttpsExclusions).

Se credi che qualche sito web dovrebbe essere aggiunto a questo elenco, sei pregato di [farcelo sapere](https://github.com/AdguardTeam/HttpsExclusions/issues/new).

### Certificati a Convalida Estesa (EV)

AdGuard ti consente di disabilitare il filtraggio per tutti i siti web che utilizzano i certificati di convalida.

Un certificato EV offre un livello maggiore di sicurezza e fornisce maggiori garanzie di un certificato regolare, provando che il sito web non sia fraudolento o falso.

### Problemi correlati al filtraggio HTTPS

Uno [studio del 2017](https://cdn.adtidy.org/public/Adguard/Blog/https/interception-ndss17.pdf), dimostra che dal 5 al 10% delle connessioni HTTPS, sono stabilite da applicazioni di filtraggio HTTPS. Solitamente, ciò viene eseguito da vari tipi di software antivirus. La cattiva notizia è che 24 dei 26 antivirus testati riduceva, in vari modi, il livello di sicurezza della connessione, mentre i due terzi delle connessioni create erano soggette ad hacking.

I ricercatori sono giunti a una semplice conclusione: la community della sicurezza di Internet dovrebbe prestare maggiore attenzione alle applicazioni che filtrano le connessioni sicure. E gli sviluppatori di tali software, devono prestare molta attenzione alla qualità delle implementazioni di filtraggio.

Vorremmo sottolineare che AdGuard non è stata testata nel suddetto studio. Abbiamo eseguito le stime in base alla loro serie di test e, al momento del test, avremmo potuto ricevere il punteggio massimo: A\*. Tuttavia, questo punteggio non è perfetto. Durante lo studio, i ricercatori hanno identificato dei problemi omessi nella valutazione finale.

Qui ad AdGuard, acconsentiamo pienamente con tali conclusioni. Inoltre, vorremmo essere il più aperti possibili con gli utenti e vorremmo parlare dei problemi che stiamo correntemente riscontrando e dei passaggi che intraprenderemo per migliorare la qualità e la sicurezza del meccanismo di filtraggio. L'elenco di questi problemi è ordinato per priorità.

Gran parte dei problemi scoperti nello studio precedente, sono correlati ai meccanismi di convalida del certificato. Questo è ciò su cui vogliamo concentrarci per primo. Stiamo lavorando a una libreria separata di convalida dei certificati. Inoltre, vogliamo renderla open source. Un [articolo separato](../known-issues) elenca tutti gli svantaggi noti del filtraggio HTTPS su AdGuard, nonché i nostri piani per risolverli.

#### Problemi di filtraggio HTTPS su Android 7 e successive

[A partire da Android 7](https://adguard.com/en/blog/android-nougat-release-and-what-does-it-mean-for-adguard-users.html), gli sviluppatori devono indicare esplicitamente che le loro app si fidano dei certificati installati dagli utenti. Non tutti vogliono, o se ne preoccupano. Cosa significa per AdGuard? AdGuard installa un certificato utente per poter filtrare il traffico HTTPS. Se un'app non si fida di tale certificato, il suo traffico HTTPS non sarà filtrato. Cosa fare?

La prima cosa che vale la pena menzionare è che molte app (anche le più moderne), continuano a fidarsi dei certificati dell'utente. Nulla è cambiato, in questo senso. Inoltre, quasi tutti i browser si fidano di tali certificati. Potrebbero esistere dei browser esotici che non se ne fidano, ma sono una rara eccezione alla pratica comune.

Infine, se il tuo dispositivo ha i permessi di root, puoi spostare il certificato di AdGuard all'archivio di sistema. Così, non devi preoccuparti di alcuna autorizzazione che un'app in particolare potrebbe o non potrebbe avere — il traffico HTTPS sarà filtrato per le app moderne, così come per le meno recenti. Sei pregato di tenere a mente che, in questo caso, si applicano alcune limitazioni di sicurezza aggiuntive (es., HPKP o `Expect-CT`), ad AdGuard.

### Come verificare manualmente la qualità HTTPS?

Esistono svariati siti web dedicati su cui puoi verificare la qualità della tua connessione HTTPS. Questi siti web verificano se il tuo browser (o, nel nostro caso, il tuo browser con AdGuard), è suscettibile alle vulnerabilità comuni. Se pianifichi di utilizzare qualsiasi programma che filtri HTTPS, non necessariamente AdGuard (es., un antivirus), ti consigliamo di verificare la qualità della connessione su tali siti web.

- [https://www.ssllabs.com/ssltest/viewMyClient.html](https://www.ssllabs.com/ssltest/viewMyClient.html)
- [https://www.howsmyssl.com/](https://www.howsmyssl.com/)
- [https://badssl.com/](https://badssl.com/)
