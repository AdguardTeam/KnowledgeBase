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

 1. Digita *sysdm.cpl* nella barra di ricerca di Windows e clicca su **Apri**. Sullo schermo apparirà la finestra **Menu del Pannello di Controllo delle Proprietà di Sistema**.

    :::tip

    Altrimenti, clicca su **Impostazioni** → **Sistema** → **Informazioni** → **Impostazioni Avanzate di Sistema**.


:::

    ![Proprietà di sistema *mobile_border](https://cdn.adtidy.org/blog/new/c2huSystem_Properties.jpeg)

 1. Vai alla scheda **Avanzate**.
 1. Nella sezione **Avvio e Ripristino**, clicca su **Impostazioni**.

    ![Avvio e Ripristino *mobile_border](https://cdn.adtidy.org/blog/new/1dmybiStartup_and_Recovery.png)

 1. Abilita le seguenti tre opzioni:

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
