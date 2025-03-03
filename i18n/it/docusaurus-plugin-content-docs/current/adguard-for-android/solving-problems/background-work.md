---
title: Come proteggere AdGuard dalla disabilitazione da parte del sistema
sidebar_position: 9
---

:::info

Questo articolo riguarda AdGuard per Android, un ad blocker multifunzionale che protegge il tuo dispositivo a livello di sistema. Per vedere come funziona, [scarica l'app di AdGuard](https://agrd.io/download-kb-adblock)

:::

In alcuni casi, le app non restano in background ("attive" o in modalità di sospensione) per via della funzione di ottimizzazione del sistema operativo Android, comunemente chiamata "modalità risparmio energetico" — questa funzione può interrompere le app in background. Potrebbe essere scomodo riavviarle ogni volta che vengono chiuse. Per evitare la terminazione delle app in background, devi seguire i passaggi descritti separatamente per ogni produttore (versione) dell'OS Android. Nota che le istruzioni per diversi produttori sono per lo più molto simili.

## Asus

Le informazioni sui dispositivi Asus non sono ancora esaustive, quindi, potrebbero esitere più problemi di quelli qui elencati. Aggiorneremo questa parte dell'articolo quando ne sapremo di più.

La fonte principale di potenziali problemi con l'operazione in background sui dispositivi Asus è associata all'app di ottimizzazione, chiamata Power Master. È pre-installata e ha impostazioni predefinite piuttosto aggressive, ad esempio, per bloccare le app dall'avviarsi e terminare le attività in background allo spegnimento dello schermo. Per assicurarsi che l'elaborazione in background delle app funzioni, configura quanto segue:

1. Vai in **Mobile Manager** → **PowerMaster** → **Impostazioni** (od **Opzioni di risparmio energetico**) → Rimuovi la spunta da **Pulisci alla sospensione**

1. Vai in **Mobile Manager** → **PowerMaster** → **Impostazioni** (od **Opzioni di risparmio energetico**) → Rimuovi la spunta da **Nega automaticamente l'avvio automatico delle app**

Altrimenti, invece di rimuovere la spunta da **Nega automaticamente l'avvio automatico delle app**, puoi andare in **Impostazioni** → **Opzioni di risparmio energetico** → **Gestione avvio automatico** → **AdGuard** e rimuovere la spunta.

## Xiaomi

I dispositivi Xiaomi (e specialmente MIUI) sono tra i più problematici, per quanto riguarda il funzionamento in background. Sono noti per limitare i processi in background e avere autorizzazioni non standard, nonché per la mancanza di una documentazione adeguata. Talvolta, le app, semplicemente non funzionano propriamente sui dispositivi Xiaomi, e c'è poco da fare a riguardo. Seguono alcune azioni che potresti tentare di eseguire, se riscontri qualsiasi problema relativo al funzionamento in background di AdGuard, su vari dispositivi Xiaomi.

### MIUI 13+ e HyperOS

A seconda delle versioni di MIUI e HyperOS, ci sono due modi per modificare le impostazioni di ottimizzazione della batteria sul tuo telefono e bloccare le inserzioni in modo più efficiente.

Opzione 1

1. Vai a **Impostazioni** → **App** → **Permessi** → **Autostart in background** e consenti ad AdGuard di funzionare in background

1. Torna a **Impostazioni** → **App** → **Gestisci app** → **AdGuard** e deseleziona **Pausa l'attività dell'app se non utilizzata**

1. Vai su **Risparmio energetico** e tocca **Nessuna limitazione**

Opzione 2

1. Vai a **Impostazioni** → **App** → **Gestisci app** → **AdGuard** e abilita **Avvio automatico**

1. Vai su **Risparmio energetico** e tocca **Nessuna limitazione**

Fatto! Hai impostato correttamente AdGuard per lavorare in background.

### MIUI 12.0.8 e superiori

Per la corretta esecuzione dell'app di AdGuard in background, fai quanto segue:

In **Impostazioni** → **App** → **Gestisci app**, scorri verso il basso per localizzare **AdGuard** e imposta **Avvio automatico** su “Attivato”.

![Impostazioni Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi4en.jpeg)

Scorri al **Risparmio energetico**, toccalo, e impostalo a "Nessuna limitazione".

![Miui *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_0a.png)

In **Altre Autorizzazioni**, imposta tutte le autorizzazioni possibili su "On"

Esegui l'app **Sicurezza**.

Tocca l'icona dell'**Ingranaggio** in alto a destra della schermata.

![Impostazioni Miui *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_1.jpeg)

Tocca su **Potenzia velocità** nelle Impostazioni delle Funzionalità.

![Impostazioni Miui *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_2.png)

Tocca su **Blocco app**.

![Impostazioni Miui *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_3.jpeg)

Nella schermata **Blocco app**, imposta l'interruttore per l'app di AdGuard su On.

![Impostazioni Miui *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_4.jpeg)

È tutto! Hai fissato correttamente l'app di AdGuard.

### MIUI 12

Vai in **Impostazioni** → **App** → **Gestione app** → **AdGuard**.

![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi4en.jpeg)

- Imposta l'Avvio Automatico a "On" (Attivo)
- Imposta tutte le possibili autorizzazioni in Altre Autorizzazioni a "On"
- Imposta il Risparmio energetico a **Nessuna limitazione**

![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi5en.jpeg)

Ora, avvia il gestore delle app attive scorrendo in su dal fondo della schermata, e cerca l'app di AdGuard.

![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi6.jpeg)

Tocca e tieni premuto, fino alla comparsa di un menu. Seleziona l'icona del lucchetto.

![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi7en.jpeg)

L'icona del lucchetto dovrebbe apparire sulla finestra dell'app.

![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi8en.jpeg)

### MIUI 10-11

Per eseguire correttamente la tua app in background, configurane le opzioni come segue:

- Imposta l'Avvio Automatico a "On"

![Xiaomi *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/xiaomi1en.png)

- **Impostazioni** → **Batteria e prestazioni** → disattiva la funzionalità di **Risparmio energetico**

![Xiaomi *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/xiaomi2en.png)

- Poi, apri le impostazioni di **Risparmio energetico app** → **AdGuard** → **Nessuna limitazione**

![Xiaomi *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/xiaomi3en.png)

### Tutti i modelli

I seguenti passaggi dovrebbero essere eseguiti su qualsiasi dispositivo Xiaomi continui a interrompere l'app di AdGuard:

#### Gestione energetica

Ti preghiamo di abilitare:

- **Impostazioni** → **Impostazioni Avanzate** → **Gestione batteria** → imposta il **Piano energetico** a **Prestazioni**
- **Impostazioni dispositivo** → **Impostazioni avanzate** → **Gestione batteria** → **App protette** — AdGuard deve essere **Protetto**
- **Impostazioni Dispositivo** → **App** → **AdGuard** → **Batteria** → **Richiesta consumo intenso** e **Mantieni in esecuzione a schermo spento**
- **Impostazioni** → **Impostazioni Aggiuntive** → **Batteria e Prestazioni** → **Gestisci l'utilizzo della battera delle app** e:

1. Imposta le Modalità di Risparmio Energetico su "Off"
1. Scegli le seguenti opzioni: **Risparmio Energetico in Background** → **Seleziona le app** → **AdGuard** → **Impostazioni in Background** → **Nessuna limitazione**

#### Risparmio energetico dell'app

Imposta **Sicurezza** → **Batteria** → **Risparmio Energetico App** → **AdGuard** a **Nessuna limitazione**

#### Blocco app

Per configurare il funzionamento in background di AdGuard per i dispositivi Xiaomi, dovresti prestare attenzione a Batteria e Autorizzazioni.

- Tocca il pulsante **Attività recenti** e fai scorrere AdGuard in basso per rendere *visibili* le opzioni (come mostrato sullo screenshot):

    ![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomirecent.png)

- Tocca sull'icona del **lucchetto**. Ciò impedirà a Xiaomi di chiudere automaticamente AdGuard. Dovrebbe somigliare a quanto segue:

    ![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomilocked.png)

- Vai in **Batteria**

- Seleziona l'app di **risparmio energetico**

- Trova e seleziona **AdGuard**

- Configura le seguenti **Impostazioni in background**:

    ![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomirest.png)

- Vai in **Autorizzazioni**

- Seleziona **Avvio automatico**

- Assicurati che la funzione di avvio automatico sia abilitata per AdGuard:

    ![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomiautostart.png)

## Samsung

Su molti dispositivi Samsung, qualsiasi app non sia utilizzata per 3 giorni, non potrà avviarsi in background. Dovresti disattivare le opzioni della **Batteria adattiva** e **Sospensione app** quando possibile, per impedirlo. Nota che, in seguito all'aggiornamento di un'app o del sistema operativo, spesso, queste impostazioni si ripristinano ai valori predefiniti e dovranno essere nuovamente disattivate.

### Android 11 e successive

Su Android 11, Samsung impedirà alle app (AdGuard inclusa) di funzionare in background di default, a meno che non le escludi dalle ottimizzazioni della batteria. Per assicurarti che AdGuard non sarà arrestata in background:

1. Blocca AdGuard in Recenti

    - Apri **App recenti**.
    - Trova AdGuard.
    - Tieni premuta l'icona dell'app di AdGuard.

1. Per mantenere il corretto funzionamento di AdGuard:

    Vai in **Impostazioni** → **App** → **AdGuard** → **Batteria** → **Ottimizza consumo della batteria**

    ![Samsung](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/samsung-a11-optimize.png)

    Nel menu a tendina, seleziona **Tutte**. Quindi, trova AdGuard nell'elenco e imposta il suo stato a **Non ottimizzare** (su alcuni modelli, potrebbe essere presente un interruttore da disattivare).

    ![Samsung](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/samsung-a11-optimize-2.png)

    Su alcuni dispositivi, l'impostazione rilevante potrebbe essere denominata differente, e trovasi altrove. Tra i percorsi possibili:

    **Impostazioni** → **App** → Menu (⁝) → **Accesso Speciale** → **Ottimizza consumo batteria** → Trova AdGuard nell'elenco e rimuovi la spunta

1. Disabilita l'ottimizzazione automatica. Per farlo:

    Apri **Batteria** → Menu (⁝) → Scegli **Automatizzazione** → Disattiva tutte le impostazioni presenti

    Ancora, il percorso esatto potrebbe differire, ad esempio, su certi dispositivi, dovresti andare in:

    **Impostazioni** → **Assistenza dispositivo** → Menu (⁝) → **Avanzate** → Disabilita **Ottimizzazione automatica** e **Ottimizza impostazioni**

1. Se il tuo telefono la prevede, disabilita la Batteria adattiva:

    Apri le **Impostazioni** del dispositivo → **Batteria** → **Altre impostazioni della batteria** → Disattiva la **Batteria adattiva**

1. Disabilita la Sospensione app (il nome esatto di quest'impostazione e il percorso per raggiungerla, potrebbe variare in base al dispositivo):

    Apri le **Impostazioni** del dispositivo → **Batteria** → **Limiti di utilizzo in background** → Disabilita **Sospensione app inutilizzate**

### Android 9 e 10

- Vai alle **Impostazioni del dispositivo** → **Cura del dispositivo** → Tocca sulla voce **Batteria** → (⁝) **menu a 3 puntini** → **Impostazioni** e rimuovi la spunta da **Sospendi app inutilizzate** e da **Disabilita automaticamente le app inutilizzate**.

- Verifica che **Impostazioni del dispositivo** → **App** → **AdGuard** → **Batteria** → **Limitazioni in background** sia impostato a **App consumano batteria in background** per AdGuard.

- Rimuovi AdGuard dalla Sospensione app. Per farlo:

    1. Vai in **Impostazioni del dispositivo** → **Assistenza dispositivo**

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung1en.png)

    1. Tocca **Batteria**

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung2en.png)

    1. Tocca il **menu a 3 puntini** → **Impostazioni**

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung3en.png)

    1. Tocca **Sospensione app**

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung45en.png)

    1. **Attiva** AdGuard utilizzando l'icona del cestino

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung6en.png)

### Vecchi dispositivi Samsung

Per i vecchi dispositivi Samsung, non è necessario impostare l'operazione in background, ma se nel tuo caso l'app di AdGuard viene chiusa o scompare dalle attività recenti dopo un po', procedi come segue:

- Tocca il pulsante **Attività recenti**, quindi sull'icona **Impostazioni aggiuntive**. Dovrebbe somigliare a quanto segue:

 ![Impostazioni Samsung *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/oldsamsung_1.png)

- Tocca **Blocco App**:

 ![Impostazioni Samsung *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/oldsamsung_2.png)

- Tocca sull'icona del lucchetto

 ![Impostazioni Samsung *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/oldsamsung_3.png)

## Huawei

Huawei e la loro personalizzazione di Android, detta **EMUI**, è la più problematica sul mercato per quanto riguarda le limitazioni dei processi in background non standard. Sulle impostazioni pedefinite, virtualmente tutte le app che operano in background riscontreranno dei problemi e, infine, si arresteranno.

### Avvio dell'app su alcuni dispositivi EMUI 8, 9 e 10 (Huawei P20, Huawei P20 Lite, Huawei Mate 10…)

Questa funzionalità potrebbe essere disponibile per tutti i dispositivi (o no) o potrebbe essere etichettata diversamente.

1. Vai in **Impostazioni** → **Batteria** → **Avvio app**

    ![Huawei *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/huawei1en.png)

1. Disattiva **Gestisci tutte automaticamente**

    ![Huawei *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/huawei2en.png)

1. Imposta AdGuard a **Gestisci manualmente** e abilita tutti gli interruttori.

    ![Huawei *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/huawei3en.png)

1. Disabilita la **Gestione dell'avvio**, che impedisce alle app di operare automaticamente, dopo l'avvio del dispositivo.

    Vai in **Impostazioni** → **Tutte** → **Gestione dell'Avvio** → Disattiva AdGuard

    Inoltre, per i processi affidabili in background, potresti dover disinstallare **PowerGenie**, come descritto di seguito.

### Dispositivi con EMUI 9 e superiori e PowerGenie

:::note

Sui dispositivi con EMUI 9+ (Android P+), esiste un'app di gestione delle attività, chiamata PowerGenie, che forza la chiusura di tutte le app non autorizzate da Huawei e non fornisce agli utenti alcuna opzione di configurazione. Vedi di seguito come disinstallarla.

:::

Huawei è estremamente inventiva nel corrompere le app sui propri dispositivi. Oltre alle misure di gestione energetica non standard descritte sopra, hanno introdotto un'app di gestione delle attività, integrata direttamente in EMUI 9 su Android Pie.

Si chiama **PowerGenie** e arresta tutte le app non autorizzate. Non puoi aggiungere delle app personalizzate a tale lista predefinita di app autorizzate. Ciò significa che è impossibile ottenere il corretto funzionamento delle app su Huawei, senza disinstallare PowerGenie.

Sfortunatamente, è un'app di sistema, disinstallabile completamente soltanto utilizzando ADB (Android Debug Bridge).

:::note Fonte

[Forum XDA](https://forum.xda-developers.com/mate-20-pro/themes/remove-powergenie-to-allow-background-t3890409).

:::

**Devi**:

Non è confermato, ma potrebbe essere possibile disabilitare PowerGenie in **Impostazioni** → **App**. Se quest'impostazione è presente nelle impostazioni del tuo dispositivo, puoi saltare i seguenti passaggi. Tuttavia, dovrebbe essere riapplicata a ogni riavvio del tuo dispositivo. Se non è presente una simile impostazione, segui queste istruzioni:

1. [Installa ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) sul tuo computer;

1. Connetti il tuo telefono con un cavo dati;

1. Abilita le [Opzioni per sviluppatori](https://developer.android.com/studio/debug/dev-options.html);

1. Abilita il **Debug USB** nelle Opzioni per sviluppatori, sul tuo telefono;

1. Esegui i seguenti comandi sul tuo computer:

`adb shell pm uninstall --user 0 com.huawei.powergenie`

`adb shell pm uninstall -k --user 0 com.huawei.android.hwaps`

Se AdGuard continua a essere arrestato, prova anche a eseguire

`adb shell pm stopservice hwPfwService`

### Dispositivi con EMUI 6+ (e alcuni dispositivi con EMUI 5)

- **Impostazioni** → **Impostazioni Avanzate** → **Gestione batteria** → **Piano energetico** impostato a **Prestazioni**;
- **Impostazioni** → **Impostazioni Avanzate** → **Gestione batteria** → **App protette** — imposta AdGuard a **Protetta**;
- **Impostazioni telefono** → **App** → **La tua app** → **Batteria** → **Prompt ad alto consumo energetico** `[deseleziona]` e **Mantieni in esecuzione a schermo spento** `[seleziona]`;
- **Impostazioni telefono** → **App** → **Avanzate (In fondo)** → **Ignora ottimizzazioni** → Premi su Consentite → **Tutte le app** → Trova AdGuard nell'elenco e impostalo su **Consenti**.

#### Huawei P9 Plus

Apri le impostazioni del dispositivo → **App** → **Impostazioni** → **Accesso speciale** → scegli **Ignora ottimizzazioni della batteria** → seleziona **Consenti** per AdGuard.

### Huwaei P20, Huawei Honor 9 Lite e Huawei Mate 9 Pro

Apri le impostazioni del dispositivo→ **Batteria** → **Avvio App** → imposta AdGuard su **Gestisci manualmente** e assicurati che tutto sia abilitato.

### Huawei P20, Huawei P20 Lite, Huawei Mate 10

**Impostazioni del telefono** → **Batteria** → **Avvio App** → imposta AdGuard su **Gestisci manualmente** e assicurati che tutto sia abilitato. Inoltre, per i processi attendibili in background, potresti dover disinstallare PowerGenie come descritto sopra.

### Primi Huawei

I vecchi dispositivi Huawei sono i più facili da configurare: basta compiere due semplici passaggi per bloccare AdGuard in background, così che non sarà arrestato dal risparmio energetico o dal processo di arresto in background.

- Tocca il pulsante **Attività recenti**:

    ![App recenti Huawei *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/huaweirecentapps.jpeg)

- Tocca sull'icona del lucchetto:

    ![Blocco Huawei *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/huaweilock.jpeg)

Inoltre, per configurare più efficientemente l'esecuzione in background di AdGuard, dovresti aprire le impostazioni del dispositivo e fare quanto segue:

- Vai alle **Impostazioni** → apri **Gestione batteria** → imposta **Piano energetico** a **Prestazioni**;
- Quindi, scegli **App protette** in **Gestione batteria** e verifica che AdGuard sia protetta;
- Vai a **App** nelle impostazioni principali e tocca AdGuard lì → scegli **Batteria** → abilita **Richiesta ad alta intensità energetica** e **Continua a funzionare dopo che lo schermo è spento**;
- Quindi, nella sezione **App**, apri le **Impostazioni** (in fondo) → **Accesso speciale** → scegli **Ignora ottimizzazione batteria** → premi su **Consentite** → **Tutte le app** → trova AdGuard nell'elenco e impostala a **Nega**.

## Meizu

Meizu ha quasi lo stesso approccio alle limitazioni dei processi in background di Huawei e Xiaomi. Quindi, puoi evitare di disabilitare il funzionamento in background di AdGuard e di qualsiasi altra app, regolando le seguenti impostazioni:

- Vai a **Impostazioni avanzate** → apri **Gestione batteria** → imposta **Piano energetico** a **Prestazioni**;
- Quindi, scegli **App protette** in **Gestione batteria** e verifica che AdGuard sia protetta;
- Vai alla sezione **App** e tocca AdGuard lì → scegli **Batteria** → abilita **Avviso ad alta intensità di energia** e **Continua a funzionare dopo che lo schermo è spento**.

## Nokia

I dispositivi Nokia con Android 9 e superiori, hanno disabilitato il **Risparmio Energetico Evenwell**, il principale colpevole dell'arresto dei processi in background. Se AdGuard continua a essere arrestato sul tuo dispositivo Nokia, consulta le [istruzioni ereditarie](https://dontkillmyapp.com/hmd-global).

### Nokia 1 (Android Go)

1. [Installa ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) sul tuo computer;

1. Connetti il tuo telefono con un cavo dati;

1. Abilita le [Opzioni per sviluppatori](https://developer.android.com/studio/debug/dev-options.html);

1. Abilita il **Debug USB** nelle Opzioni per sviluppatori, sul tuo telefono;

1. Disinstalla il pacchetto **com.evenwell.emm** tramite i seguenti comandi ADB:

    `adb shell` `pm uninstall --user 0 com.evenwell.emm`

### Nokia 3.1 e 5.1

Su questi dispositivi è presente un gestore delle attività chiamato **DuraSpeed**, che arresta tutte le app in background. Non può essere disinstallato o disabilitato con mezzi regolari. Queste azioni richiedono ADB e, anche in tal caso, quando disabilitata, DuraSpeed si riabiliterà al riavvio. Necessiti di un'app come [MacroDroid](https://play.google.com/store/apps/details?id=com.arlosoft.macrodroid) per disabilitare automaticamente DuraSpeed.

1. [Installa ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) sul tuo computer;

1. Connetti il tuo telefono con un cavo dati;

1. Abilita le [Opzioni per sviluppatori](https://developer.android.com/studio/debug/dev-options.html);

1. Abilita il **Debug USB** nelle Opzioni per sviluppatori, sul tuo telefono;

1. Concedi a MacroDroid (o all'app d'automazione di tua scelta) l'abilità di scrivere all'archivio delle impostazioni globali, inserendo questo comando:

    `adb shell pm grant com.arlosoft.macrodroid android.permission.WRITE_SECURE_SETTINGS`

1. Crea un'attività innescata all'**Avvio del dispositivo**, che esegua quanto segue:

    - Impostazioni di Sistema: digita **Global**, nome `setting.duraspeed.enabled`, valore **1**
    - Impostazioni di Sistema: digita **Sistema**, nome `setting.duraspeed.enabled`, valore **-1**
    - Impostazioni di Sistema: digita **Global**, nome `setting.duraspeed.enabled`, valore **0**
    - Impostazioni di Sistema: digita **System**, nome `setting.duraspeed.enabled`, valore **0**

    ![Gestione attività Nokia *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/nokia_tasker.png)

    :::note

    Necessiti sia delle impostazioni **Globali**, che di **Sistema**. Lo screenshot mostra soltanto quelle Globali, come esempio.


:::

### Altri modelli Nokia

- Vai alle **Impostazioni** del telefono → **App** → **Tutte le app**.

- Tocca sul menu in alto a destra → **Mostra di sistema**.

Nell'elenco, trova l'**App di risparmio energetico**, selezionala e tocca su **Forza chiusura**. Resterà arrestata per un po', ma a un certo punto si riavvierà.

D'ora in poi, AdGuard dovrebbe funzionare normalmente e sfrutterà le ottimizzazioni della batteria standard di Android fino al riavvio del Risparmio Energetico.

Altrimenti, una soluzione più permanente per gli utenti più esperti:

1. [Installa ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) sul tuo computer;

1. Connetti il tuo telefono con un cavo dati;

1. Abilita le [Opzioni per sviluppatori](https://developer.android.com/studio/debug/dev-options.html);

1. Abilita il **Debug USB** nelle Opzioni per sviluppatori, sul tuo telefono;

1. Disinstalla il pacchetto **com.evenwell.powersaving.g3** tramite i seguenti comandi ADB:

    `adb shell` `pm uninstall --user 0 com.evenwell.powersaving.g3`

## Oppo

Talvolta i servizi in background sono arrestati (inclusi i servizi di accessibilità, che devono essere riabilitati), quando spegni lo schermo. Finora, ecco è una soluzione:

Vai al **Centro Sicurezza** → tocca su **Autorizzazioni per la privacy** → **Gestore avvio** e consenti all'app di AdGuard di operare in background.

Altre soluzioni:

- Fissa AdGuard nella schermata delle app recenti
- Abilita AdGuard nell'elenco delle app, nel "gestore avvio" ed "elenco delle app mobili" dell'app di sicurezza (com.coloros.safecenter / com.coloros.safecenter.permission.Permission)
- Disattiva le ottimizzazioni della batteria

## OnePlus

I dispositivi dotati di OxygenOS sono i più problematici, a causa della pulizia della cache e libera RAM specifici dell'OS, inclusa l'ottimizzazione dello stesso. Inoltre, OxygenOS può interrompere il funzionamento di AdGuard se non lo utilizzi per un po'. Per evitare queste conseguenze indesiderate, segui questi passaggi.

### Blocco dell'app

- Vai alle **Impostazioni**

- **Batteria** → **Ottimizzazione della batteria**

- Trova AdGuard

- Toccala e seleziona l'opzione **Non ottimizzare**

- Tocca su **Fatto** per salvare

- Apri il menu delle app recenti (come mostrato su questo screenshot):

    ![Onepluslock *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/PicturesEN/android/onepluslock.png)

- Blocca l'app di AdGuard:

    ![Oneplusdots *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/PicturesEN/android/oneplusdots.png)

:::attenzione

Su alcuni dispositivi OnePlus esiste anche delle funzionalità, dette Avvio Automatico App e Ottimizzazione Profonda che, fondamentalmente, impediscono alle app di operare in background. Ti preghiamo di disabilitarle affinché AdGuard funzioni.

:::

### Ottimizzazione della batteria

- Apri le impostazioni del dispositivo → **Batteria** → **Ottimizzazione batteria** → passa all'elenco **Tutte le app** (menu superiore) → scegli AdGuard → attiva **Non ottimizzare**

- Apri le impostazioni del dispositivo → **Batteria** → **Ottimizzazione batteria** → menu a tre puntini (⁝) → **Ottimizzazione Avanzata** → Disabilita l'Ottimizzazione Profonda

### Avvio automatico dell'app

L'Avvio Automatico App (su alcuni dispositivi OnePlus), fondamentalmente, impedisce alle app di funzionare in background. Ti preghiamo di disabilitarle affinché AdGuard funzioni.

### Ottimizzazione Migliorata / Avanzata

Per OnePlus 6 e superiori:

- Apri le **Impostazioni di sistema** → **Batteria** → **Ottimizzazione batteria** → Menu a tre puntini (⁝) → **Ottimizzazione avanzata**
- Disabilita l'**Ottimizzazione Profonda** / **Batteria Adattiva**
- Disabilita l'**Ottimizzazione sospensione**. OnePlus cerca di capire quando l'utente è solito dormire e in quei momenti disabilita le connessioni di rete del telefono. Quest'impostazione impedirà la ricezione delle notifiche push.

Per OnePlus inferiore a 6:

- Disattiva le **Impostazioni di sistema** → **Batteria** → **Ottimizzazione batteria** → Menu a tre puntini (⁝) → **Ottimizzazione migliorata**.

### Comportamento di pulizia delle app recenti

Normalmente, quando esci da un'app, non si chiuderà. Su OnePlus, tuttavia, ciò potrebbe funzionare diversamente. Il gestore del comportamento di cancellazione delle app recenti potrebbe esser configurato in modo che, l'uscita dall'app, la termini. Per tornare alla modalità "normale":

Vai in **Impostazioni** → **Avanzate** → **Gestione app recenti** → Passa a **Pulizia normale**

## Sony

Sony è stato il primo sviluppatore di OS mobili a introdurre l'ottimizzazione non standard dei processi in background. Si chiama **Modalità Stamina** e interrompe istantaneamente tutti i processi in background, se abilitata. Per risolvere:

Vai in **Impostazioni** → **Batteria** → Disabilita la **Modalità STAMINA**

![Modalità Stamina Sony *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/sony_stamina.png)

Su Android 11+, sulla stessa schermata della Modalità STAMINA, esiste un'impostazione detta **Batteria adattiva**, che dovrebbe anch'essa esser disabilitata.

Inoltre, devi impostare AdGuard come Esclusa dalla funzionalità di Risparmio energetico:

**Impostazioni di sistema** → **App e notifiche** → **Avanzate** → **Accesso speciale alle app** → **Funzione di risparmio energetico** → Passa AdGuard a **Eccezione**

## Wiko

I dispositivi Wiko sono problematici in termini di ottimizzazioni non standard dei processi in background. Per consentire ad AdGuard di operare in background, fai quanto segue:

- Vai in **Assistente Telefono** → **Batteria** → disattiva la **Modalità Eco**
- Torna indietro e vai in **Modalità manuale**
- Tocca l'icona **dell'ingranaggio** in alto a destra → **Whitelist delle app in background** → Selezionare **AdGuard**

## Dispositivi di fabbrica Android - Pixel/Nexus/Essenziale

Il Sistema Operativo Android di fabbrica, normalmente, non va in conflitto con le app in background, ma se stai riscontrando dei problemi, dovrai attivare la modalità **VPN Always-on**.

- Vai in **Impostazioni** → **Rete e Internet**

    ![Stocknetwork *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/stocknetwork.png)

- Tocca su **VPN** e seleziona **AdGuard**

    ![Stockvpn *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/stockvpn.png)

- Configura la modalità **VPN Always-on**

    ![Stockadguard *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/stockadguard.png)

## Realme

Su dispositivi che eseguono Realme UI 4.0, ci sono tre configurazioni chiave per garantire che AdGuard funzioni correttamente in secondo piano.

1. Imposta l'app AdGuard:

    - Premi a lungo l'icona di AdGuard
    - Dalla voce di menu' che appare, seleziona **Informazioni app**
    - Vai in **Uso della batteria** e abilita tutte le opzioni:
        - Consenti attività in secondo piano
        - Consenti attività in primo piano
        - Consenti l'avvio automatico
    - Nella sezione **Informazioni app**, scorri verso il basso e disattiva l'opzione **Metti in pausa attività app se non usata**

    ![VPN sempre attiva *border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/realme12.png)

1. Appronta la batteria:

    - Vai in **Impostazioni → Batteria → Altre impostazioni → Ottimizza uso batteria**
    - Trova AdGuard nella lista e abilita **Non ottimizzare**
    - In **Altre impostazioni**, controlla la sezione **Congelamento rapido dell'app** e disabilitala per AdGuard

    ![VPN sempre attiva *border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/realme345.png)

1. Abilita *VPN sempre attiva* per AdGuard:

    - Vai in **Impostazioni → Condivisione e connessione→ VPN**
    - Trova **AdGuard** e abilita l'opzione **VPN sempre attiva**

    ![VPN sempre attiva *border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/realme678.png)
