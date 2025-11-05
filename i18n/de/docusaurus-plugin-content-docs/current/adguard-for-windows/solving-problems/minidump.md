---
title: So sammeln Sie einen BSOD-Minidump
sidebar_position: 9
---

:::info

Dieser Artikel behandelt AdGuard für Windows, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock).

:::

:::note

Daten und Dateien, die in Minidump-Dateien bereitgestellt werden, werden in Übereinstimmung mit [der AdGuard-Datenschutzerklärung](https://adguard.com/en/privacy.html) verarbeitet.

:::

Bei der Verwendung von AdGuard können gelegentlich „Blue Screen of Death“-Fehler (BSOD) auftreten. In diesem Fall kann unser Support-Team eine Minidump-Datei anfordern, um bei der Diagnose des Problems zu unterstützen. Diese Dateien enthalten technische Absturzdaten, die uns helfen, das Problem zu identifizieren und beheben zu können.

## Prüfung auf vorhandenen Minidump

Um Minidump-Dateien sammeln zu können, werden Administratorrechte auf Ihrem Computer benötigt. Windows speichert diese Dateien standardmäßig im Ordner `C:\Windows\Minidump\`. Die Dateien, nach denen Sie suchen, tragen entweder den Namen `MEMORY.DMP` oder folgen dem Muster `Mini(ddmmmyy-xxx).dmp`, wobei die Buchstaben und Zahlen für das Datum und die laufende Nummer stehen.

![Minidump-Datei](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/minidump.png)

Wenn Sie diese Dateien nicht finden können, ist Ihr System möglicherweise nicht für das automatische Erstellen von Minidumps konfiguriert.

## Minidump-Einstellungen konfigurieren

Wenn Minidumps nicht automatisch erstellt werden, gehen Sie wie folgt vor, um _Small Memory Dump_ zu aktivieren:

1. Drücken Sie gleichzeitig die _Windows-Taste + R_, um das Dialogfeld _Ausführen_ zu öffnen.

2. Geben Sie `sysdm.cpl` ein und klicken Sie auf _OK_. Dadurch wird das Fenster _Systemeigenschaften_ geöffnet.

   ![Systemeigenschaften öffnen \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/sysdm.png)

3. Wechseln Sie zum Tab _Erweitert_ → _Start und Wiederherstellung_ → _Einstellungen_.

   ![Tab Erweitert \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/advanced_tab.png)

4. Hier finden Sie eine Option namens _Debuginformationen speichern_. Stellen Sie sicher, dass er auf _Small Memory Dump (256 KB)_ festgelegt ist und dass der Pfad `%SystemRoot%\Minidump` lautet. Diese Einstellungen stellen sicher, dass Windows die Minidump-Dateien erstellt, die wir benötigen, wenn ein BSOD auftritt.

   ![Minidump-Datei \*mobilgeräte](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/systemroot.png)

5. Klicken Sie auf _OK_, um die Änderungen zu speichern.

## Nach einem Absturz

Nachdem ein BSOD aufgetreten ist und Sie Ihren Computer neu gestartet haben, finden Sie die erzeugten Minidump-Dateien im Ordner `C:\Windows\Minidump\`. Durch Sortieren der Dateien nach Änderungsdatum können Sie leicht die aktuellste Datei finden, die Ihrem Absturz entspricht.

Wenn Sie die Minidump-Einstellungen nach dem Auftreten des Absturzes konfiguriert haben, müssen Sie das Problem reproduzieren, um eine neue Minidump-Datei zu erstellen.

## Erfassen der Datei `wfpdiag.cab`

Unser Support-Team kann eine wfpdiag.cab-Datei zusammen mit einer Minidump-Datei anfordern, um die Systemprotokolle genauer analysieren und Probleme diagnostizieren zu können. Um die Datei zu erfassen, gehen Sie bitte wie folgt vor:

1. Aktivieren Sie den AdGuard-Schutz.

2. Klicken Sie auf _Start_ und geben Sie `cmd` ein, um die _Eingabeaufforderung_ zu öffnen.

3. Klicken Sie mit der rechten Maustaste auf _Eingabeaufforderung_ und wählen Sie _Als Administrator ausführen_.

   :::note

   Es wird eine Datei „wfpdiag.cab“ in Ihrem aktuellen Verzeichnis erstellt. Sie können den Speicherort ändern, indem Sie `cd <folder_name>` eingeben.

   :::

4. Um die Protokollierung zu starten, geben Sie den folgenden Befehl ein: `netsh wfp capture start`.

5. Besuchen Sie eine beliebige Website, um den Datenverkehr durch AdGuard zu leiten und den Filterungsprozess zu protokollieren.

6. Um die Protokollierung zu beenden, geben Sie `netsh wfp capture stop` ein.
