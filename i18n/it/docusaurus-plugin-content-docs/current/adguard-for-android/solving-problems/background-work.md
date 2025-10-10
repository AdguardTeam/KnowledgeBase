---
title: Come proteggere AdGuard dalla disabilitazione da parte del sistema
sidebar_position: 8
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

On many Samsung devices, apps that have been unused for three days will not be able to start from the background. To prevent this, you should turn off the **Adaptive Battery** and **Put apps to sleep** options wherever possible. Note that after an app or OS update, these settings often revert to their default values and must be turned off again.

### Android 11 e successive

On Android 11, Samsung prevents apps (including AdGuard) from working in the background by default, unless you exclude them from battery optimizations. To ensure that AdGuard will not be terminated in the background:

1. Lock AdGuard in **Recent apps**: open **Recent apps**, find AdGuard, and long-press the AdGuard app icon.

1. To keep AdGuard working properly:

    Go to **Settings** → **Apps** → **AdGuard** → **Battery** → **Optimize battery usage**

    ![Samsung](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/samsung-a11-optimize.png)

    In the drop-down menu, select **All**. Then find AdGuard on the list and set the state for it to **Don’t optimize** (on some models, there may be a switch that you need to toggle off).

    ![Samsung](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/samsung-a11-optimize-2.png)

    On some devices, the relevant setting may be named differently and be located in other places. Among the possible paths is **Settings** → **Apps** → (⁝) menu → **Special access** → **Optimize battery usage**. Find AdGuard on the list and uncheck it.

1. Disable automatic optimization:

    Open **Battery** → (⁝) menu → **Automation** and toggle off all the settings there.

    Again, the exact path may differ. For example, on some devices you should go to phone **Settings** → **Device care** → (⁝) menu → **Advanced** and isable **Auto optimization** and **Optimize settings**.

1. If your phone has this option, disable **Adaptive battery**:

    Open phone **Settings** → **Battery** → **More battery settings** and toggle off **Adaptive battery**

1. Disable **Sleeping apps** (the exact name of this setting and the path to it may vary depending on the device):

    Open phone **Settings** → **Battery** → **Background usage limits** and disable **Put unused apps to sleep**

If you’re still experiencing issues, try these additional battery optimization adjustments:

 1. Navigate to **Settings** → **Apps** → **AdGuard** → **Battery** and turn on the **Optimised** option:

    ![Optimised settings *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/app__battery_optimised_mode.png)

 1. Go to **Settings** → **Battery** → **Background usage limits** → **Never auto sleeping apps**:

    ![Never auto sleeping apps settings *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/background_usage_limits.png)

 1. Choose AdGuard from the list of apps. If you don’t see it, return to step 1 and make sure that the *Optimized* battery mode is active:

    ![Choose the app *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/never_auto_sleeping_apps.png)

### Android 9 e 10

- Go to **Phone settings** → **Device care**, tap the **Battery** item, go to (⁝) **3-dot menu** → **Settings**, and uncheck **Put unused apps to sleep** and **Auto-disable unused apps**.

- In **Phone settings** → **Apps** → **Sleep as Android** → **Battery**, check that **Background restriction** is set to **App can use battery in background** for AdGuard.

- Remove AdGuard from **Sleeping apps**:

    1. Go to **Phone settings** → **Device care**:

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung1en.png)

    1. Tap **Battery**:

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung2en.png)

    1. Tap the **3-dot menu** → **Settings**:

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung3en.png)

    1. Tap **Sleeping apps**:

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung45en.png)

    1. Wake up AdGuard using the trash can icon:

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung6en.png)

### Vecchi dispositivi Samsung

For early Samsung devices, there is no huge need for setting up the background operation, but if in your case the AdGuard app is getting closed or disappears from the recent tasks after a while, do the following:

- Tap the **Recent tasks** button, tap the **Additional settings** icon. Dovrebbe somigliare a quanto segue:

 ![Samsung settings *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/oldsamsung_1.png)

- Tap **Lock Apps**:

 ![Samsung settings *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/oldsamsung_2.png)

- Tap the lock icon:

 ![Samsung settings *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/oldsamsung_3.png)

## Huawei

Huawei and their Android customization **EMUI** belongs to the most troublesome on the market with respect to non-standard background process limitations. On default settings, virtually all apps that work in background will face problems and ultimately break.

### Avvio dell'app su alcuni dispositivi EMUI 8, 9 e 10 (Huawei P20, Huawei P20 Lite, Huawei Mate 10…)

This feature may or may not be available for all devices or may be labeled differently.

1. Go to phone **Settings** → **Battery** → **App launch**:

    ![Huawei *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/huawei1en.png)

1. Turn off **Manage all automatically**:

    ![Huawei *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/huawei2en.png)

1. Set AdGuard to **Manage manually** and enable all toggles:

    ![Huawei *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/huawei3en.png)

1. Disable **Startup manager** that prevents apps from running automatically after the phone starts up:

    Vai in **Impostazioni** → **Tutte** → **Gestione dell'Avvio** → Disattiva AdGuard

    Inoltre, per i processi affidabili in background, potresti dover disinstallare **PowerGenie**, come descritto di seguito.

### Dispositivi con EMUI 9 e superiori e PowerGenie

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

1. [Install ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) on your computer.

1. Connect your phone with a data cable.

1. Abilita le [Opzioni per sviluppatori](https://developer.android.com/studio/debug/dev-options.html);

1. Enable **USB debugging** within Developer options on your phone.

1. Esegui i seguenti comandi sul tuo computer:

`adb shell pm uninstall --user 0 com.huawei.powergenie`

`adb shell pm uninstall -k --user 0 com.huawei.android.hwaps`

If AdGuard keeps getting killed, also try running:

`adb shell pm stopservice hwPfwService`

### Dispositivi con EMUI 6+ (e alcuni dispositivi con EMUI 5)

- **Phone settings** → **Advanced Settings** → **Battery manager** → **Power plan** set to **Performance**;
- **Phone Settings** → **Advanced Settings** → **Battery Manager** → **Protected apps** — set AdGuard as **Protected**;
- **Phone Settings** → **Apps** → **Your app** → **Battery** → **Power-intensive prompt** `[uncheck]` and **Keep running after screen off** `[check]`;
- **Phone settings** → **Apps** → **Advanced (At the bottom)** → **Ignore optimizations** → Press Allowed → **All apps** → Find AdGuard on the list and set to **Allow**.

#### Huawei P9 Plus

Open device settings → **Apps** → **Settings** → **Special access** → choose **Ignore battery optimization** → select **Allow** for AdGuard.

### Huwaei P20, Huawei Honor 9 Lite e Huawei Mate 9 Pro

Open device settings → **Battery** → **App launch** → set AdGuard to **Manage manually** and make sure everything is turned on.

### Huawei P20, Huawei P20 Lite, Huawei Mate 10

**Phone settings** → **Battery** → **App launch** → set AdGuard to **Manage manually** and make sure everything is turned on. Also for reliable background processes you may need to uninstall PowerGenie as described above.

### Primi Huawei

Old Huawei devices are the easiest to set up, it is enough to perform two simple steps to lock AdGuard in the background so it won't be terminated by battery saving or background killer process.

- Tap the **Recent tasks** button:

    ![Huawei recent apps *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/huaweirecentapps.jpeg)

- Tap the lock icon:

    ![Huawei lock *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/huaweilock.jpeg)

Besides, to set up the background work of AdGuard more effectively, you should open device settings and do the following:

- Go to **Settings** → open **Battery Manager** → set **Power plan** to **Performance**;
- Then choose **Protected apps** in the **Battery Manager** and check if AdGuard is Protected;
- Go to **Apps** in the main settings and tap AdGuard there → choose **Battery** → enable **Power-intensive prompt** and **Keep running after screen is off**;
- Then in the **Apps** section open **Settings** (at the bottom) → **Special access** → choose **Ignore battery optimization** → press **Allowed** → **All apps** → find AdGuard on the list and set it to **Deny**.

## Meizu

Meizu has almost the same approach to the background process limitations as Huawei and Xiaomi. So you can avoid disabling the background work of AdGuard and any other app by adjusting the following settings:

- Go to **Advanced Settings** → open **Battery Manager** → set **Power plan** to **Performance**;
- Then choose **Protected apps** in the **Battery Manager** and check if AdGuard is Protected;
- Go to **Apps** section and tap AdGuard there → choose **Battery** → enable **Power-intensive prompt** and **Keep running after screen is off**.

## Nokia

Nokia devices running Android 9+ have **The Evenwell Power saver** disabled, which was the main culprit for killing background processes. If AdGuard still gets killed on your Nokia phone, check out the [legacy instruction](https://dontkillmyapp.com/hmd-global).

### Nokia 1 (Android Go)

1. [Install ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) on your computer;

1. Connect your phone with a data cable;

1. Abilita le [Opzioni per sviluppatori](https://developer.android.com/studio/debug/dev-options.html);

1. Enable **USB debugging** within Developer options on your phone;

1. Disinstalla il pacchetto **com.evenwell.emm** tramite i seguenti comandi ADB:

    `adb shell` `pm uninstall --user 0 com.evenwell.emm`

### Nokia 3.1 e 5.1

On these devices there is a task killer called **DuraSpeed** that terminates all background apps. It can't be uninstalled or disabled by regular means. These actions require ADB, and even then, when disabled, DuraSpeed will re-enable itself on reboot. You need a tasker app like [MacroDroid](https://play.google.com/store/apps/details?id=com.arlosoft.macrodroid) for automatic DuraSpeed's disabling.

1. [Install ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) on your computer;

1. Connect your phone with a data cable;

1. Abilita le [Opzioni per sviluppatori](https://developer.android.com/studio/debug/dev-options.html);

1. Enable **USB debugging** within Developer options on your phone;

1. Concedi a MacroDroid (o all'app d'automazione di tua scelta) l'abilità di scrivere all'archivio delle impostazioni globali, inserendo questo comando:

    `adb shell pm grant com.arlosoft.macrodroid android.permission.WRITE_SECURE_SETTINGS`

1. Crea un'attività innescata all'**Avvio del dispositivo**, che esegua quanto segue:

    - System Setting: type **Global**, name `setting.duraspeed.enabled`, value **-1**
    - System Setting: type **System**, name `setting.duraspeed.enabled`, value **-1**
    - System Setting: type **Global**, name `setting.duraspeed.enabled`, value **0**
    - System Setting: type **System**, name `setting.duraspeed.enabled`, value **0**

    ![Nokia tasker *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/nokia_tasker.png)

    :::note

    You need both **Global** and **System** type settings. The screenshot shows only Global as an example.


:::

### Altri modelli Nokia

- Go to phone **Settings** → **Apps** → **See all apps**.

- Tap on the right top corner menu → **Show system**.

Find **Power saver app** on the list, select it and tap **Force close**. It will remain stopped for a while but will restart at some point.

From now on, AdGuard should work normally and use the standard Android battery optimizations until Power Saver restarts.

An alternative, more permanent solution for more tech-savvy users:

1. [Install ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) on your computer;

1. Connect your phone with a data cable;

1. Abilita le [Opzioni per sviluppatori](https://developer.android.com/studio/debug/dev-options.html);

1. Enable **USB debugging** within Developer options on your phone;

1. Disinstalla il pacchetto **com.evenwell.powersaving.g3** tramite i seguenti comandi ADB:

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

### Blocco dell'app

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

### Ottimizzazione della batteria

- Open device settings → **Battery** → **Battery optimization** → switch to the **All apps** list (top menu) → choose AdGuard → activate **Don’t optimize**

- Open device settings → **Battery** → **Battery Optimization** → (⁝) three-dot menu → **Advanced Optimization** → Disable Deep Optimization

### Avvio automatico dell'app

App Auto-Launch (on some OnePlus phones) essentially prevents apps from working in the background. Please disable it for AdGuard.

### Ottimizzazione Migliorata / Avanzata

For OnePlus 6 and above:

- Open **System settings** → **Battery** → **Battery optimization** → (⁝) three-dot menu → **Advanced optimization**
- Disable **Deep optimization** / **Adaptive Battery**
- Disble **Sleep standby optimization**. OnePlus tries to learn when you are usually asleep, and in those times it will then disable the phone’s network connections. This setting will prevent push notifications from being delivered.

For OnePlus below 6:

- Turn off **System settings** → **Battery** → **Battery optimization** → (⁝) three-dot menu → **Enhanced optimization**.

### Comportamento di pulizia delle app recenti

Normally when you swipe an app away, it won’t close. On OnePlus this may however work in a different way. Recent app clear behaviour manager might be set up in a way that swiping the app to close will kill it. To return it to the “normal” mode:

Go to **Settings** → **Advanced** → **Recent app management** → Switch to **Normal clear**

## Sony

Sony was the first mobile OS developer to introduce non-standard background process optimization. It is called **Stamina mode** and it instantly breaks all background processes if enabled. To solve this:

Go to **Settings** → **Battery** → Disable **STAMINA mode**

![Sony Stamina mode *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/sony_stamina.png)

On Android 11+, on the same screen with STAMINA mode, there is a setting called **Adaptive battery**, you should disable it too.

You also need to be set AdGuard as Excepted from Power-saving feature:

**System settings** → **Apps & Notifications** → **Advanced** → **Special app access** → **Power saving feature** → Switch AdGuard to **Excepted**

## Wiko

Wiko devices are problematic in terms of non-standard background process optimizations. To let AdGuard work in background, do the following:

- Go to **Phone Assistant** → **Battery** → turn off **Eco Mode**
- Go back and go to **Manual mode**
- Tap on the **Gear** icon on top right → **Background apps whitelist** → Select **AdGuard**

## Dispositivi di fabbrica Android - Pixel/Nexus/Essenziale

Android stock OS normally does not conflict with apps working in the background, but if you are facing any issues you will need to switch on the **Always-on VPN** mode.

- Go to **Settings** → **Network and Internet**

    ![Stocknetwork *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/stocknetwork.png)

- Tap **VPN** and choose **AdGuard**

    ![Stockvpn *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/stockvpn.png)

- Set up **Always-on VPN** mode

    ![Stockadguard *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/stockadguard.png)

## Realme

On devices running Realme UI 4.0, there are three key configurations to ensure that AdGuard works properly in the background.

1. Imposta l'app AdGuard:

    - Long press the AdGuard icon
    - From the menu that appears, select **App info**
    - Go to **Battery usage** and enable all options:
        - Allow background activity
        - Allow foreground activity
        - Allow auto launch
    - In the **App info** section, scroll down and turn off the option **Pause app activity if unused**

    ![Always-on VPN *border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/realme12.png)

1. Appronta la batteria:

    - Go to **Settings → Battery → More settings → Optimize battery use**
    - Find AdGuard in the list and enable **Don't optimize**
    - In **Other settings**, check the **App Quick Freeze** section and disable it for AdGuard

    ![Always-on VPN *border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/realme345.png)

1. Abilita *VPN sempre attiva* per AdGuard:

    - Go to **Settings → Connection & sharing → VPN**
    - Find **AdGuard** and enable the **Always-on VPN** option

    ![Always-on VPN *border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/realme678.png)

## Motorola

On Motorola devices, there are four key configurations to ensure that AdGuard works properly in the background.

1. Allow background usage:

   - Go to **Settings → Apps** and find **AdGuard**
   - Open **App battery usage**
   - Enable **Allow background battery usage**
   - Tap the option with the toggle
   - Set battery usage to **Unrestricted**

1. Remove background activity restrictions:

   - Go to **Settings**
   - Scroll down and tap **Apps & notifications**
   - Find **AdGuard** and open **Advanced → Battery**
   - Tap **Background restriction** or **Background limits**
   - If it says **Background activity restricted**, tap it and then tap **Remove**

1. Manage background apps:

   - Go to **Settings**, then type **Managing background apps** in the search bar
   - Find **AdGuard** and enable the toggle to allow the app to run in the background

1. Disable Adaptive Battery:

   - Go to **Settings → Battery**
   - Turn off the **Adaptive Battery** option
