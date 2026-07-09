---
title: Übersetzungspriorität der Crowdin-Dateien
sidebar_position: 5
---

Es gibt sieben AdGuard-Projekte auf Crowdin:

- [AdGuard Applications](https://crowdin.com/project/adguard-applications)
- [AdGuard Websites](https://crowdin.com/project/adguard-websites)
- [AdGuard Ad Blocker Knowledge Base](https://crowdin.com/project/adguard-knowledge-base)
- [AdGuard VPN Knowledge Base](https://crowdin.com/project/adguard-vpn-knowledge-base)
- [AdGuard DNS Knowledge Base](https://crowdin.com/project/adguard-knowledge-bases)
- AdGuard Mail Knowledge Base
- AdGuard Glossary

Die ersten fünf werden aktiv übersetzt. *AdGuard Mail Knowledge Base* ist noch nicht zur Übersetzung verfügbar. *AdGuard Glossary* wird ausschließlich für die Speicherung und Verwaltung der Terminologie verwendet. Wenn Sie Begriffe hinzufügen oder bearbeiten möchten, können Sie dies direkt im Arbeitsbereich des Editors tun.

![Hinzufügen von Begriffen *border](https://cdn.adtidy.org/content/kb/ad_blocker/miscellaneous/adguard_translations/adding_terms.png)

## Start mit dem Projekt „Applications“

Es gibt keine strikten Richtlinien, wo man innerhalb des *AdGuard Applications* Projekts beginnen sollte. Wählen Sie einfach ein beliebiges Produkt aus.

Es gibt nur ein paar Dinge, die wir erwähnen möchten:

- Eine App wird erst dann in einer Sprache verfügbar, wenn **alle** Zeichenketten auf Crowdin übersetzt wurden.
- Übersetzen Sie die Beschreibungen im App Store nach der App selbst. Eine Beschreibung ohne ein übersetztes Produkt ist nicht hilfreich.
- Einige Dateien und Ordner können veraltet sein — zum Beispiel `adguard-vpn-for-desktop` und `adguard-vpn-for-ios-ARCHIVED`. Diese sollten nicht übersetzt werden.

## Start mit dem Projekt „Websites“

Anders verhält es sich bei dem Projekt *AdGuard Websites* . Sprachen können der Website auch dann hinzugefügt werden, wenn noch keine vollständigen Übersetzungen vorliegen. Dies hängt jedoch davon ab, welche Dateien bereits übersetzt wurden. Deshalb empfehlen wir Ihnen, mit den wichtigsten Dateien zu beginnen — sie sind nachfolgend aufgeführt:

[AdGuard Werbeblocker-Website](https://crowdin.com/project/adguard-websites/en#/adguard.com)

- `critical.resx`
- `auth.resx`
- `welcome.resx`

[AdGuard VPN-Website](https://crowdin.com/project/adguard-websites/en#/adguard-vpn.com)

- `critical.resx`
- `auth.resx`

[AdGuard DNS-Website](https://crowdin.com/project/adguard-websites/en#/adguard-dns.com)

- `critical.resx`
- `auth.resx`

Das Hinzufügen neuer und das Aktualisieren bestehender Zeichenfolgen in diesen Dateien erfordert besondere Aufmerksamkeit von den Mitwirkenden.

Zusätzlich zu den Websites gibt es im Projekt *AdGuard Websites* eine Datei zur Übersetzung von [Transaktions-E-Mails](https://crowdin.com/project/adguard-websites/en#/emails). Neu hinzugefügte Zeichenfolgen in dieser Datei haben ebenfalls eine hohe Übersetzungspriorität.
