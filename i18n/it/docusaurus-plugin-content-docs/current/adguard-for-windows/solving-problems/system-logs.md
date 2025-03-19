---
title: Come raccogliere i registri di sistema di Windows
sidebar_position: 5
---

:::info

Questo articolo riguarda AdGuard per Windows, un blocca-inserzioni multifunzionale che protegge il tuo dispositivo a livello di sistema. Per vedere come funziona, [scarica l'app di AdGuard](https://agrd.io/download-kb-adblock)

:::

:::note

I dati e/o i file forniti nei registri sono trattati in conformità con la [politica di riservatezza AdGuard](https://adguard.com/en/privacy.html).

:::

Per analizzare e diagnosticare i vari problemi che potrebbero presentarsi, il servizio di supporto di AdGuard potrebbe necessitare dei file del registro di sistema di Windows. I registri degli eventi di Windows contengono registrazioni su tutti gli errori che si verificano con i programmi installati, AdGuard incluso. Seguono le brevi istruzioni relative a come ottenere i file di registro e come inviarli al nostro servizio di supporto, se necessario.

1. Premi *Win + R*

1. Nella finestra che appare, digita `eventvwr` e clicca *OK*:

    ![Finestra Esegui *mobile](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_event_logs_1.png)

1. La finestra Event Viewer appare come mostrato in figura.

    ![Event viewer *border](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_event_logs_2.png)

    Per salvare i file necessari, fai quanto segue:

    - Apri *Applicazione*: *Event Viewer (local)* → *Registri di Windows* → *Applicazione*.

    - Clicca con il tasto destro del mouse *Applicazione* e nel menù a tendina seleziona *Salva tutti gli eventi con nome...*

    - Seleziona un nome e dove salvare, clicca su *Salva*. Seleziona *Visualizza informazioni per le seguenti lingue*. Devi spuntare la casella affianco a *Inglese*. Clicca su *OK*.

    - Apri *Sistema*: *Event Viewer (Local)* → *Registri di Windows* → *Sistema*.

    - Clicca con il pulsante destro del mouse *Sistema* e nel menu a tendina seleziona *Salva tutti gli eventi con nome...*

    - Scegli una cartella di destinazione, inserisci il nome, clicca *Salva*. Seleziona *Visualizza informazioni per le seguenti lingue*. Devi spuntare la casella affianco a *English*. Clicca su *OK*.

Ti preghiamo di inviare i due file recentemente salvati, a **support@adguard.com**.

:::note

AdGuard si impegna a proteggere la tua riservatezza. Rispettiamo rigorosamente la nostra [Informativa sulla privacy](https://adguard.com/privacy/windows.html) e non raccogliamo alcuna informazione privata sugli utenti. Prima di inviare i registri al gruppo di assistenza, esamina il file poiché può contenere informazioni aggiuntive che non desideri condividere. Se contiene tali informazioni personali, ti consigliamo di eliminarle prima.

:::
