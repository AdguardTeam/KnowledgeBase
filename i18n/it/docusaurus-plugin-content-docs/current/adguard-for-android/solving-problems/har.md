---
title: Come generare file HAR
sidebar_position: 5
---

:::info

Questo articolo riguarda AdGuard per Android, un blocca-inserzioni multifunzionale che protegge il tuo dispositivo a livello di sistema. Per vedere come funziona, [scarica l'app di AdGuard](https://agrd.io/download-kb-adblock)

:::

:::note

I file HAR sono trattati in conformità con [la Politica di riservatezza di AdGuard](https://adguard.com/en/privacy.html).

:::

## Cosa sono i file HAR?

Il formato HAR (HTTP ARchive) è un file di archivio formattato in JSON per la registrazione dell'interazione di un browser web con un sito. Le specifiche del formato HAR definiscono i dati di archiviazione per le transazioni HTTP, usate da un browser per esportare informazioni dettagliate sulle pagine web caricate. Una descrizione più dettagliata del formato del file HAR e le sue specifiche si può trovare sul sito web di [softwareishard.com](http://www.softwareishard.com/blog/har-12-spec/).

## Come generare file HAR

Talvolta dobbiamo analizzarli per bloccare annunci specifici, difficili da riprodurre per qualche motivo. Per ottenere i file HAR, segui questi passaggi:

1. Apri AdGuard e vai su **Impostazioni** (icona ⚙ nell'angolo in basso a destra).
2. Tocca **Generale** →**Avanzate** → **Impostazioni di basso livello**.
3. Scorri verso il basso e attiva **Cattura HAR** nella sezione Filtraggio.
4. Apri l'app ed esegui le azioni necessarie per riprodurre il problema.
5. Disattiva **Cattura HAR**.
6. Torna a **Avanzato**.
7. Tocca **Esporta registri e informazioni di sistema** → **Consenti** (se necessario) → **Salva**.

**Invia il file generato con i registri al servizio di assistenza di AdGuard.**

:::note

Il nostro team di supporto elaborerà il tuo ticket molto più velocemente se specifichi il numero del ticket HelpDesk o il numero del problema GitHub nel tuo messaggio.

:::

## Come analizzare i file HAR

Ecco alcune fonti che consigliamo per analizzare i file HAR:

- [HTTP Archive Viewer master](https://gitgrimbo.github.io/harviewer/master/) è uno strumento di analisi HAR che visualizza i file di registro HTTP ARchive (HAR) creati dagli strumenti di monitoraggio di HTTP.
- [Fiddler](https://www.telerik.com/fiddler) è un proxy di debug web che ti consente di catturare, ispezionare e monitorare tutto il traffico HTTP(S) tra il tuo computer e Internet, imitare le richieste e diagnosticare i problemi di rete.
