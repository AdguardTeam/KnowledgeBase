---
title: How to generate a HAR file
sidebar_position: 1
---

I file HAR aiutano i nostri team di supporto a risolvere problemi complessi. Per creare questi file, consigliamo di utilizzare Chrome o Firefox. Tuttavia, anche IE 11, Edge e Safari forniscono la funzionalità di generazione ed esportazione dei file `.har`.

## Chrome {#chrome}

Per creare un file HAR in Chrome, segui questi passaggi:

1. Vai all'URL in cui si verifica il problema. Non riprodurre ancora il problema.

1. Apri gli **Strumenti per sviluppatori**:

    - Dal menu: **Menu → Altri Strumenti → Strumenti per sviluppatori**.
    - Tastiera: **Ctrl+Shift+C** o **Ctrl+Alt+I**, o **⌥+⌘+I per Mac**.

1. Clicca la **scheda Rete**.

1. Individua il pulsante rotondo in alto a sinistra nella scheda Rete e conferma che sia in modalità di registrazione (rossa). Se è grigia, cliccala per farla diventare rossa e avviare la registrazione.

1. Utilizza il pulsante **Cancella** (il pulsante circolare attraversato da una linea, affianco al pulsante di registrazione), per cancellare tutte le attività precedenti.

1. Seleziona la casella **Conserva registro** sulla scheda Rete.

1. Spunta la casella **Disabilita cache**.

    ![Chrome](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/chrome.png)

1. Riproduci i passaggi per causare il problema.

1. Salva la sessione come un file .har cliccando con il destro sulla griglia e selezionando **Salva come HAR con contenuti**.

1. Invialo al supporto di AdGuard (support@adguard.com) con una spiegazione dettagliata del problema. Anche degli screenshot di supporto potrebbero essere utili.

## Edge {#edge}

1. Vai all'URL in cui si verifica il problema. Non riprodurre ancora il problema.

1. Apri gli **Strumenti per sviluppatori**:

    - Dal menu: **Menu → Altri Strumenti → Strumenti per sviluppatori**.
    - Tastiera: **Ctrl+Shift+C** o **Ctrl+Alt+I**, o **⌥+⌘+I per Mac**.

1. Clicca la **scheda Rete**.

1. Individua il pulsante rotondo in alto a sinistra nella scheda Rete e conferma che sia in modalità di registrazione (rossa). Se è grigia, cliccala per farla diventare rossa e avviare la registrazione.

1. Utilizza il pulsante **Cancella** (il pulsante circolare attraversato da una linea, affianco al pulsante di registrazione), per cancellare tutte le attività precedenti.

1. Seleziona la casella **Conserva registro** sulla scheda Rete.

1. Spunta la casella **Disabilita cache**.

    ![Edge](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/edge.png)

1. Riproduci i passaggi per causare il problema.

1. Salva la sessione come un file .har cliccando con il destro sulla griglia e selezionando **Salva come HAR con contenuti**.

1. Invialo al supporto di AdGuard (support@adguard.com) con una spiegazione dettagliata del problema. Anche degli screenshot di supporto potrebbero essere utili.

## Firefox {#firefox}

Per creare un file HAR in Firefox, segui questi passaggi:

1. Vai all'URL in cui si verifica il problema. Non riprodurre ancora il problema.

1. Apri gli Strumenti per sviluppatori nella modalità **Rete**:

    - Dal menu: **Menu → Sviluppatore Web → Rete**.
    - Tastiera: **Ctrl+Shift+C**, o **⌥+⌘+E (Mac)**.

1. Nota il pulsante **Riproduci/Pausa** in alto a sinistra alla scheda di Rete.

    - Il pulsante dovrebbe essere in modalità riproduzione.

1. Se sulla griglia è correntemente mostrata qualsiasi informazione, cancellala cliccando sul pulsante **Svuota cestino**, affianco al pulsante riproduci/pausa.

1. Seleziona la casella **Conserva Registri**, sulla scheda Rete.

1. Spunta la casella **Disabilita cache**.

    ![Firefox](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/firefox.png)

1. Riproduci i passaggi per causare il problema.

1. Salva la sessione come un file .har, cliccando con il destro sulla griglia e selezionando **Salva tutto come HAR**.

1. Invialo al supporto di AdGuard (support@adguard.com) con una spiegazione dettagliata del problema. Anche degli screenshot di supporto potrebbero essere utili.

## Internet Explorer 11 {#ie11}

Per creare un file HAR in Internet Explorer 11, segui questi passaggi:

1. Vai all'URL in cui si verifica il problema. Non riprodurre ancora il problema.

1. Apri gli Strumenti per sviluppatori nella modalità **Rete**:

    - Dal menu a ingranaggio degli Strumenti: **Strumenti per sviluppatori** → **scheda Rete**.
    - Tastiera: **F12 → Rete**.

1. Nota il pulsante di avvio della sessione di profilazione **Riproduci** e di arresto della profilazione **Arresta** in alto a sinistra, nella scheda Rete.

    - Il pulsante "Riproduci" sarà grigio durante la registrazione e il pulsante "Pausa" sarà rosso. Attiva la modalità **Riproduci**.

1. Cancella tutte le informazioni sulla sessione, visualizzate nella griglia inferiore, utilizzando il pulsante **Cancella sessione**, sulla scheda Rete. Passa sulle icone per vederne i nomi.

    - Il pulsante **Cancella sessione** è un'icona a tre linee, con una x sopra di esse.

1. Spunta la casella **Disabilita cache**.

1. Riproduci i passaggi per causare il problema.

1. Salva la sessione come un file .har cliccando il pulsante **Salva su disco** (Esporta come HAR), sulla scheda Rete.

1. Invialo al supporto di AdGuard (support@adguard.com) con una spiegazione dettagliata del problema. Anche degli screenshot di supporto potrebbero essere utili.

## Safari {#safari}

Per creare un file HAR in Safari, segui questi passaggi:

1. Cerca il menu **Sviluppa** nella barra dei menu superiore di Safari.

    - Se non è visibile, attivalo andando in **Safari → Impostazioni → Avanzate**.
    - Spunta la casella in basso, affianco a **Mostra menu Sviluppa nella barra dei menu**.

1. Vai all'URL in cui si verifica il problema. Non riprodurre ancora il problema.

1. Apri la scheda **Rete** nel Web Inspector:

    - Dal menu: **Sviluppa → Mostra Web Inspector → Rete**.
    - Tastiera: **⌥+⌘+I → Rete**

1. Spunta la casella **Conserva Registro** sul lato sinistro della scheda Rete, nel menu **Altre opzioni di filtraggio...**.

    ![Safari](https://cdn.adtidy.org/content/kb/ad_blocker/safari/preserve-log.png)

1. Cancella gli elementi correnti di Rete cliccando sull'icona **Svuota Cestino**, all'estrema destra della scheda Rete.

    - Tastiera: **⌘+K**

1. Spunta la casella **Disabilita cache**.

1. Riproduci i passaggi per causare il problema.

1. Salva la sessione come un file .har, cliccando sull'icona **Esporta**, affianco all'icona **Svuota Cestino**.

1. Invialo al supporto di AdGuard (support@adguard.com) con una spiegazione dettagliata del problema. Anche degli screenshot di supporto potrebbero essere utili.

## Android {#android}

Per creare dei file HAR, segui questi passaggi:

1. Apri AdGuard e vai in **Impostazioni**.

1. Scegli **Avanzate** nel menu.

1. Scegli **Impostazioni di basso livello**

1. Attiva `pref.har.capture` (dovrai riavviare la protezione).

1. Ora, riproduci il problema: apri l'app, compi le azioni necessarie per far apparire l'annuncio.

1. Ora, disattiva nuovamente `pref.har.capture`.

1. Torna indietro e tocca **Esporta registri e informazioni di sistema** → **Salva**.

## Windows {#windows}

1. Apri le **Impostazioni*** → **Impostazioni generali** → **Impostazioni avanzate** e scorri in basso.

1. Spunta la casella **Abilita scrittura HAR**.

1. Riproduci il problema.

1. Vai alle **Impostazioni generali** → Clicca su **Esporta registri** → **Salva**.

1. Disabilita la scrittura HAR deselezionando la casella corrispondente.
