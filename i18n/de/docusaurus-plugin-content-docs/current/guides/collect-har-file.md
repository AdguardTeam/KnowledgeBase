---
title: How to generate a HAR file
sidebar_position: 1
---

HAR-Dateien helfen unseren technischen Support-Teams bei der Behebung komplexer Probleme. Zur Erstellung dieser Dateien empfehlen wir die Verwendung von Chrome oder Firefox. IE 11, Edge und Safari bieten jedoch auch die Möglichkeit, `.har`-Dateien zu erstellen und zu exportieren.

## Chrome {#chrome}

Um eine HAR-Datei in Chrome zu erstellen, gehen Sie folgendermaßen vor:

1. Rufen Sie die URL auf, unter der das Problem auftritt. Reproduzieren Sie Ihr Problem noch nicht.

1. Öffnen Sie die **Entwicklertools**:

    - Aus dem Menü: **Menü (⋮) → Weitere Tools → Entwicklertools**.
    - Tastatur: **Strg+Umschalt+C**, **Strg+Alt+I** oder **⌥+⌘+I für Mac**.

1. Klicken Sie auf den Tab **Netzwerk**.

1. Suchen Sie die runde Schaltfläche oben links auf dem Tab „Netzwerk“ und vergewissern Sie sich, dass sie im Aufzeichnungsmodus ist 🔴. Wenn sie grau ist, klicken Sie darauf, um sie rot zu färben und die Aufnahme zu starten.

1. Verwenden Sie die Schaltfläche **Netzwerkprotokoll löschen** (die kreisförmige Schaltfläche mit einem Strich neben der Schaltfläche Aufnehmen), um alle vorherigen Aktivitäten zu löschen.

1. Aktivieren Sie im Tab „Netzwerk“ das Kontrollkästchen **Protokoll beibehalten**.

1. Aktivieren Sie das Kontrollkästchen **Cache deaktivieren**.

    ![Chrome](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/chrome.png)

1. Reproduzieren Sie die Schritte, die das Problem verursachen.

1. Speichern Sie die Sitzung als .har-Datei, indem Sie mit der rechten Maustaste auf das Raster klicken und **Speichern als HAR mit Inhalt** wählen.

1. Senden Sie die Datei an den AdGuard-Support (support@adguard.com) mit einer detaillierten Erklärung des Problems. Zusätzliche Bildschirmfotos können ebenfalls hilfreich sein.

## Edge {#edge}

1. Rufen Sie die URL auf, unter der das Problem auftritt. Reproduzieren Sie Ihr Problem noch nicht.

1. Öffnen Sie die **Entwicklertools**:

    - Aus dem Menü: **Menü (⋮) → Weitere Tools → Entwicklertools**.
    - Tastatur: **Strg+Umschalt+C**, **Strg+Alt+I** oder **⌥+⌘+I für Mac**.

1. Klicken Sie auf den Tab **Netzwerk**.

1. Suchen Sie die runde Schaltfläche oben links auf dem Tab „Netzwerk“ und vergewissern Sie sich, dass sie im Aufzeichnungsmodus ist. Wenn sie grau ist, klicken Sie darauf, um sie rot zu färben und die Aufnahme zu starten.

1. Verwenden Sie die Schaltfläche **Netzwerkprotokoll löschen** (die kreisförmige Schaltfläche mit einem Strich neben der Schaltfläche Aufzeichnung), um alle vorherigen Aktivitäten zu löschen.

1. Aktivieren Sie im Tab „Netzwerk“ das Kontrollkästchen **Protokoll beibehalten**.

1. Aktivieren Sie das Kontrollkästchen **Cache deaktivieren**.

    ![edge](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/edge.png)

1. Reproduzieren Sie die Schritte, die das Problem verursachen.

1. Speichern Sie die Sitzung als .har-Datei, indem Sie mit der rechten Maustaste auf das Raster klicken und **Speichern als HAR mit Inhalt** wählen.

1. Senden Sie die Datei an den AdGuard-Support (support@adguard.com) mit einer detaillierten Erklärung des Problems. Zusätzliche Bildschirmfotos können ebenfalls hilfreich sein.

## Firefox {#firefox}

Um eine HAR-Datei in Firefox zu erstellen, gehen Sie folgendermaßen vor:

1. Rufen Sie die URL auf, unter der das Problem auftritt. Reproduzieren Sie Ihr Problem noch nicht.

1. Öffnen Sie die Entwicklungswerkzeuge im Modus **Netzwerkanalyse**:

    - Aus dem Menü: **Menü (☰) → Weitere Werkzeuge → Werkzeuge für Web-Entwickler**.
    - Tastatur: **Strg + Umschalt + C** oder **⌥ + ⌘ + E** (macOS).

1. Beachten Sie die Schaltfläche **Wiedergabe/Pause** ▶️/⏸️ oben links im Tab „Netzwerkanalyse”.

    - Die Taste sollte im Wiedergabemodus ▶️ sein.

1. Wenn derzeit Informationen im Raster angezeigt werden, löschen Sie diese, indem Sie auf die Schaltfläche **Papierkorb leeren** ganz links neben der Schaltfläche Wiedergabe/Pause klicken.

1. Aktivieren Sie im Tab „Netzwerk“ das Kontrollkästchen **Protokoll beibehalten**.

1. Aktivieren Sie das Kontrollkästchen **Cache deaktivieren**.

    ![firefox](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/firefox.png)

1. Reproduzieren Sie die Schritte, die das Problem verursachen.

1. Speichern Sie die Sitzung als .har-Datei, indem Sie mit der rechten Maustaste auf das Gitter klicken und **Alles als HAR speichern** wählen.

1. Senden Sie die Datei an den AdGuard-Support (support@adguard.com) mit einer detaillierten Erklärung des Problems. Zusätzliche Bildschirmfotos können ebenfalls hilfreich sein.

## Internet Explorer 11 {#ie11}

Um eine HAR-Datei in Internet Explorer 11 zu erstellen, gehen Sie folgendermaßen vor:

1. Rufen Sie die URL auf, unter der das Problem auftritt. Reproduzieren Sie Ihr Problem noch nicht.

1. Öffnen Sie die Entwicklungswerkzeuge im Modus **Netzwerkanalyse**:

    - Aus dem Zahnradmenü: **Entwicklertools** → **Netzwerk**.
    - Tastatur: **F12 → Netzwerk**.

1. Beachten Sie die Schaltfläche **Aufzeichnung** zum Starten der Profilerstellung und die Schaltfläche **Anhalten** oben links im Tab „Netzwerk“.

    - Die Wiedergabetaste wird während der Aufnahme grau und die Stopptaste rot dargestellt. Wechseln Sie in den **Wiedergeben**-Modus.

1. Löschen Sie alle Sitzungsinformationen, die in der unteren Tabelle angezeigt werden, mit der Schaltfläche **Sitzung löschen** im Tab „Netzwerk“. Bewegen Sie den Mauszeiger über die Symbole, um deren Namen anzuzeigen.

    - Die Schaltfläche **Sitzung löschen** ist ein dreizeiliges Symbol mit einem X darauf.

1. Aktivieren Sie das Kontrollkästchen **Cache deaktivieren**.

1. Reproduzieren Sie die Schritte, die das Problem verursachen.

1. Speichern Sie die Sitzung als .har-Datei, indem Sie auf der Tab „Netzwerk“ auf die Schaltfläche **Auf Datenträger speichern** (Export als HAR) klicken.

1. Senden Sie die Datei an den AdGuard-Support (support@adguard.com) mit einer detaillierten Erklärung des Problems. Zusätzliche Bildschirmfotos können ebenfalls hilfreich sein.

## Safari {#safari}

Um eine HAR-Datei in Safari zu erstellen, gehen Sie folgendermaßen vor:

1. Suchen Sie in der Safari-Menüleiste am oberen Bildschirmrand nach dem Menü **Entwickler**.

    - Wenn es nicht sichtbar ist, aktivieren Sie es, indem Sie zu **Safari → Einstellungen → Erweitert** wechseln.
    - Aktivieren Sie das Kontrollkästchen unten neben **Menü „Entwickler“ in der Menüleiste anzeigen**.

1. Rufen Sie die URL auf, unter der das Problem auftritt. Reproduzieren Sie Ihr Problem noch nicht.

1. Öffnen Sie den Tab **Netzwerk** in „Webinformationen einblenden“:

    - Aus dem Menü: **Entwickler → Webinformationen einblenden → Netzwerk**.
    - Tastatur: **⌥+⌘+I → Netzwerk**

1. Aktivieren Sie das Kontrollkästchen **Protokoll beibehalten** auf der linken Seite des Tabs „Netzwerk“ im Menü **Andere Filteroptionen...**.

    ![safari](https://cdn.adtidy.org/content/kb/ad_blocker/safari/preserve-log.png)

1. Löschen Sie aktuelle Netzwerkelemente, indem Sie auf das Symbol 🗑 **Netzwerkobjekte löschen** ganz rechts auf den Tabs „Netzwerk“ klicken.

    - Tastatur: **⌘+K**

1. Aktivieren Sie das Kontrollkästchen **Caches deaktivieren**.

1. Reproduzieren Sie die Schritte, die das Problem verursachen.

1. Speichern Sie die Sitzung als .har-Datei, indem Sie auf das Symbol **Exportieren** neben dem Symbol **Netzwerkobjekte löschen** klicken.

1. Senden Sie die Datei an den AdGuard-Support (support@adguard.com) mit einer detaillierten Erklärung des Problems. Zusätzliche Bildschirmfotos können ebenfalls hilfreich sein.

## Android {#android}

Um HAR-Dateien zu erstellen, gehen Sie folgendermaßen vor:

1. Öffnen Sie AdGuard und öffnen Sie die **Einstellungen**.

1. Wählen Sie im Menü **Erweitert**.

1. Wählen Sie **Low-Level-Einstellungen**

1. Aktivieren Sie `pref.har.capture` (Sie müssen den Schutz neu starten).

1. Reproduzieren Sie nun das Problem — öffnen Sie die App, führen Sie die notwendigen Aktionen durch, damit die Anzeige erscheint.

1. Deaktivieren Sie nun `pref.har.capture` wieder.

1. Kehren Sie zurück und tippen Sie auf **Protokolle und Systeminformationen exportieren** → **Speichern**.

## Windows {#windows}

1. Öffnen Sie in AdGuard: **Einstellungen***→ **Allgemeine Einstellungen** → **Erweiterte Einstellungen** und blättern Sie nach unten.

1. Aktivieren Sie das Kästchen **Das Schreiben im HAR-Format erlauben**.

1. Reproduzieren Sie das Problem.

1. Öffnen Sie die **Allgemeine Einstellungen** → Klicken Sie auf **Protokolle exportieren** → **Speichern**.

1. Deaktivieren Sie das Schreiben von HAR, indem Sie das entsprechende Kontrollkästchen deaktivieren.
