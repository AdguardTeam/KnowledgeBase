---
title: How to get system logs
sidebar_position: 4
---

:::info

Questo articolo riguarda AdGuard per Android, un blocco annunci multifunzionale che protegge il tuo dispositivo a livello di sistema. Per vedere come funziona, [scarica l'app di AdGuard](https://agrd.io/download-kb-adblock)

:::

:::note

I dati e/o i file forniti negli registri sono trattati in conformità con [l'Informativa sulla privacy di AdGuard](https://adguard.com/en/privacy.html).

:::

A volte un registro regolare potrebbe non essere sufficiente per identificare l'origine del problema. In questi casi è necessario un registro di sistema. Di seguito sono riportate istruzioni su come raccoglierlo e ottenerlo: tramite Opzioni sviluppatore e Logcat.

:::note

AdGuard si impegna a proteggere la tua privacy. Rispettiamo rigorosamente la nostra [Politica di riservatezza](https://adguard.com/privacy/android.html) e non raccogliamo alcuna informazione privata sugli utenti. Prima di inviare i registri al team di supporto, esamina il file poiché potrebbe contenere informazioni aggiuntive che non desideri condividere. Se contiene tali informazioni personali, ti consigliamo di eliminarle prima.

:::

## Catturare una segnalazione di bug da un dispositivo

Per ottenere una segnalazione di bug direttamente dal tuo dispositivo, fai quanto segue:

1. Assicurati di avere [Opzioni sviluppatore](https://developer.android.com/studio/run/device.html#developer-device-options) abilitate.

1. Nelle **Opzioni per sviluppatori**, tocca su **Segnala bug**.

    ![Segnalazione bug *mobile](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/Android3.1/bugreporten.png)

1. Seleziona il tipo di segnalazione di bug desiderata e tocca su **Segnala**.

    :::note

    Dopo qualche istante, ti sarà notificato che la segnalazione del bug è pronta (visualizza la Figura 2).


:::

    ![Segnalazione bug *mobile](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/Android3.1/bugreporteen.png)

1. Per condividerla, tocca la notifica.

    ![Segnalazione bug *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/Android3.1/bugreport3en.png)

1. Invia questo registro al nostro team di supporto.

    :::note

    Il nostro team di supporto elaborerà il tuo ticket molto più velocemente, se specificherai il numero del ticket di HelpDesk o il numero di ticket di GitHub, nel tuo messaggio di supporto.


:::

## Capture a bug report via Logcat

On devices with Android 7 and below, it is not possible to send a bug report automatically. Then you can capture it manually via Logcat — a standard Android command-line tool that dumps a log of system messages.

Follow this instruction:

**Part #1: prepare the device**

1. Switch device to the developer mode. To do this: go to **Settings** → **About** → tap **Build Number** 7 times.

1. Go to **Developer Options**.

1. Enable **USB debugging**.

1. Increase **Logger buffer** sizes to 4 MB per log buffer.

4 MB should be enough for storing the logs we need until you're able to do the second part (getting the log from the device);

**Part #2: reproduce the problem**

It is important to reproduce the problem after you're done with the first part.

1. Riproduci il problema.

1. Remember/write down the date and time of reproduction and include it in the email to our support later.

**Part #3: get the log**

1. Connect your device to a PC with a USB cable.

1. Download [Android SDK Platform Tools](https://developer.android.com/studio/releases/platform-tools#downloads). Choose the appropriate download link for your OS from the Downloads section. Once you tap the link, a ZIP file will be downloaded. You can extract the ADB (Android Debug Bridge) files from the ZIP file and store them wherever you want.

1. Test whether ADB is working properly: connect your Android device to your computer using a USB cable, open the Command Prompt, PowerShell or Terminal and run the following command:

    `adb devices`

    An example of a successful result:

    ![Step 3](https://cdn.adtidy.org/content/kb/ad_blocker/android/logcat/logcat_step-3.png)

1. Then run the following command (insert the relevant path):

    `adb logcat -v threadtime -d > C:\Program Files\platform-tools\logs.txt`

    Email the created `txt` file as well as the time the problem was reproduced (from part #2) to our support team at support@adguard.com.

### Alternative way for ROOT users

1. Download and run [Logcat](https://play.google.com/store/apps/details?id=com.pluscubed.matlog).

1. Choose **Record** in the menu. Choose a name for a log file or just press **OK**. Now you can press **Home** button, CatLog will continue recording the log in background.

1. Reproduce the issue.

1. Open CatLog and press **Stop record** in the menu.

1. Invia questo registro al nostro team di supporto.

:::note

Il nostro team di supporto elaborerà il tuo ticket molto più velocemente, se specificherai il numero del ticket di HelpDesk o il numero di ticket di GitHub, nel tuo messaggio di supporto.

:::
