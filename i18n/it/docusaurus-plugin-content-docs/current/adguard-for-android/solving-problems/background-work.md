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

![Xiaomi Settings *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi4en.jpeg)

Scroll down to **Battery saver**, tap it, and set to “No restrictions”.

![Miui *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_0a.png)

In **Other Permissions**, set all possible permissions to “On”

Run the **Security** app.

Tap on the **Gear** icon at the top-right corner of the screen.

![Miui Settings *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_1.jpeg)

Tap **Boost speed** in Feature Settings.

![Miui Settings *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_2.png)

Tap **Lock apps**.

![Miui Settings *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_3.jpeg)

In the **Lock apps** screen, set the toggle switch for the AdGuard app to On.

![Miui Settings *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_4.jpeg)

That’s all! You’ve successfully pinned the AdGuard app.

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

1. Go to phone **Settings** → **Battery** → **App launch**

    ![Huawei *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/huawei1en.png)

1. Turn off **Manage all automatically**

    ![Huawei *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/huawei2en.png)

1. Set AdGuard to **Manage manually** and enable all toggles.

    ![Huawei *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/huawei3en.png)

1. Disable **Startup manager** that prevents apps from running automatically after the phone starts up.

    Go to **Settings** → **All** → **Startup manager** → Toggle AdGuard off

    Also for reliable background processes you may need to uninstall **PowerGenie** as detailed below.

### EMUI 9+ devices and PowerGenie

:::note

On phones with EMUI 9+ (Android P+) there is a task killer app called PowerGenie which forces to quit all apps not whitelisted by Huawei and does not give users any configuration options. See below how to uninstall it.

:::

Huawei is extremely inventive in breaking apps on their devices. In addition to all the non-standard power management measures described below, they introduced a task killer app built right into EMUI 9 on Android Pie.

It is called **PowerGenie** and it kills all apps that are not on its whitelist. You cannot add custom apps on their pre-defined whitelist. This means there is no other way to achieve proper app functionality on Huawei than uninstalling PowerGenie.

Unfortunately, this is a system app that can only be fully uninstalled using ADB (Android Debug Bridge).

:::note Source

[XDA forum](https://forum.xda-developers.com/mate-20-pro/themes/remove-powergenie-to-allow-background-t3890409).

:::

**You need to**:

It is not confirmed, but it might be possible to just disable PowerGenie in **Phone settings** → **Apps**. If this setting is present in your device's settings, you may skip the following steps. However, it would need to be re-applied every time you reboot your device. If there is no such setting, follow this instruction:

1. [Installa ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) sul tuo computer;

1. Connetti il tuo telefono con un cavo dati;

1. Abilita le [Opzioni per sviluppatori](https://developer.android.com/studio/debug/dev-options.html);

1. Abilita il **Debug USB** nelle Opzioni per sviluppatori, sul tuo telefono;

1. Run the following commands on your computer:

`adb shell pm uninstall --user 0 com.huawei.powergenie`

`adb shell pm uninstall -k --user 0 com.huawei.android.hwaps`

If AdGuard keeps getting killed, also try running

`adb shell pm stopservice hwPfwService`

### EMUI 6+ devices (and some EMUI 5 devices)

- **Phone settings** → **Advanced Settings** → **Battery manager** → **Power plan** set to **Performance**;
- **Phone Settings** → **Advanced Settings** → **Battery Manager** → **Protected apps** — set AdGuard as **Protected**;
- **Phone Settings** → **Apps** → **Your app** → **Battery** → **Power-intensive prompt** `[uncheck]` and **Keep running after screen off** `[check]`;
- **Phone settings** → **Apps** → **Advanced (At the bottom)** → **Ignore optimizations** → Press Allowed → **All apps** → Find AdGuard on the list and set to **Allow**.

#### Huawei P9 Plus

Open device settings → **Apps** → **Settings** → **Special access** → choose **Ignore battery optimization** → select **Allow** for AdGuard.

### Huawei P20, Huawei Honor 9 Lite and Huawei Mate 9 Pro

Open device settings → **Battery** → **App launch** → set AdGuard to **Manage manually** and make sure everything is turned on.

### Huawei P20, Huawei P20 Lite, Huawei Mate 10

**Phone settings** → **Battery** → **App launch** → set AdGuard to **Manage manually** and make sure everything is turned on. Also for reliable background processes you may need to uninstall PowerGenie as described above.

### Early Huawei

Old Huawei devices are the easiest to set up, it is enough to perform two simple steps to lock AdGuard in the background so it won't be terminated by battery saving or background killer process.

- Tap the **Recent tasks** button:

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

An alternative, more permanent solution for more tech-savvy users:

1. [Installa ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) sul tuo computer;

1. Connetti il tuo telefono con un cavo dati;

1. Abilita le [Opzioni per sviluppatori](https://developer.android.com/studio/debug/dev-options.html);

1. Abilita il **Debug USB** nelle Opzioni per sviluppatori, sul tuo telefono;

1. Uninstall the **com.evenwell.powersaving.g3** package via the following ADB commands:

    `adb shell` `pm uninstall --user 0 com.evenwell.powersaving.g3`

## Oppo

Sometimes background services are being killed (including accessibility services, which then need re-enabling) when you turn the screen off. So far, a workaround for this is:

Go to **Security Centre** → tap **Privacy Permissions** → **Startup manager** and allow AdGuard app to run in background.

Other solutions:

- Pin AdGuard to the recent apps screen
- Enable AdGuard in the app list inside the security app’s “startup manager” and “floating app list” (com.coloros.safecenter / com.coloros.safecenter.permission.Permission)
- Turn off battery optimizations

## OnePlus

Devices with OxygenOS on board are the most problematic, with its OS-specific cache cleaning and free RAM, including OS optimization. In addition, OxygenOS can interrupt the AdGuard's work if you do not use it for a while. To avoid these unwanted consequences, follow these steps.

### Locking the app

- Go to **Settings**

- **Battery** → **Battery optimization**

- Find AdGuard

- Tap on it and select **Don't optimize** option

- Tap **Done** to save

- Open recent apps menu (as showed on this screenshot):

    ![Onepluslock *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/PicturesEN/android/onepluslock.png)

- Lock AdGuard app:

    ![Oneplusdots *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/PicturesEN/android/oneplusdots.png)

:::attenzione

On some OnePlus phones there is also a thing called App Auto-Launch and Deep Optimization which essentially prevents apps from working in the background. Please disable it for AdGuard.

:::

### Battery optimization

- Open device settings → **Battery** → **Battery optimization** → switch to the **All apps** list (top menu) → choose AdGuard → activate **Don’t optimize**

- Open device settings → **Battery** → **Battery Optimization** → (⁝) three-dot menu → **Advanced Optimization** → Disable Deep Optimization

### App Auto-Launch

App Auto-Launch (on some OnePlus phones) essentially prevents apps from working in the background. Please disable it for AdGuard.

### Enhanced / Advanced optimization

For OnePlus 6 and above:

- Open **System settings** → **Battery** → **Battery optimization** → (⁝) three-dot menu → **Advanced optimization**
- Disable **Deep optimization** / **Adaptive Battery**
- Disble **Sleep standby optimization**. OnePlus tries to learn when you are usually asleep, and in those times it will then disable the phone’s network connections. This setting will prevent push notifications from being delivered.

For OnePlus below 6:

- Turn off **System settings** → **Battery** → **Battery optimization** → (⁝) three-dot menu → **Enhanced optimization**.

### Recent apps clearing behaviour

Normally when you swipe an app away, it won’t close. On OnePlus this may however work in a different way. Recent app clear behaviour manager might be set up in a way that swiping the app to close will kill it. To return it to the “normal” mode:

Go to **Settings** → **Advanced** → **Recent app management** → Switch to **Normal clear**

## Sony

Sony was the first mobile OS developer to introduce non-standard background process optimization. It is called **Stamina mode** and it instantly breaks all background processes if enabled. To solve this:

Go to **Settings** → **Battery** → Disable **STAMINA mode**

![Sony Stamina mode *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/sony_stamina.png)

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
