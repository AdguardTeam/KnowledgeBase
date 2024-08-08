---
title: So exportieren Sie Protokolle von der Hintergrundseite
sidebar_position: 1
---

## Exportieren von Protokollen von der Hintergrundseite in der Erweiterung

### Chrome

1. Öffnen Sie die AdGuard Browser Erweiterung und wiederholen Sie, wenn möglich, die Aktionen, die zu dem Fehler geführt haben. Notieren Sie den genauen Zeitpunkt des Auftretens des Fehlers.

2. Navigieren Sie zu „chrome://extensions“.

3. Aktivieren Sie den _Entwicklermodus_.

   ![Entwicklermodus \*border](https://cdn.adguardvpn.com/content/kb/ad_blocker/browser_extension/developer_mode1.png)

4. Klicken Sie auf „background.html".

   ![Hintergrund \*border](https://cdn.adguardvpn.com/content/kb/ad_blocker/browser_extension/background1.png)

5. Öffnen Sie den Tab _Konsole_.

   ![Der Tab Konsole \*border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/console.png)

6. Öffnen Sie das Kontextmenü und wählen Sie _Speichern unter …_.

   ![Speichern unter \*border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/save.png)

### Firefox

1. Öffnen Sie die AdGuard Browser Erweiterung und wiederholen Sie, wenn möglich, die Aktionen, die zu dem Fehler geführt haben. Notieren Sie den genauen Zeitpunkt des Auftretens des Fehlers.

2. Navigieren Sie zu „about:addons".

3. Klicken Sie auf _Add-ons debuggen_.

   ![Add-ons debuggen \*border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/add-ons.png)

4. Klicken Sie auf _Untersuchen_.

   ![Untersuchen \*border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/inspect.png)

5. Wechseln Sie zum Tab _Konsole_.

   ![Konsole \*border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/ff_console.png)

6. Klicken Sie auf _Alle Nachrichten in Datei speichern_.

   ![Speichern \*border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/save-to-file.png)

## Einreichen der Protokolle

:::note

AdGuard is committed to protecting your privacy. We strictly follow our [Privacy Policy](https://adguard.com/privacy/browser-extension.html) and do not collect any private information about users. Before sending your logs to the support team, please review the file as it may contain additional information that you don’t want to share. If it contains such personal information, we recommend that you delete it first.

:::

Now that you have collected the logs, please follow these steps to submit them to our development team:

1. Report the bug on [GitHub](https://github.com/AdguardTeam/AdguardBrowserExtension/issues/new/choose).
2. Send your archive with logs and playback time to `devteam@adguard.com` and add a link to your GitHub issue. You can also upload the archive to Google Drive and add the link to it instead of attaching the file.
