---
title: Safari-Erweiterungen
sidebar_position: 3
---

:::info

In diesem Artikel geht es um AdGuard Mini für Mac, der nur Ihren Safari-Browser schützt. Um Ihren Mac vollständig zu schützen, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

## Was sind Safari-Erweiterungen

Safari-Erweiterungen sind kleine Softwareprogramme, die den Safari-Webbrowser um zusätzliche Funktionen erweitern. Sie ermöglichen es den Nutzer:innen, ihr Surfern anzupassen und zu verbessern, indem sie Funktionen hinzufügen, die nicht von Haus aus in den Browser eingebaut sind. AdGuard Mini für Mac verwendet Erweiterungen in erster Linie, um Filterregeln auf Websites anzuwenden, die in Safari geöffnet werden.

## So funktioniert es

Um Werbung, Tracker und störende Elemente auf Websites zu blockieren, verwendet AdGuard Filterregeln. Die Regeln von AdGuard und Ihren eigenen Filtern werden in für Safari verständliche Regeln umgewandelt und in 6 Safari-Erweiterungen integriert:

- AdGuard Allgemein
- AdGuard Datenschutz
- AdGuard Soziales
- AdGuard Sicherheit
- AdGuard Benutzerdefiniert
- AdGuard Sonstiges

Jede Erweiterung zum Blockieren von Inhalten kann bis zu 150.000 aktive Filterregeln enthalten. Die Anzahl der Regeln in den meisten Filtergruppen beträgt nicht mehr als 150.000. Wenn Sie jedoch zu viele sprachspezifische oder benutzerdefinierte Filter aktivieren, könnten Sie das Limit überschreiten. In solchen Fällen werden zufällige Regeln, die den Grenzwert überschreiten, automatisch deaktiviert, was zu fehlerhaften Blockierungen führen kann. **Wir empfehlen dringend, nur die Filter zu aktivieren, die Sie benötigen**.

Es gibt noch eine weitere Erweiterung, die für andere Funktionen zuständig ist: _AdGuard für Safari_, die das AdGuard-Symbol neben der Suchleiste in Safari hinzufügt und die Verwendung von erweiterten Regeln zum Blockieren komplexer Werbeanzeigen ermöglicht.

![Safari Erweiterungen](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/check-extensions.png)

Mehr zu den einzelnen Erweiterungen weiter unten.

## Erweiterungen zur Blockierung von Inhalten

_AdGuard Allgemein_ übernimmt Regeln von Filtern, die Sie in _Einstellungen_ → _Filter_ → _Werbeblockierung_ und _Sprachspezifisch_ finden. Diese Erweiterung konzentriert sich auf eine umfassende Werbeblockierung und enthält Filter für Werbung in bestimmten Sprachen.

_AdGuard Datenschutz_ wendet Regeln von Filtern an, die sich in _Filter_ → _Datenschutz_ befinden. Sie blockiert Verfolgungsmechanismen und sorgt dafür, dass Ihre Surfaktivitäten privat bleiben.

_AdGuard Soziales_ wendet Regeln aus Filtern an, die unter _Filter_ → _Soziale Widgets_ und _Filter → Belästigungen_ zu finden sind. Sie blockiert Pop-ups, Schaltflächen für soziale Medien, Fenster von Online-Assistenten und andere Elemente auf Webseiten, die Sie als störend empfinden könnten.

_AdGuard Sicherheit_ übernimmt Regeln aus Filtern unter _Filter_ → _Sicherheit_. Diese Erweiterung identifiziert und blockiert potenziell schädliche Elemente und schützt die Nutzer:innen vor bösartigen Inhalten.

_AdGuard Sonstiges_ übernimmt Regeln von Filtern, die nicht unter die oben genannten Kategorien fallen und sich unter _Filter_ → _Sonstiges_ befinden: _Filter zur Entsperrung von Werbung in Suchanfragen und Eigenwerbung_, _AdGuard DNS-Filter_ und _AdGuard Experimenteller Filter_.

_AdGuard Benutzerdefiniert_ übernimmt Regeln von Filtern, die Sie selbst zu _benutzerdefinierten Filtern_ hinzufügen.

Benutzerregeln und Regeln für die Zulassungsliste sind in jeder Erweiterung enthalten.

## AdGuard für Safari

_AdGuard for Safari_ aktiviert das AdGuard-Symbol neben der Suchleiste. Dies ist nützlich, wenn Sie schnell einen Schutz für eine bestimmte Website einrichten oder Werbung manuell blockieren möchten.

Die Erweiterung _AdGuard für Safari_ enthält auch erweiterte Regeln, die nicht in das von Safari unterstützte Format konvertiert werden. Diese umfassen [CSS-Regeln](/general/ad-filtering/create-own-filters#cosmetic-css-rules), [erweiterte CSS-Selektoren](/general/ad-filtering/create-own-filters#extended-css-selectors) und [Scriptlets](/general/ad-filtering/create-own-filters#scriptlets), die AdGuard erlauben, komplexe Werbung wie die auf YouTube zu blockieren.

## So verwalten Sie Safari-Erweiterungen

1. Öffnen Sie Safari und klicken Sie auf _Safari_ in der oberen linken Ecke des Bildschirms, um das Menü zu erweitern.

   ![Safari-Einstellungen \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/safari/adguard-for-safari-settings1.png)

2. Klicken Sie auf _Einstellungen..._

3. Wählen Sie _Erweiterungen_.

   ![Tab „Erweiterungen“](https://cdn.adtidy.org/content/kb/ad_blocker/safari/adguard-for-safari-extensions1.png)

## Warum AdGuard für Safari eine Berechtigung benötigt

Wenn Sie die _AdGuard for Safari_ Erweiterung aktivieren, werden Sie feststellen, dass sie **Zugriff auf Webseiteninhalte** und **Zugriff auf den Browserverlauf** benötigt. Hier ist, warum sie diese Berechtigungen benötigt:

- Der Zugriff auf Webseiteninhalte ist erforderlich, damit die manuelle Werbeblockierung und die erweiterten Sperrregeln korrekt funktionieren
- Der Zugriff auf den Browserverlauf ist erforderlich, um den Schutzstatus von Websites zu überprüfen und zu bestimmen, welche erweiterten Regeln angewendet werden sollen

Wir verwenden diese Daten nicht für andere Zwecke und geben sie nicht an Dritte weiter. Weitere Informationen finden Sie in unserer [Datenschutzerklärung](https://adguard.com/privacy.html).
