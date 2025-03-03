---
title: Come creare un file dump
sidebar_position: 8
---

:::info

Questo articolo riguarda AdGuard per Windows, un blocca-inserzioni multifunzionale che protegge il tuo dispositivo a livello di sistema. Per vedere come funziona, [scarica l'app di AdGuard](https://agrd.io/download-kb-adblock)

:::

:::note

I dati e/o i file forniti nei file di dump sono trattati in conformità con [l'Informativa sulla privacy di AdGuard](https://adguard.com/en/privacy.html).

:::

Per diagnosticare i motivi dei potenziali problemi riscontrati dagli utenti usando AdGuard, il gruppo di assistenza potrebbe aver bisogno del file di dump del processo. Il file di dump aiuta gli sviluppatori a vedere i processi eseguiti nell'applicazione, in un dato periodo di tempo. Di seguito, puoi consultare le istruzioni su come raccogliere il file di dump sul tuo PC.

1. Premi **Ctrl + Shift + Esc** e clicca su **Gestione Attività**

1. Nella barra superiore dei menu, seleziona **Dettagli**

    ![Dettagli del Gestore attività](https://cdn.adtidy.org/public/Adguard/kb/Windows_dump/details_en.png)

1. Clicca col destro il processo per cui desideri creare il file di dump (ad esempio, il gruppo di assistenza potrebbe chiederti di crearne uno per `Adguard.exe`)

1. Nel menu' a tendina, clicca **Crea file dump**

1. Il file è stato creato correttamente!

    ![Crea file di dump](https://cdn.adtidy.org/public/Adguard/kb/Windows_dump/create_dump_file_en.png)

Dopo aver creato il file di dump, sei pregato di navigare alla posizione del file. Dovrebbe esserti richiesto di aprire la cartella contenente il file di dump, immediatamente dopo la sua creazione. Altrimenti, potrai trovarlo nella cartella **%tmp%**. Il file di dump creato (`.DMP`) ha lo stesso nome del processo scelto nei passaggi precedenti. Il file è abbastanza grande, quindi, ti preghiamo di comprimerlo in un archivio, prima di inviarlo all'assistenza.

:::note

AdGuard per Windows ha due processi in esecuzione, `Adguard.exe` e `AdguardSvc.exe`. Pertanto, è necessario creare un file di dump separato per ogni processo.

:::

![Processi di AdGuard](https://cdn.adtidy.org/public/Adguard/kb/Windows_dump/processes_en.png)

Quando invii i file di dump al gruppo di assistenza, ti preghiamo inoltre di allegare i registri dell'applicazione di AdGuard, così da darci una maggiore possibilità di risolvere il problema. [Qui](../adguard-logs) puoi consultare le istruzioni su come ottenere il file di registro.
