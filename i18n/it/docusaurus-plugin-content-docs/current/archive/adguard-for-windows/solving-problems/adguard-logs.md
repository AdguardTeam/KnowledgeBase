---
title: Come raccogliere i registri di AdGuard
sidebar_position: 3
---

:::info

Questo articolo riguarda AdGuard per Windows, un blocca-inserzioni multifunzionale che protegge il tuo dispositivo a livello di sistema. Per vedere come funziona, [scarica l'app di AdGuard](https://agrd.io/download-kb-adblock)

:::

:::note

Data and/or files provided in logs are processed in accordance with [the AdGuard Privacy Policy](https://adguard.com/en/privacy.html).

:::

Per analizzare e diagnosticare i diversi problemi che potrebbero sorgere, il servizio di supporto di AdGuard potrebbe necessitare dei file di registro di AdGuard. Questi file contengono registri su errori e altri eventi verificatisi nel programma. Segue una breve introduzione che descrive come ottenere i file di registro e come inviarli al servizio di supporto, se necessario.

:::note

AdGuard si impegna a proteggere la tua privacy. We strictly follow our [Privacy Policy](https://adguard.com/privacy/windows.html) and do not collect any private information about users. Prima di inviare i registri al team di supporto, esamina il file poiché potrebbe contenere informazioni aggiuntive che non desideri condividere. Se contiene tali informazioni personali, ti consigliamo di eliminarle prima.

:::

### Debug logs {#debug-logs}

1. Apri le impostazioni di AdGuard. Go to the _General Settings_ section, scroll down to the bottom of the screen, and switch the _Logging Level_ to _Debug_.

   ![Debug logging level \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-1.png)

2. Riproduci il problema.

   Consigliamo vivamente di prendere nota dell'orario esatto di riproduzione del problema: aiuterà il nostro team di supporto a trovare le voci del registro rilevanti e a risolvere più velocemente il problema.

3. Export the collected logs using the _Export Logs_ button.

   ![Export logs \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-2.png)

   Salva l'archivio in qualsiasi cartella.

4. **Important**: after exporting the logs, set the logging level back to _Default_. _Debug_ logging level will slow down the application.

5. Send the archive to the AdGuard support service at **support@adguard.com**, describe the problem and don't forget to mention the time when you reproduced the issue.

### Trace logs {#trace-logs}

Sometimes support team members may ask you to send _trace_ logs. Quindi, dovrai fare quanto segue:

1. Stop AdGuard by right-clicking the AdGuard icon in the tray menu and choosing _Exit AdGuard_:

   ![Exit AdGuard \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-3.png)

   Ti preghiamo di non lasciare il servizio in esecuzione:

   ![Stop AdGuard Service \*mobile_border](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_logs_4.png)

2. Open the console (type `cmd` in the start panel).

3. Run the application with the command `C:\"Program Files"\Adguard\Adguard.exe /trace` regardless of Windows bitness if you have installed AdGuard for Windows v7.16 or later.

Se possiedi una versione precedente di AdGuard per Windows, esegui l'applicazione con il comando C:\"Program Files (x86)"\Adguard\Adguard.exe /trace se stai utilizzando Windows a 64-bit, e "Program Files"\Adguard\Adguard.exe /trace se stai utilizzando Windows a 32-bit.

1. Riproduci il problema.

   Consigliamo vivamente di prendere nota dell'orario esatto di riproduzione del problema: aiuterà il nostro team di supporto a trovare le voci del registro rilevanti e a risolvere più velocemente il problema.

2. Export the collected logs using the _Export Logs_ button.

   ![Export logs \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-2.png)

   Non ti preoccupare se il file di registro è grande. Necessitiamo di quanti più dettagli possibile per risolvere il problema.
