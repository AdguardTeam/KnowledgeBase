---
title: So erfassen Sie Windows-Systemprotokolle
sidebar_position: 5
---

:::info

Dieser Artikel behandelt AdGuard für Windows, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

:::note

Data and/or files provided in system logs are processed in accordance with [the AdGuard Privacy Policy](https://adguard.com/en/privacy.html).

:::

To analyze and diagnose different problems that may potentially arise, the AdGuard support service might need Windows system log files. Windows event logs contain records about all errors that occurr with the installed software, including AdGuard. Nachfolgend finden Sie eine kurze Anleitung, wie Sie die Protokolldateien abrufen und bei Bedarf an unseren Kundenservice senden können.

1. Press *Win + R*

1. Geben Sie in dem sich öffnenden Fenster `eventvwr` ein und klicken Sie auf *OK*:

    ![Run window *mobile](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_event_logs_1.png)

1. Das Fenster der Ereignisanzeige erscheint wie in der Abbildung gezeigt.

    ![Ereignisanzeige *border](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_event_logs_2.png)

    Um die benötigten Dateien zu speichern, gehen Sie wie folgt vor:

    - Open *Application*: *Event Viewer (Local)* → *Windows Logs* → *Application*.

    - Right-click *Application* and in the drop-down menu select *Save All Events As...*

    - Wählen Sie einen Namen und einen Speicherort und klicken Sie auf *Speichern*. Select *Display information for the following languages*. You need to check the checkbox next to *English*. Klicken Sie auf *OK*.

    - Open *System*: *Event Viewer (Local)* → *Windows Logs* → *System*.

    - Right-click *System* and in the drop-down menu select *Save All Events As...*

    - Choose a destination folder, enter the name, click *Save*. Select *Display information for the following languages*. You need to tick the box next to *English*. Klicken Sie auf *OK*.

Bitte senden Sie die beiden Dateien, die Sie soeben gespeichert haben, an **support@adguard.com**.

:::note

AdGuard is committed to protecting your privacy. We strictly follow our [Privacy Policy](https://adguard.com/privacy/windows.html) and do not collect any private information about users. Before sending your logs to the support team, please review the file as it may contain additional information that you don’t want to share. If it contains such personal information, we recommend that you delete it first.

:::
