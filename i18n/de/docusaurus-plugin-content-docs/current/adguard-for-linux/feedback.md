---
title: Senden von Feedback
sidebar_position: 4
---

## Ein Problem melden oder eine Funktion vorschlagen

Wenn Sie einen Fehler in AdGuard für Linux gefunden haben oder eine neue Funktion vorschlagen möchten, gehen Sie wie folgt vor:

- Füllen Sie das [Feedback-Formular](https://surveys.adguard.com/en/adguard_linux/form.html) aus.
- Erstellen Sie ein [GitHub-Issue](https://github.com/AdguardTeam/AdGuardCLI/issues/new/choose). Aber bevor Sie das tun, überprüfen Sie das [Repository](https://github.com/AdguardTeam/AdGuardCLI/issues?q=is%3Aissue) auf ähnliche Probleme.

:::note

Wenn Sie die Implementierung einer neuen Funktion oder eines Bugfixes unterstützen möchten, können Sie auf GitHub dafür stimmen. Um abzustimmen, reagieren Sie einfach mit einem Emoji.

:::

## Protokolle sammeln und versenden

1. Aktivieren Sie die Fehlersuche-Protokollierung:

    `adguard-cli config set log_level debug`

2. Reproduzieren Sie das Problem und versuchen Sie, sich an den genauen Zeitpunkt des Auftretens zu erinnern.

3. Warten Sie eine Weile und exportieren Sie anschließend die Protokolle:

    `adguard-cli export-logs`

    Die archivierte Protokolldatei wird standardmäßig in den Anwendungsordner heruntergeladen, und der Pfad zu den Protokollen wird in die Konsole geschrieben.

4. Senden Sie die Protokolldatei an <devteam@adguard.com>. Geben Sie den Zeitpunkt des Fehlers an und fügen Sie einen Link zu Ihrem GitHub-Problem oder dessen Nummer hinzu (sie erscheint als #Nummer neben dem Titel). Alternativ können Sie die Protokolldatei auf Google Drive hochladen und sie mit <devteam@adguard.com> teilen. Hängen Sie den Dateilink an Ihr GitHub-Problem an.

5. Wechseln Sie den Protokollierungsmodus zurück auf `info`:

    `adguard-cli config set log_level info`
