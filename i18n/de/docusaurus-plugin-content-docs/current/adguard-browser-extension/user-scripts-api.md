---
title: User Scripts API
sidebar_position: 8
---

:::info

In diesem Artikel geht es um die AdGuard Browsereweiterung, die nur Ihren Browser schützt. Um Ihr gesamtes Gerät zu schützen, [laden Sie die AdGuard-App herunter](https://adguard.com/download.html?auto=true).

:::

Beim Hinzufügen eines benutzerdefinierten Filters oder einer Benutzerregel wird eine Benachrichtigung angezeigt, in der Sie aufgefordert werden, den Entwicklermodus zu aktivieren, um diese Funktionen in der Erweiterung nutzen zu können.

![Benachrichtigung \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/notification-allow-user-scripts.jpg)

Ab Version 5.2 verwendet die AdGuard-Browsererweiterung die User Scripts API. Chrome verlangt von dieser neuen API, dass bewährte Methoden für die Sicherheit der Nutzer eingehalten werden.

## Was ist die User Scripts API?

Die User Scripts API ist ein Tool, mit dem Erweiterungen benutzerdefinierte JavaScript-Skripte auf Webseiten ausführen können. Diese werden häufig verwendet, um Websites auf eine Weise zu verändern oder zu verbessern, die von der Website selbst nicht vorgesehen ist.

Mit der Umstellung auf Chrome's Manifest V3 sind viele ältere Methoden zur Einbindung von Skripten eingeschränkt oder verzögert. Es gibt jedoch eine Ausnahme für die User Scripts API.

Erfahren Sie mehr über die Auswirkungen der MV3-Politik in unserem [Blogbeitrag](https://adguard.com/de/blog/review-issues-in-chrome-web-store.html).

## So aktivieren Sie den Entwicklermodus

Um benutzerdefinierte Filter und JavaScript-Regeln im Tab _Benutzerregeln_ verwenden zu können, müssen Sie zunächst Ihren Browser einrichten. Dadurch erhält die Erweiterung eine zuverlässige und sichere Methode, um Skripte zum optimalen Zeitpunkt in Webseiten einzuschleusen. Befolgen Sie die nachfolgenden Anweisungen je nach Ihrer Chrome-Version.

### Für Chrome-Versionen vor 138

Sie müssen zunächst den Entwicklermodus für Erweiterungen aktivieren. Öffnen Sie dazu das Chrome-Menü, indem Sie auf die drei Punkte in der oberen rechten Ecke klicken, gehen Sie zu _Erweiterungen_ ⭢ _Erweiterungen verwalten_ und schalten Sie den Schalter _Entwicklermodus_ um.

![Erweiterungen verwalten \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/developer-mode-enable1.jpg)

### Für Chrome-Versionen 138 und neuer

Sie müssen das Kontrollkästchen _Benutzerskripte zulassen_ aktivieren. Öffnen Sie dazu das Chrome-Menü, indem Sie auf die drei Punkte in der oberen rechten Ecke klicken, gehen Sie zu _Erweiterungen_ ⭢ _Erweiterungen verwalten_, gehen Sie zu _Details_ der AdGuard-Browsererweiterung und schalten Sie den Schalter _Benutzerskripte zulassen_ um.

![Erweiterungen verwalten \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/allow-user-scripts1.jpg)
