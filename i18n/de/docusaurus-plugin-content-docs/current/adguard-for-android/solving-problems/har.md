---
title: So können HAR-Dateien erzeugt werden
sidebar_position: 5
---

:::info

Dieser Artikel behandelt AdGuard für Android, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

:::note

HAR-Dateien werden in Übereinstimmung mit der [Datenschutzrichtlinie von AdGuard](https://adguard.com/de/privacy.html) verarbeitet.

:::

## Was sind HAR-Dateien?

Das HAR-Format (HTTP ARchive) ist eine JSON-formatierte Archivdatei zur Protokollierung der Interaktion eines Webbrowsers mit einer Website. Die Spezifikationen des HAR-Formats definieren Archivierungsdaten für HTTP-Transaktionen, die ein Browser verwendet, um detaillierte Informationen über die von ihm geladenen Webseiten zu exportieren. Eine genauere Beschreibung des HAR-Dateiformats und seiner Spezifikationen finden Sie auf der Website [softwareishard.com](http://www.softwareishard.com/blog/har-12-spec/).

## So können HAR-Dateien erzeugt werden

Manchmal müssen wir sie analysieren, um bestimmte Anzeigen zu sperren, die aus irgendeinem Grund schwer zu reproduzieren sind. Gehen Sie wie folgt vor, um HAR-Dateien zu erstellen:

1. Öffnen Sie AdGuard und gehen Sie zu **Einstellungen** (⚙ Symbol in der unteren rechten Ecke).
2. Tippen Sie auf **Allgemein** → **Erweitert** → **Low-Level-Einstellungen**.
3. Scroll down and activate **Capture HAR** in the Filtering section.
4. Öffnen Sie die App und führen Sie die erforderlichen Aktionen durch, um das Problem zu reproduzieren.
5. Turn **Capture HAR** off.
6. Wechseln Sie zurück zu **Erweitert**.
7. Tap **Export logs and system info** → **Allow** (if necessary) → **Save**.

**Senden Sie die erzeugte Datei mit den Protokollen an den AdGuard-Support.**

:::note

Unser Support-Team wird Ihr Ticket viel schneller bearbeiten, wenn Sie die HelpDesk-Ticketnummer oder die GitHub-Issue-Nummer in Ihrer Nachricht angeben.

:::

## So können Sie HAR-Dateien analysieren

Hier sind einige Anwendungen, die wir für die Analyse von HAR-Dateien empfehlen können:

- [HTTP Archive Viewer master](https://gitgrimbo.github.io/harviewer/master/) ist ein HAR-Analysetool, das von HTTP-Tracking-Tools erstellte HTTP Archive (HAR) Log-Dateien visualisiert.
- [Fiddler](https://www.telerik.com/fiddler) ist ein Web-Debugging-Proxy, mit dem Sie den gesamten HTTP(S)-Verkehr zwischen Ihrem Computer und dem Internet erfassen, untersuchen, überwachen, Anfragen simulieren und Netzwerkprobleme diagnostizieren können.
