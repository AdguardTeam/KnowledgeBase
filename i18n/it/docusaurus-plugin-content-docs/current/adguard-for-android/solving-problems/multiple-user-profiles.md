---
title: Problemi causati da profili utente multipli
sidebar_position: 9
---

:::info

Questo articolo riguarda AdGuard per Android, un blocca-inserzioni multifunzionale che protegge il tuo dispositivo a livello di sistema. Per vedere come funziona, [scarica l'app di AdGuard](https://agrd.io/download-kb-adblock)

:::

In this article you will find the methods on how to solve problems with AdGuard when you set up *multiple accounts* or *Restricted Profiles* on your Android devices.

## Problemi causati da profili utente multipli

Su Android 9 e successive, se AdGuard è installata per più di un profilo utente sul tuo dispositivo, potresti riscontrare dei problemi disinstallando l'app. Quando disinstalli AdGuard da un profilo utente, l'app continuerà ad apparire sull'elenco delle app, ma non potrai disinstallarla o reinstallarla. This happens because AdGuard is installed for a different user profile on the device.

If you try to reinstall AdGuard after an unsuccessful removal attempt, you will see the error message “You can't install the app on your device”.

Per risolvere questo problema, devi disinstallare l'applicazione per tutti gli utenti: vai su Impostazioni → Tutte le app → AdGuard. Tap the three-dot menu in the top right corner and select *Uninstall for all users*.

![Uninstall *mobile border](https://cdn.adtidy.org/blog/new/tu49hmultiple_users.png)

## Problemi causati dall'uso di un profilo in Modalità Limitata

I possessori di telefoni, tablet o TV con sistema operativo Android 7 e successive, potrebbero riscontrare il problema causato dall'uso del **profilo con Modalità Limitata**. Se hai un profilo da tal tipo, **AdGuard**, come altre applicazioni che utilizzano la VPN, riceve limitazioni sul filtraggio selettivo del traffico VPN. Di conseguenza, AdGuard non può avviare la protezione in una **modalità VPN locale**. Inoltre, uno dei motivi di tale situazione potrebbe essere l'uso del **profilo Dual App/Dual Messenger** sul tuo dispositivo. Di seguito, sono descritti i consigli applicabili quando si verifica questo problema.

### Soluzioni

Hai tre modi per risolvere questo problema:

### Opzione 1: Concedere le autorizzazioni ad AdGuard utilizzando ADB

:::note

Questo approccio è disponibile a partire da **AdGuard v3.5 nightly 6**. Se stai utilizzando una versione precedente, puoi ottenere [qui](https://adguard.com/adguard-android/overview.html) l'ultimo aggiornamento.

:::

1. Attiva la **modalità sviluppatore** e abilita il **Debug USB**:

    - Apri l'app **Impostazioni** del dispositivo;
    - Vai alla sezione **Sistema** (ultima voce nel menu delle impostazioni). In questa sezione, trova **Informazioni sul telefono**;
    - Tocca la riga **Numero di build** per 7 volte. Dopodiché, riceverai la notifica "**Sei ora uno sviluppatore**" (Se necessario, inserisci un codice di sblocco per il dispositivo);
    - Apri le **Impostazioni di sistema** → **Opzioni per sviluppatori** → Scorri in basso e abilita **Debug USB** → Conferma che il debug sia abilitato nella finestra **Consenti debug USB**, dopo aver letto attentamente l'avviso.

    :::note

    In caso di qualsiasi difficoltà o domanda aggiuntiva, puoi trovare [qui](https://developer.android.com/studio/debug/dev-options) le istruzioni complete.


:::

1. [Installa e configura](https://www.xda-developers.com/install-adb-windows-macos-linux/) ADB; Sulla piattaforma Windows, i proprietari di **Samsung** potrebbero dover installare [questa utility](https://developer.samsung.com/mobile/android-usb-driver.html).

1. Connect your device using a **USB cable** to the computer or laptop on which you installed **ADB**;

1. Open **the command line** on your PC:

    - **Cmd.exe** if you are using **Windows**;
    - **Terminal** if you are using **macOS**;

1. Enter the command `adb shell pm grant com.adguard.android android.permission.INTERACT_ACROSS_USERS` and press **Enter**.

### Opzione 2: Rimuovere il *profilo da utente limitato*

Puoi [trovare qui](https://support.google.com/a/answer/6223444?hl=en) le informazioni su come gestire i profili utente da un dispositivo Android.

:::note

In alcuni casi gli account utente con restrizioni vengono creati implicitamente e non possono essere rimossi. Ad esempio, quando usi le funzioni Dual Messenger o Dual App nei dispositivi **Samsung** o **LG**. Puoi leggere di seguito come risolvere il problema in questi casi.

:::

### Opzione 3: Utilizzare AdGuard in *Modalità proxy HTTP Locale* (richiede root)

Per attivare questa modalità, apri le **Impostazioni AdGuard** → **Rete** → **Metodo di filtraggio** → **Proxy HTTP locale**

### Dispositivi LG e Samsung

I possessori di telefoni **LG** o **Samsung** potrebbero inoltre riscontrare un simile problema. Può essere causato dall'utilizzo della funzione **Dual App/Dual Messenger** (che crea automaticamente un profilo limitato). Per risolvere questo problema, devi disabilitare questa funzionalità.

### Samsung

- Open **Settings**;
- Press **Advanced**;
- Scroll down and press **Dual Messenger**;
- Disable the **Dual Messenger** for all apps;
- Lock the device for 5 minutes;
- Unlock the screen and try again to create the VPN profile.

### LG

- Open **Settings**;
- Choose **General** tab;
- Scroll down and press **Dual App**;
- Remove all apps from the list;
- Reboot your device.
