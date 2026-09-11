---
title: Cum să colectați jurnalele AdGuard
sidebar_position: 3
---

:::info

Acest articol se referă la AdGuard pentru Windows, un blocant de reclame multifuncțional care protejează dispozitivul dumneavoastră la nivel de sistem. Pentru a vedea cum funcționează, [descărcați aplicația AdGuard](https://agrd.io/download-kb-adblock)

:::

:::note

Data and/or files provided in logs are processed in accordance with [the AdGuard Privacy Policy](https://adguard.com/en/privacy.html).

:::

Pentru a analiza și diagnostica diferite probleme care ar putea apărea, serviciul de suport AdGuard ar putea avea nevoie de fișierele jurnal AdGuard. Aceste fișiere conțin înregistrări despre erori și alte evenimente care apar cu programul. Mai jos sunt instrucțiunile succinte care descriu modul de obținere a fișierelor jurnal și de trimitere a acestora către serviciul de suport, dacă este necesar.

:::note

AdGuard se angajează să protejeze intimitatea dumneavoastră. We strictly follow our [Privacy Policy](https://adguard.com/privacy/windows.html) and do not collect any private information about users. Înainte de a trimite jurnalele echipei de asistență, vă rugăm să revizuiți fișierul, deoarece acesta poate conține informații suplimentare pe care nu doriți să le împărtășiți. Dacă conține astfel de informații personale, vă recomandăm să le ștergeți mai întâi.

:::

### Debug logs {#debug-logs}

1. Deschideți setările AdGuard. Go to the _General Settings_ section, scroll down to the bottom of the screen, and switch the _Logging Level_ to _Debug_.

   ![Debug logging level \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-1.png)

2. Reproduceți problema.

   Vă sfătuim să notați ora exactă când ați reprodus problema: va ajuta echipa noastră de suport să găsească înregistrările jurnal relevante și să rezolve problema mai repede.

3. Export the collected logs using the _Export Logs_ button.

   ![Export logs \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-2.png)

   Salvați arhiva într-un folder.

4. **Important**: after exporting the logs, set the logging level back to _Default_. _Debug_ logging level will slow down the application.

5. Send the archive to the AdGuard support service at **support@adguard.com**, describe the problem and don't forget to mention the time when you reproduced the issue.

### Trace logs {#trace-logs}

Sometimes support team members may ask you to send _trace_ logs. Apoi va trebui să faceți următoarele:

1. Stop AdGuard by right-clicking the AdGuard icon in the tray menu and choosing _Exit AdGuard_:

   ![Exit AdGuard \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-3.png)

   Vă rugăm nu lăsați serviciul să ruleze:

   ![Stop AdGuard Service \*mobile_border](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_logs_4.png)

2. Open the console (type `cmd` in the start panel).

3. Run the application with the command `C:\"Program Files"\Adguard\Adguard.exe /trace` regardless of Windows bitness if you have installed AdGuard for Windows v7.16 or later.

If you have an older version of AdGuard for Windows, run the application with the command C:\"Program Files (x86)"\Adguard\Adguard.exe /trace if you are using 64-bit Windows, and C:\"Program Files"\Adguard\Adguard.exe /trace if you are using 32-bit.

1. Reproduceți problema.

   Vă sfătuim să notați ora exactă când ați reprodus problema: va ajuta echipa noastră de suport să găsească înregistrările jurnal relevante și să rezolve problema mai repede.

2. Export the collected logs using the _Export Logs_ button.

   ![Export logs \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-2.png)

   Nu vă faceți griji dacă fișierul jurnal este mare. Trebuie să știm cât mai multe detalii pentru a rezolva problema dumneavoastră.
