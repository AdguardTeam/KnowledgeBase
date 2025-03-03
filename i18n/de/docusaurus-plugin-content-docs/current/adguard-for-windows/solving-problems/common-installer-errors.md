---
title: Häufige Installationsfehler
sidebar_position: 6
---

:::info

Dieser Artikel behandelt AdGuard für Windows, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

In diesem Artikel finden Sie einige der häufigsten Fehler, die bei der Installation von AdGuard für Windows auftreten können, sowie mögliche Lösungsansätze.

### Fehler 5: Zugriff verweigert {#error-5}

Diese Fehlermeldung wird angezeigt, wenn die erforderlichen Berechtigungen nicht erteilt wurden. Es kann verschiedene Gründe geben, warum das AdGuard-Installationsprogramm nicht über die erforderlichen Berechtigungen verfügt, um den Installationsvorgang ordnungsgemäß abzuschließen. Sie können die folgenden Schritte versuchen:

- Deaktivieren Sie vorübergehend Ihr Antivirenprogramm. Einige von ihnen können die Installation beeinträchtigen, je nachdem, wie stark sie eingestellt sind.

- Wählen Sie einen anderen Installationsordner. Es ist möglich, dass der aktuelle Installationsordner Zugriffsbeschränkungen hat. Stellen Sie außerdem sicher, dass Sie kein externes oder virtuelles Laufwerk usw. auswählen.

- Starten Sie Ihren Computer neu. Manchmal sind die Berechtigungsprobleme vorübergehend und können durch einen Neustart des PCs behoben werden.

### Fehler 112: Datenträger verfügt nicht mehr über genügend Speicherplatz, Fehler 1632: Temporärer Ordner voll oder unzugänglich {#error-112}

Es handelt sich um zwei verschiedene Fehler mit sehr ähnlichen Lösungen. Wie der Titel vermuten lässt, hat das Installationsprogramm von AdGuard nicht genügend Speicherplatz gefunden, um die Installation abzuschließen. Es gibt mehrere Möglichkeiten, das Problem zu beheben:

- Deinstallieren Sie einige Programme oder löschen Sie unnötige Dateien von dem Laufwerk, auf dem Sie AdGuard installieren möchten.

- Laden Sie [AdwCleaner](http://www.bleepingcomputer.com/download/adwcleaner/), eine kostenlose Software von Malwarebytes, herunter, installieren Sie sie und führen Sie sie aus. Es befreit Ihr System unter anderem von allen Arten zusätzlicher „verbliebener“ Dateien, die nach der fehlerhaften Deinstallation von Programmen usw. noch vorhanden sind. Das wird helfen, etwas Speicherplatz freizugeben.

- Starten Sie Ihren Computer neu. Manchmal können temporäre Dateien eine beträchtliche Menge an Speicherplatz beanspruchen, und ein Neustart Ihres PCs ist die zuverlässigste Methode, sie loszuwerden.

### Fehler 1601: Auf Windows Installer kann nicht zugegriffen werden {#error-1601}

Man könnte sagen, dass dies eine besondere Unterkategorie des Fehlers 1603 ist. Die möglichen Lösungen sind ähnlich:

- Start and re-register Microsoft Installer service. It requires some work.

    - Press *Win + R* and enter **services.msc**.
    - Find in the list and double click *Windows Installer*.
    - Hit *Start* button under *Service status* and hit *OK*. If the service status is **running**, you should click *Stop* first and then hit *Start*.
    - Press *Win + R*, type and enter ***msiexec /unregister*** and hit *Enter*.
    - Press *Win + R* again, type and enter ***msiexec /regserver*** and hit *Enter*

- Starten Sie den PC neu und beginnen Sie die Installation von vorne. Manchmal reicht dies aus, um das Problem zu beheben.

### Fehler 1602: Vom Benutzer abgebrochen {#error-1602}

Wenn Sie diesen Fehlercode erhalten haben, haben Sie den Installationsprozess wahrscheinlich auf die eine oder andere Weise manuell unterbrochen. Was Sie tun können:

- Schließen Sie nicht das Fenster des Installationsprogramms. Wenn die Installation abgeschlossen ist, wird es automatisch geschlossen.

- Wenn während der Installation ein Dialogfenster angezeigt wird, klicken Sie auf „Ja”, um dem Installationsprogramm die erforderlichen Berechtigungen zu erteilen. Wenn Sie auf „Nein“ klicken, wird die Installation abgebrochen.

- Starten Sie keine anderen Prozesse, während der Installationsvorgang ausgeführt wird.

### Fehler 1603: Schwerwiegender Fehler bei der Installation {#error-1603}

Der Fehler klingt erschreckender als er tatsächlich ist. In Wirklichkeit handelt es sich um einen eher allgemeinen Fehler, der viele verschiedene Ursachen haben kann, von denen einige leicht zu beheben sind. Probieren Sie die folgenden Lösungen aus:

- Drücken Sie die *Win*-Taste, suchen Sie nach *Eingabeaufforderung* und führen Sie sie aus. Geben Sie dort `sfc /scannow` ein und drücken Sie *Eingabetaste* ⏎.

- Wählen Sie einen anderen Installationsordner. Es ist möglich, dass der aktuelle Installationsordner Zugriffsbeschränkungen hat. Stellen Sie außerdem sicher, dass Sie kein externes oder virtuelles Laufwerk usw. auswählen.

- Deinstallieren Sie AdGuard mit unserem speziellen [Deinstallationstool](../../installation#advanced) und wiederholen Sie dann die Installation.

- Start and re-register Microsoft Installer service. It requires some work.

    - Press *Win + R* and enter ***services.msc***.
    - Find in the list and double click *Windows Installer*.
    - Hit *Start* button under *Service status* and hit *OK*. If the service status is **running**, you should click *Stop* first and then hit *Start*.
    - Press *Win + R*, type and enter ***msiexec /unregister*** and hit *Enter*.
    - Press *Win + R* again, type and enter ***msiexec /regserver*** and hit *Enter*

- Acquire full permissions on the drive for installation. It is possible that the error 1603 occurs because you don’t have full permissions on the file location. It's also not as easy as some of the other solutions:

    - Open *File Explorer*, right-click the drive containing the installation location and select *Properties*.
    - Go to *Security* tab and click *Edit*.
    - Single-click *SYSTEM* and ensure that the *Allow* box of every item in *Permissions for SYSTEM* is checked (if it is checkable). Do the same check for *Administrators*.
    - Click *OK* to go back to *Properties* dialog. Then click *Advanced*.
    - Click *Change Permissions*.
    - On *Permissions* tab, double-click *Administrators*.
    - Select *This folder, subfolders and files* for *Applies to* field and check all the available *Basic permissions*. After that, hit *OK*.
    - Do the same operation above (from item 7) for *SYSTEM*.
    - Click *OK* all the way out. Try installing AdGuard again.

### Fehler 1618: Eine andere Installation wird bereits ausgeführt {#error-1618}

Dieser Fehler tritt auf, wenn mehrere Instanzen des AdGuard-Installationsprogramms gleichzeitig gestartet wurden. Das sollten Sie tun, wenn Sie diesen Fehler erhalten:

- Starten Sie Ihren PC neu und starten Sie das Installationsprogramm erneut. Wenn Sie den Computer neu starten, werden alle laufenden Prozesse angehalten, einschließlich aller Kopien des Installationsprogramms.

- Führen Sie nicht mehrere Klicks auf das Installationsprogramm aus, auch wenn es nicht sofort startet. Manchmal kann es ein paar Sekunden dauern, bis die Benutzeroberfläche des Installationsprogramms angezeigt wird.

### Fehler 1638: Eine andere Version dieses Produkts ist bereits installiert {#error-1638}

Es ist sehr wahrscheinlich, dass Sie AdGuard schon einmal installiert haben.

- Überprüfen Sie, ob AdGuard bereits auf Ihrem Computer installiert ist. Sie können dies tun, indem Sie die Taste *Win* ⊞ drücken und ***AdGuard*** eintippen.

- Vielleicht sind noch Dateien von einer früheren AdGuard-Installation übrig geblieben. Deinstallieren Sie AdGuard mit unserem speziellen [Deinstallationstool](../../installation#advanced) und wiederholen Sie dann die Installation.

### Andere Fehler {#other}

Wenn Sie auf einen Fehler gestoßen sind, der oben nicht aufgeführt ist, ist es möglich, das AdGuard Ihnen helfen kann das Problem zu lösen. Dazu benötigen wir jedoch Protokolldateien von Ihnen. Bitte führen Sie dazu die folgenden Schritte aus:

- Suchen und archivieren Sie die **AdGuard-Installationsprotokolle**, wie es in [diesem Artikel](../installation-logs) beschrieben ist.

- Suchen und speichern Sie die **Ereignisanzeige**-Protokolle auf der Festplatte. [Dieser Artikel](../system-logs) erklärt, wie das geht.

- Bitte senden Sie alle diese Dateien aus den beiden vorangegangenen Schritten per E-Mail an das Support-Team unter **support@adguard.com** und beschreiben Sie das Problem im Nachrichtentext. Unser Support-Team wird Ihnen so schnell wie möglich antworten.
