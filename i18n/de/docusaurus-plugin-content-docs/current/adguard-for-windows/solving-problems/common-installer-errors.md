---
title: Häufige Installationsfehler
sidebar_position: 6
---

:::info

Dieser Artikel behandelt AdGuard für Windows, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

In diesem Artikel finden Sie einige der häufigsten Fehler, die bei der Installation von AdGuard für Windows auftreten können, sowie mögliche Lösungsansätze.

### Fehler 5: Zugriff verweigert {#error-5}

This error message appears when required permissions haven't been granted. Es kann verschiedene Gründe geben, warum das AdGuard-Installationsprogramm nicht über die erforderlichen Berechtigungen verfügt, um den Installationsvorgang ordnungsgemäß abzuschließen. Sie können die folgenden Schritte versuchen:

- Temporarily disable your antivirus. Einige von ihnen können die Installation beeinträchtigen, je nachdem, wie stark sie eingestellt sind.

- Wählen Sie einen anderen Installationsordner. Es ist möglich, dass der aktuelle Installationsordner Zugriffsbeschränkungen hat. Stellen Sie außerdem sicher, dass Sie kein externes oder virtuelles Laufwerk usw. auswählen.

- Starten Sie Ihren Computer neu. Manchmal sind die Berechtigungsprobleme vorübergehend und können durch einen Neustart des PCs behoben werden.

### Fehler 112: Datenträger verfügt nicht mehr über genügend Speicherplatz, Fehler 1632: Temporärer Ordner voll oder unzugänglich {#error-112}

Es handelt sich um zwei verschiedene Fehler mit sehr ähnlichen Lösungen. As their titles suggest, AdGuard installer didn't find enough disk space to complete the installation. Es gibt mehrere Möglichkeiten, das Problem zu beheben:

- Deinstallieren Sie einige Programme oder löschen Sie unnötige Dateien von dem Laufwerk, auf dem Sie AdGuard installieren möchten.

- Laden Sie [AdwCleaner](http://www.bleepingcomputer.com/download/adwcleaner/), eine kostenlose Software von Malwarebytes, herunter, installieren Sie sie und führen Sie sie aus. It will, among other things, clean your system from all kinds of extra "leftover" files that remain after incorrectly uninstalled programs and such. Das wird helfen, etwas Speicherplatz freizugeben.

- Starten Sie Ihren Computer neu. Manchmal können temporäre Dateien eine beträchtliche Menge an Speicherplatz beanspruchen, und ein Neustart Ihres PCs ist die zuverlässigste Methode, sie loszuwerden.

### Fehler 1601: Auf Windows Installer kann nicht zugegriffen werden {#error-1601}

You could say this is a particular subcategory of Error 1603. Die möglichen Lösungen sind ähnlich:

- Starten und registrieren Sie den Microsoft Installer-Dienst erneut. Das erfordert etwas Arbeit.

    1) Drücken Sie *Win ⊞ + R* und geben Sie **services.msc** ein. 2) Suchen Sie in der Liste und doppelklicken Sie auf *Windows Installer*. 3) Drücken Sie *Start* unter *Dienststatus* und drücken Sie *OK*. Wenn der Dienststatus **Wird ausgeführt** lautet, sollten Sie zuerst auf *Beenden* und anschließend auf *Starten*klicken. 4) Drücken Sie *Win + R*, geben Sie ***msiexec /unregister*** ein und drücken Sie *Eingabetaste*. 5) Drücken Sie erneut *Win + R*, geben Sie ***msiexec /regserver*** ein und drücken Sie *Eingabetaste*

- Starten Sie den PC neu und beginnen Sie die Installation von vorne. Manchmal reicht dies aus, um das Problem zu beheben.

### Error 1602: Canceled by user {#error-1602}

Wenn Sie diesen Fehlercode erhalten haben, haben Sie den Installationsprozess wahrscheinlich auf die eine oder andere Weise manuell unterbrochen. Was Sie tun können:

- Schließen Sie nicht das Fenster des Installationsprogramms. Wenn die Installation abgeschlossen ist, wird es automatisch geschlossen.

- Wenn während der Installation ein Dialogfenster angezeigt wird, klicken Sie auf „Ja”, um dem Installationsprogramm die erforderlichen Berechtigungen zu erteilen. Wenn Sie auf „Nein“ klicken, wird die Installation abgebrochen.

- Starten Sie keine anderen Prozesse, während der Installationsvorgang ausgeführt wird.

### Fehler 1603: Schwerwiegender Fehler bei der Installation {#error-1603}

Der Fehler klingt erschreckender als er tatsächlich ist. In Wirklichkeit handelt es sich um einen eher allgemeinen Fehler, der viele verschiedene Ursachen haben kann, von denen einige leicht zu beheben sind. Probieren Sie die folgenden Lösungen aus:

- Drücken Sie die *Win*-Taste, suchen Sie nach *Eingabeaufforderung* und führen Sie sie aus. Geben Sie dort `sfc /scannow` ein und drücken Sie *Eingabetaste* ⏎.

- Wählen Sie einen anderen Installationsordner. Es ist möglich, dass der aktuelle Installationsordner Zugriffsbeschränkungen hat. Stellen Sie außerdem sicher, dass Sie kein externes oder virtuelles Laufwerk usw. auswählen.

- Deinstallieren Sie AdGuard mit unserem speziellen [Deinstallationstool](../../installation#advanced) und wiederholen Sie dann die Installation.

- Starten und registrieren Sie den Microsoft Installer-Dienst erneut. Das erfordert etwas Arbeit.

    1) Drücken Sie *Win + R* und geben Sie ***services.msc*** ein. 2) Suchen Sie in der Liste und doppelklicken Sie auf *Windows Installer*. 3) Drücken Sie *Start* unter *Dienststatus* und drücken Sie *OK*. Wenn der Dienststatus **Wird ausgeführt** lautet, sollten Sie zuerst auf *Beenden* und anschließend auf *Starten*klicken. 4) Drücken Sie *Win + R*, geben Sie ***msiexec /unregister*** ein und drücken Sie *Eingabetaste*. 5) Drücken Sie erneut *Win + R*, geben Sie ***msiexec /regserver*** ein und drücken Sie *Eingabetaste*

- Acquire full permissions on the drive for installation. It is possible that the error 1603 occurs because you don’t have full permissions on the file location. It's also not as easy as some of the other solutions:

    1) Open *File Explorer*, right-click the drive containing the installation location and select *Properties*. 2) Go to *Security* tab and click *Edit*. 3) Single-click *SYSTEM* and ensure that the *Allow* box of every item in *Permissions for SYSTEM* is checked (if it is checkable). Do the same check for *Administrators*. 4) Click *OK* to go back to *Properties* dialog. Then click *Advanced*. 5) Click *Change Permissions*. 6) On *Permissions* tab, double-click *Administrators*. 7) Select *This folder, subfolders and files* for *Applies to* field and check all the available *Basic permissions*. After that, hit *OK*. 8) Do the same operation above (from item 7) for *SYSTEM*. 9) Click *OK* all the way out. Versuchen Sie, AdGuard erneut zu installieren.

### Error 1618: Another installation is already in progress {#error-1618}

Dieser Fehler tritt auf, wenn mehrere Instanzen des AdGuard-Installationsprogramms gleichzeitig gestartet wurden. Das sollten Sie tun, wenn Sie diesen Fehler erhalten:

- Starten Sie Ihren PC neu und starten Sie das Installationsprogramm erneut. Wenn Sie den Computer neu starten, werden alle laufenden Prozesse angehalten, einschließlich aller Kopien des Installationsprogramms.

- Don't make multiple clicks on the installer even if it doesn't start right away. Manchmal kann es ein paar Sekunden dauern, bis die Benutzeroberfläche des Installationsprogramms angezeigt wird.

### Error 1638: Another version of this product is already installed {#error-1638}

It's very likely that you've already installed AdGuard before.

- Check if AdGuard is already installed on your computer. You can do it by pressing the *Win* key and typing in ***AdGuard***.

- Maybe there're some leftover files from a previous AdGuard installation. Deinstallieren Sie AdGuard mit unserem speziellen [Deinstallationstool](../../installation#advanced) und wiederholen Sie dann die Installation.

### Andere Fehler {#other}

If you've encountered an error that's not listed above, it is possible that we can solve it by ourselves. But in order to do that, we need log files from you. Bitte führen Sie dazu die folgenden Schritte aus:

- Find and archive the **AdGuard installation logs** as it is described in [this article](../installation-logs).

- Find and save to disk the **Event Viewer** logs. [This article](../system-logs) explains how to do that.

- Please email all these files from two previous steps to the support team at **support@adguard.com** and describe the problem in the message body. Our tech support agents will reply to you as soon as possible.
