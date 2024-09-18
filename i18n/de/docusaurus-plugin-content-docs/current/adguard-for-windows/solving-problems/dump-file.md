---
title: So erstellen Sie eine Dump-Datei
sidebar_position: 8
---

:::info

Dieser Artikel behandelt AdGuard für Windows, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

:::note

Daten und/oder Dateien, die in Speicherabbilddateien zur Verfügung gestellt werden, werden gemäß der [Datenschutzerklärung von AdGuard](https://adguard.com/de/privacy.html) verarbeitet.

:::

Zur Diagnose von Problemen, die bei der Verwendung von AdGuard auftreten können, benötigt das Support-Team möglicherweise die Prozessabbilddatei (Dump-Datei). Die Dump-Datei hilft Entwickler:innen, die Prozesse zu sehen, die in der App über einen bestimmten Zeitraum ausgeführt wurden. Nachfolgend finden Sie eine Anleitung zur Erstellung der Dump-Datei auf Ihrem PC.

1. Drücken Sie **Strg + Umschalt + Esc**, um den **Task Manager** zu öffnen

1. Wählen Sie in der oberen Menüleiste **Details**

    ![Details zum Task-Manager](https://cdn.adtidy.org/public/Adguard/kb/Windows_dump/details_en.png)

1. Klicken Sie mit der rechten Maustaste auf den Prozess, für den Sie die Dump-Datei erstellen möchten (z. B. kann das Support-Team Sie bitten, eine Dump-Datei für `Adguard.exe` zu erstellen)

1. Klicken Sie im Auswahlmenü auf **Abbilddatei erstellen**

1. Die Datei wurde erfolgreich erstellt!

    ![Dump-Datei erstellen](https://cdn.adtidy.org/public/Adguard/kb/Windows_dump/create_dump_file_en.png)

Nachdem Sie die Dump-Datei erstellt haben, navigieren Sie bitte zum Speicherort der Datei. Sie sollten direkt nach der Erstellung aufgefordert werden, den Ordner mit der Dump-Datei zu öffnen. Andernfalls finden Sie sie im Ordner **%tmp%**. Die erstellte Datei (`.DMP`) hat den gleichen Namen wie der Name des Prozesses, den Sie in den vorherigen Schritten gewählt haben. Da die Datei recht groß ist, komprimieren Sie sie bitte in ein Archiv, bevor Sie sie an den Support senden.

:::note

AdGuard for Windows has two running processes, `Adguard.exe` and `AdguardSvc.exe`. Therefore, it's necessary to create a separate dump file for each process.

:::

![AdGuard-Prozesse](https://cdn.adtidy.org/public/Adguard/kb/Windows_dump/processes_en.png)

Wenn Sie die Dump-Dateien an das Support-Team senden, fügen Sie bitte auch die Protokolle der App an, damit wir eine bessere Chance haben, das Problem zu lösen. [Hier](../adguard-logs) finden Sie eine Anleitung, wie Sie die Protokolldatei erstellen können.
