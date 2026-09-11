---
title: Come creare un file minidump per correggere l'errore del BSoD
sidebar_position: 8
---

Quasi tutti gli utenti di Windows sono purtroppo familiari con l'errore della [Schermata Blu della Morte (BSoD)](https://en.wikipedia.org/wiki/Blue_screen_of_death). I BSoD si verificano quando il sistema di Windows riscontra problemi che possono influire sulla sicura operazione del sistema, quali problemi con il codice dei driver di terze parti, hardware o con il codice di Microsoft. Per risolvere l'errore della schermata blu, gli utenti possono utilizzare un file minidump.

## Cos'è il file Minidump?

Un file minidump è un file contenente le informazioni sulla natura dell'arresto anomalo di sistema. Viene creato poco prima che appaia la schermata blu e contiene le informazioni minime utili, utilizzabili per risolvere il problema. Il file minidump, solitamente, ha un'estensione *.dmp*.

:::note
Su Windows 10, la schermata blu mostra un codice d'arresto e un codice QR. L'utente può utilizzare queste informazioni e cercare sul web il problema specifico.

:::

L'opzione per creare il file minidump è disabilitata di default, quindi, prima di approfondire su come utilizzarlo, scopriamo come abilitarli.

## Configurare Windows per creare i file Minidump

Anche se non riscontri alcun errore d'arresto anomalo del BSoD, puoi comunque impostare quest'opzione; questo è un consiglio generale, non necessariamente relativo ai prodotti di AdGuard. Ti preghiamo di seguire le seguenti impostazioni per creare automaticamente il file minidump.

 1. Type *sysdm.cpl* in the Windows search bar and click **Open**. The **System Properties Control Panel Menu** window will appear on the screen.

    :::tip

    Alternatively, click **Settings** → **System** → **About** → **Advanced system settings**.


:::

    ![System Properties *mobile_border](https://cdn.adtidy.org/blog/new/c2huSystem_Properties.jpeg)

 1. Go to the **Advanced** tab.
 1. In the **Startup and Recovery** section, click **Settings**.

    ![Startup and Recovery *mobile_border](https://cdn.adtidy.org/blog/new/1dmybiStartup_and_Recovery.png)

 1. Enable the following three options:

    - Scrivi un evento al registro di sistema
    - Riavvia automaticamente
    - Scrittura delle informazioni di debug → Piccolo dump di memoria (256 kb)

    ![Tre opzioni *mobile_border](https://cdn.adtidy.org/blog/new/nmr4eThree_options.png)

 1. Clicca su **OK** per applicare le impostazioni.
 1. Riavvia il computer.

Hai abilitato correttamente i file minidump. Ora, sarà creato automaticamente, nel caso di un arresto anomalo di sistema.

:::note

Di default, il file minidump è memorizzato nella cartella **%SystemRoot%\Minidump**. Puoi modificare la posizione della cartella dove preferisci, ma ti preghiamo di ricordare che molti programmi sono configurati per cercare questi file in questa posizione, di default, quindi, ti consigliamo di non modificarla.

:::

## Collecting wfpdiag.cab file

Our support team may request a wfpdiag.cab file, along with a minidump file, to analyze system logs more thoroughly and diagnose issues. To collect the file, please follow these steps:

1. Abilita la protezione di AdGuard.

1. Click *Start* and type `cmd` to open Command Prompt

1. Right-click Command Prompt and choose *Run as administrator*

    :::note

    A wfpdiag.cab file is created in your current directory. You can change the location by typing `cd <folder_name>`.


:::

1. To start logging, enter the following command: `netsh wfp capture start`

1. Visit any website to route traffic through AdGuard and log the filtering process

1. To stop logging, enter `netsh wfp capture stop`
