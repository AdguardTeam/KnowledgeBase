---
title: How to collect Windows system logs
sidebar_position: 5
---

:::info

Questo articolo riguarda AdGuard per Windows, un blocco annunci multifunzionale che protegge il tuo dispositivo a livello di sistema. Per vedere come funziona, [scarica l'app di AdGuard](https://agrd.io/download-kb-adblock)

:::

:::note

I dati e/o i file forniti negli registri di sistema sono trattati in conformità con [l'Informativa sulla privacy di AdGuard](https://adguard.com/en/privacy.html).

:::

To analyze and diagnose different problems that may potentially arise, the AdGuard support service might need Windows system log files. Windows event logs contain records about all errors that occur with the installed software, including AdGuard. Below is the brief instruction describing the way to get the log files and to send them to our support service if necessary.

1. Press *Win + R*

1. In the window that appears type in `eventvwr` and click *OK*:

    ![Run window *mobile](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_event_logs_1.png)

1. Event Viewer window appears as shown in the picture.

    ![Event viewer *border](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_event_logs_2.png)

    To save files that we need, do the following:

    - Open *Application*: *Event Viewer (Local)* → *Windows Logs* → *Application*.

    - Right-click *Application* and in the drop-down menu select *Save All Events As...*

    - Select a name and where to save, click *Save*. Select *Display information for the following languages*. You need to check the checkbox next to *English*. Click *OK*.

    - Open *System*: *Event Viewer (Local)* → *Windows Logs* → *System*.

    - Right-click *System* and in the drop-down menu select *Save All Events As...*

    - Choose a destination folder, enter the name, click *Save*. Select *Display information for the following languages*. You need to tick the box next to *English*. Click *OK*.

Please send the two files that you've recently saved to **support@adguard.com**.

:::note

AdGuard si impegna a proteggere la tua privacy. Rispettiamo rigorosamente la nostra [Informativa sulla privacy](https://adguard.com/privacy/windows.html) e non raccogliamo alcuna informazione privata sugli utenti. Prima di inviare i registri al team di supporto, esamina il file poiché potrebbe contenere informazioni aggiuntive che non desideri condividere. Se contiene tali informazioni personali, ti consigliamo di eliminarle prima.

:::
