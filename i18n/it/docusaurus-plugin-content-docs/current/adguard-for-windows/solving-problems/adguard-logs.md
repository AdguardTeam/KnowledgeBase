---
title: How to collect AdGuard logs
sidebar_position: 3
---

:::info

Questo articolo riguarda AdGuard per Windows, un ad blocker multifunzionale che protegge il tuo dispositivo a livello di sistema. Per vedere come funziona, [scarica l'app di AdGuard](https://agrd.io/download-kb-adblock)

:::

:::note

I dati e/o i file forniti negli registri sono trattati in conformità con [l'Informativa sulla privacy di AdGuard](https://adguard.com/en/privacy.html).

:::

To analyze and diagnose different problems that may potentially arise, the AdGuard support service might need AdGuard log files. These files contain records about errors and other events that occur with the software. Below is the brief instruction describing the way to get the log files and send them to the support service if necessary.

:::note

AdGuard si impegna a proteggere la tua privacy. Rispettiamo rigorosamente la nostra [Informativa sulla privacy](https://adguard.com/privacy/windows.html) e non raccogliamo alcuna informazione privata sugli utenti. Prima di inviare i registri al team di supporto, esamina il file poiché potrebbe contenere informazioni aggiuntive che non desideri condividere. Se contiene tali informazioni personali, ti consigliamo di eliminarle prima.

:::

### Registri di debug {#debug-logs}

1. Open the AdGuard settings. Go to the *General Settings* section, scroll down to the bottom of the screen, and switch the *Logging Level* to *Debug*.

    ![Debug logging level *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-1.png)

1. Reproduce the issue.

    We strongly advise to take note of the exact time when you reproduced the issue: it will help our support team to find relevant log entries and solve the problem faster.

1. Export the collected logs using the *Export Logs* button.

    ![Export logs *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-2.png)

    Save the archive to any folder.

1. **Important**: after exporting the logs, set the logging level back to *Default*. *Debug* logging level will slow down the application.

1. Send the archive to the AdGuard support service at **support@adguard.com**, describe the problem and don't forget to mention the time when you reproduced the issue.

### Trace logs {#trace-logs}

Sometimes support team members may ask you to send *trace* logs. Then you will need to do the following:

1. Stop AdGuard by right-clicking the AdGuard icon in the tray menu and choosing *Exit AdGuard*:

    ![Exit AdGuard *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-3.png)

    Please don't leave the service running:

    ![Stop AdGuard Service *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_logs_4.png)

1. Open the console (type `cmd` in the start panel).

1. Run the application with the command `C:\"Program Files"\Adguard\Adguard.exe /trace` regardless of Windows bitness if you have installed AdGuard v7.16 for Windows or later.

If you have an older version of AdGuard for Windows, run the application with the command C:\"Program Files (x86)"\Adguard\Adguard.exe /trace if you are using 64-bit Windows, and C:\"Program Files"\Adguard\Adguard.exe /trace if you are using 32-bit.

1. Reproduce the issue.

    We strongly advise to take note of the exact time when you reproduced the issue: it will help our support team to find relevant log entries and solve the problem faster.

1. Export the collected logs using the *Export Logs* button.

    ![Esporta i registri *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-2.png)

    Don't worry if the log file is large. We need to know as much detail as possible to fix your problem.
