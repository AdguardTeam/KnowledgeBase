---
title: So exportieren Sie Protokolle von der Hintergrundseite
sidebar_position: 1
---

## Exportieren von Protokollen von der Hintergrundseite in der Erweiterung

### Chrome

1. Öffnen Sie die AdGuard Browser Erweiterung und wiederholen Sie, wenn möglich, die Aktionen, die zu dem Fehler geführt haben. Notieren Sie den genauen Zeitpunkt des Auftretens des Fehlers.

2. Navigieren Sie zu „chrome://extensions“.

3. Aktivieren Sie den _Entwicklermodus_.

   ![Entwicklermodus \*border](https://cdn.adtidy.org/content/kb/ad_blocker/browser_extension/chrome_extensions.png)

4. Suchen Sie die AdGuard Browsererweiterung und klicken Sie auf `service worker`.

   ![Hintergrund \*border](https://cdn.adtidy.org/content/kb/ad_blocker/browser_extension/chrome_developer_mode.png)

5. Öffnen Sie den Tab _Konsole_, klicken Sie mit der rechten Maustaste irgendwo in den Konsolenbereich und wählen Sie _Speichern unter…_.

   ![Speichern unter \*border](https://cdn.adtidy.org/content/kb/ad_blocker/browser_extension/chrome_console_save.png)

### Firefox

1. Öffnen Sie die AdGuard Browser Erweiterung und wiederholen Sie, wenn möglich, die Aktionen, die zu dem Fehler geführt haben. Notieren Sie den genauen Zeitpunkt des Auftretens des Fehlers.

2. Navigieren Sie zu „about:addons".

3. Klicken Sie auf das Zahnradsymbol und wählen Sie _Debug Add-ons_.

   ![Debug Add-ons \*border](https://cdn.adtidy.org/content/kb/ad_blocker/browser_extension/firefox_debug_addons.png)

4. Klicken Sie auf _Untersuchen_.

   ![Untersuchen \*border](https://cdn.adtidy.org/content/kb/ad_blocker/browser_extension/firefox_inspect.png)

5. Klicken Sie im Reiter _Konsole_ mit der rechten Maustaste an eine beliebige Stelle im Konsolenbereich und wählen Sie _Alle Meldungen in Datei speichern_.

   ![Konsole \*border](https://cdn.adtidy.org/content/kb/ad_blocker/browser_extension/firefox_console_save.png)

## Einreichen der Protokolle

:::note

AdGuard ist dem Schutz Ihrer Privatsphäre verpflichtet. Wir halten uns strikt an unsere [Datenschutzerklärung](https://adguard.com/privacy/browser-extension.html) und sammeln keine privaten Informationen über Nutzer:innen. Bevor Sie Ihre Protokolle an das Support-Team senden, überprüfen Sie bitte die Datei, da sie zusätzliche Informationen enthalten kann, die Sie vielleicht nicht freigeben möchten. Wenn sie solche persönlichen Informationen enthält, empfehlen wir Ihnen, sie zuerst zu löschen.

:::

Nachdem Sie die Protokolle zusammengestellt haben, folgen Sie bitte diesen Schritten, um diese an unser Entwicklungsteam zu übermitteln:

1. Melden Sie den Fehler auf [GitHub](https://github.com/AdguardTeam/AdguardBrowserExtension/issues/new/choose).
2. Senden Sie Ihr Archiv mit den Protokollen und der Aufzeichnungszeit an „devteam@adguard.com“ und fügen Sie einen Link zu Ihrem GitHub-Problem hinzu. Sie können das Archiv auch in Google Drive hochladen und den Link hinzufügen, anstatt die Datei anzuhängen.
