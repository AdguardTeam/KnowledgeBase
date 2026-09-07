---
title: So erfassen Sie die AdGuard-Protokolle
sidebar_position: 3
---

:::info

Dieser Artikel behandelt AdGuard für Windows, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

:::note

Data and/or files provided in logs are processed in accordance with [the AdGuard Privacy Policy](https://adguard.com/en/privacy.html).

:::

Zur Analyse und Diagnose verschiedener Probleme, die möglicherweise auftreten können, benötigt der AdGuard-Support möglicherweise AdGuard-Protokolldateien. Diese Dateien enthalten Aufzeichnungen über Fehler und andere Ereignisse, die im Zusammenhang mit der Software aufgetreten sind. Nachfolgend finden Sie eine kurze Anleitung, wie Sie die Protokolldateien abrufen und gegebenenfalls an den Support-Dienst senden können.

:::note

AdGuard ist dem Schutz Ihrer Privatsphäre verpflichtet. We strictly follow our [Privacy Policy](https://adguard.com/privacy/windows.html) and do not collect any private information about users. Bevor Sie Ihre Protokolle an das Support-Team senden, überprüfen Sie bitte die Datei, da sie zusätzliche Informationen enthalten kann, die Sie vielleicht nicht freigeben möchten. Wenn sie solche persönlichen Informationen enthält, empfehlen wir Ihnen, sie zuerst zu löschen.

:::

### Debug logs {#debug-logs}

1. Öffnen Sie die AdGuard-Einstellungen. Go to the _General Settings_ section, scroll down to the bottom of the screen, and switch the _Logging Level_ to _Debug_.

   ![Debug logging level \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-1.png)

2. Reproduzieren Sie das Problem.

   Wir empfehlen Ihnen dringend, sich den genauen Zeitpunkt zu notieren, zu dem Sie das Problem reproduziert haben: Das hilft unserem Support-Team, relevante Protokolleinträge zu finden und das Problem schneller zu lösen.

3. Export the collected logs using the _Export Logs_ button.

   ![Export logs \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-2.png)

   Speichern Sie das Archiv in einem beliebigen Ordner.

4. **Important**: after exporting the logs, set the logging level back to _Default_. _Debug_ logging level will slow down the application.

5. Send the archive to the AdGuard support service at **support@adguard.com**, describe the problem and don't forget to mention the time when you reproduced the issue.

### Trace logs {#trace-logs}

Sometimes support team members may ask you to send _trace_ logs. Dann müssen Sie Folgendes tun:

1. Stop AdGuard by right-clicking the AdGuard icon in the tray menu and choosing _Exit AdGuard_:

   ![Exit AdGuard \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-3.png)

   Bitte lassen Sie den Dienst nicht laufen:

   ![Stop AdGuard Service \*mobile_border](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_logs_4.png)

2. Open the console (type `cmd` in the start panel).

3. Run the application with the command `C:\"Program Files"\Adguard\Adguard.exe /trace` regardless of Windows bitness if you have installed AdGuard for Windows v7.16 or later.

Wenn Sie eine ältere Version von AdGuard für Windows haben, führen Sie die Anwendung mit dem Befehl C:\"Program Files (x86)"\Adguard\Adguard.exe /trace aus, wenn Sie ein 64-Bit-Windows verwenden, und C:\"Program Files"\Adguard\Adguard.exe /trace, wenn Sie ein 32-Bit-Windows verwenden.

1. Reproduzieren Sie das Problem.

   Wir empfehlen Ihnen dringend, sich den genauen Zeitpunkt zu notieren, zu dem Sie das Problem reproduziert haben: Das hilft unserem Support-Team, relevante Protokolleinträge zu finden und das Problem schneller zu lösen.

2. Export the collected logs using the _Export Logs_ button.

   ![Export logs \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-2.png)

   Machen Sie sich keine Sorgen, wenn die Protokolldatei groß ist. Wir müssen so viele Details wie möglich wissen, um Ihr Problem lösen zu können.
