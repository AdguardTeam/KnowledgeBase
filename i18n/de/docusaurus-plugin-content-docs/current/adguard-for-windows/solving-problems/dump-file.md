---
title: So erstellen Sie ein Speicherabbild
sidebar_position: 8
---

:::info

Dieser Artikel behandelt AdGuard für Windows, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie es funktioniert, laden Sie [die AdGuard-App](https://agrd.io/download-kb-adblock)herunter.

:::

:::note

In Dump-Dateien bereitgestellte Daten und Dateien werden gemäß [der Datenschutzerklärung von AdGuard](https://adguard.com/en/privacy.html)verarbeitet.

:::

Wenn bei der Verwendung von AdGuard ein Problem auftritt, kann das Support-Team Sie bitten, eine Dump-Datei zur Verfügung zu stellen. Mithilfe dieser Datei können Entwickler erkennen, welche Prozesse zu diesem Zeitpunkt in der App ausgeführt wurden, und die Ursache des Problems ermitteln.

Führen Sie die folgenden Schritte aus, um eine Dump-Datei zu erstellen:

1. Drücken Sie *Strg + Umschalt + Esc*, um den *Task-Manager* zu öffnen.

1. Klicken Sie in der linken Seitenleiste auf *Details*. ![Details zum Task-Manager *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/dump_file/new/task_manager_en.png)
1. Klicken Sie mit der rechten Maustaste auf den Prozess, für den Sie eine Dump-Datei erstellen möchten. Klicken Sie im Auswahlmenü auf *Speicherabbilddatei erstellen*. ![Dump-Datei erstellen *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/dump_file/new/create_dump_en.png)
1. Sobald die Dump-Datei erstellt ist, werden Sie aufgefordert, den Ordner zu öffnen, in dem sie gespeichert ist. Wenn nicht, finden Sie sie im Ordner **%tmp%**. ![Dateispeicherort öffnen *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/dump_file/new/open_file_location_en.png)

Die erstellte Dump-Datei (`.DMP`) hat denselben Namen wie der von Ihnen ausgewählte Prozess.

:::note

AdGuard für Windows führt zwei Prozesse aus: `Adguard.exe` und `AdguardSvc.exe`. Sie müssen für jeden eine eigene Dump-Datei erstellen.

:::

![Zwei Prozesse *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/dump_file/new/two_processes_en.png)

Da Dump-Dateien groß sein können, komprimieren Sie sie bitte in einem Archiv, bevor Sie sie an den Support senden. Fügen Sie außerdem die AdGuard-Protokolle bei, damit wir das Problem effektiver diagnostizieren können. [Anweisungen zum Erfassen von Protokollen](../adguard-logs).

## Erfassen der Datei `wfpdiag.cab`

Unser Support-Team kann eine wfpdiag.cab-Datei zusammen mit einer Minidump-Datei anfordern, um die Systemprotokolle genauer analysieren und Probleme diagnostizieren zu können. Um die Datei zu erfassen, gehen Sie bitte wie folgt vor:

1. Aktivieren Sie den AdGuard-Schutz.

1. Klicken Sie auf *Start* und geben Sie den Befehl `cmd` ein, um die Eingabeaufforderung zu öffnen

1. Klicken Sie mit der rechten Maustaste auf Eingabeaufforderung und wählen Sie *Als Administrator ausführen*

    :::note

    Es wird eine Datei „wfpdiag.cab“ in Ihrem aktuellen Verzeichnis erstellt. Sie können den Speicherort ändern, indem Sie `cd <folder_name>` eingeben.


:::

1. Um die Protokollierung zu starten, geben Sie den folgenden Befehl ein: `netsh wfp capture start`

1. Besuchen Sie eine beliebige Website, um den Datenverkehr durch AdGuard zu leiten und den Filterungsprozess zu protokollieren

1. Um die Protokollierung zu beenden, geben Sie `netsh wfp capture stop` ein
