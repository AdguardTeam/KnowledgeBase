---
title: So erstellen Sie eine Minidump-Datei, um den BSoD-Fehler zu beheben
sidebar_position: 8
---

Fast alle Windows-Benutzer:innen sind leider mit dem [Blue Screen of Death (BSoD)](https://en.wikipedia.org/wiki/Blue_screen_of_death)-Fehler vertraut. BSoD tritt auf, wenn das Windows-System auf Probleme stößt, die den sicheren Systembetrieb beeinträchtigen können, z. B. Probleme mit Treibercode von Drittanbietern, Hardware oder Microsoft-Code. Um den Bluescreen-Fehler zu beheben, kann eine Minidump-Datei verwendet werden.

## Was ist eine Minidump-Datei?

Eine Minidump-Datei ist eine Datei, die Informationen über die Art des Systemabsturzes enthält. Dieser wird kurz vor dem Auftreten des blauen Bildschirms erstellt und enthält ein Minimum an nützlichen Informationen, die zur Lösung des Problems verwendet werden können. Die Minidump-Datei hat normalerweise eine *.dmp*-Dateiendung.

:::note
Unter Windows 10 zeigt der blaue Bildschirm einen Stoppcode und einen QR-Code an. Mit Hilfe dieser Informationen ist es möglich, im Internet nach einem bestimmten Problem zu suchen.

:::

Die Option zur Erstellung der Minidump-Datei ist standardmäßig deaktiviert. Bevor wir also näher auf die Verwendung der Datei eingehen, wollen wir uns genauer ansehen, wie sie aktiviert wird.

## Einrichten von Windows zum Erstellen der Minidump-Datei

Auch wenn Sie keine BSoD-Absturzfehler feststellen, können Sie diese Option aktivieren — dies ist eine allgemeine Empfehlung, die sich nicht unbedingt auf AdGuard-Produkte bezieht. Bitte folgen Sie den nachstehenden Anweisungen, um die Minidump-Datei automatisch zu erstellen.

 1. Type *sysdm.cpl* in the Windows search bar and click **Open**. The **System Properties Control Panel Menu** window will appear on the screen.

    :::tip

    Alternatively, click **Settings** → **System** → **About** → **Advanced system settings**.


:::

    ![System Properties *mobile_border](https://cdn.adtidy.org/blog/new/c2huSystem_Properties.jpeg)

 1. Go to the **Advanced** tab.
 1. In the **Startup and Recovery** section, click **Settings**.

    ![Startup and Recovery *mobile_border](https://cdn.adtidy.org/blog/new/1dmybiStartup_and_Recovery.png)

 1. Enable the following three options:

    - Ereignis in das Systemprotokoll eintragen
    - Automatisch Neustart durchführen
    - Debugginformationen speichern → Kleines Speicherabbild (256 kb)

    ![Drei Optionen *mobile_border](https://cdn.adtidy.org/blog/new/nmr4eThree_options.png)

 1. Klicken Sie auf **OK**, um die Einstellungen zu übernehmen.
 1. Starten Sie den Computer neu.

Sie haben das Anlegen der Minidump-Datei erfolgreich aktiviert. Jetzt wird die Datei automatisch erstellt, wenn das System abstürzt.

:::note

Standardmäßig wird die Minidump-Datei im Ordner **%SystemRoot%\Minidump** gespeichert. Sie können den Speicherort des Ordners nach Belieben ändern, aber bedenken Sie, dass viele Programme standardmäßig nach diesem Ort suchen, weshalb wir empfehlen, den Speicherort nicht zu ändern.

:::

## Collecting wfpdiag.cab file

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
