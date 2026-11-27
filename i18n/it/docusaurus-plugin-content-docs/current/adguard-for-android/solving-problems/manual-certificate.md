---
title: Installazione dei certificati sui dispositivi con Android 11+
sidebar_position: 11
---

:::info

Questo articolo riguarda AdGuard per Android, un blocca-inserzioni multifunzionale che protegge il tuo dispositivo a livello di sistema. Per vedere come funziona, [scarica l'app di AdGuard](https://agrd.io/download-kb-adblock)

:::

Per poter [filtrare il traffico HTTPS](/general/https-filtering/what-is-https-filtering.md) (estremamente importante, poiché adoperato da gran parte delle inserzioni), AdGuard deve installare un certificato nell'archivio utente del tuo dispositivo. Sulle versioni precedenti di Android, ciò avveniva automaticamente, ma su Android 11 e successivi, gli utenti devono installarlo manualmente.

![Certificato *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/manual-certificate/screenCA.gif)

Segui questi passaggi per installare il certificato di AdGuard:

1. Apri l'app. Nella schermata *Inizio*, tocca *filtraggio HTTPS disattivato*.

1. Quindi, ti si presenteranno tre schermate che spiegano:
    - Perché filtrare il traffico HTTPS
    - La sicurezza di questo processo di filtraggio
    - Certificato di AdGuard

1. Successivamente, tocca *Continua* → *Avanti* → *Salva certificato*.

1. Tocca su *Salva* in fondo alla cartella *Download* che si è aperta.

1. Dopo aver salvato, copia il testo dal campo *Certificato CA* e tocca *Apri impostazioni*.

1. Apri *Impostazioni* e incolla o digita *Certificato CA* nella barra di ricerca. Tocca l'opzione corrispondente.

1. Potresti visualizzare un avviso. In tal caso, tocca *Installa comunque* e, se necessario, inserisci il tuo PIN.

1. Seleziona il file del certificato di AdGuard. Il suo nome dovrebbe somigliare a *adguard_1342:020322.crt*.

Sei pronto! Una volta installato correttamente il certificato, avrai abilitato il filtraggio HTTPS.

Se riscontri problemi durante l'installazione manuale del certificato (ad esempio, hai installato il certificato, ma l'applicazione continua a ignorarlo), puoi seguire una delle soluzioni seguenti.

1. Riavvia AdGuard.
1. Prova nuovamente a installare il certificato corretto (AdGuard Personal CA).

## Avvisi di sicurezza

Nelle versioni precedenti di Android, il pannello delle impostazioni rapide mostrava il messaggio "La rete dedicata può essere monitorata." Toccandolo si aprirà una finestra con informazioni dettagliate.

A partire da Android 15, oltre a "La rete dedicata può essere monitorata", gli utenti vedranno un avviso di notifica dopo aver installato un certificato e dopo aver riavviato il dispositivo: "Autorità di certificazione installate da una terza parte sconosciuta." Ciò significa che il sistema ha rilevato certificati di terze parti nell'archivio dei certificati dell'utente. Toccando la notifica si apre una lista di certificati presenti nell'archivio certificati utente.

Nonostante questi avvisi, il tuo traffico rimane sicuro. La tua connessione con i server remoti resta crittografata. Quello che fa AdGuard è semplicemente verificare il certificato del server prima di decidere se filtrare la connessione, in modo simile a come funziona un browser.

[Scopri di più sul filtraggio HTTPS e su come funziona il certificato](/general/https-filtering/what-is-https-filtering.md).

Se riscontri ancora un problema e non riesci a installare il certificato, contatta il nostro gruppo di assistenza all'indirizzo [support@adguard.com](mailto:support@adguard.com).
