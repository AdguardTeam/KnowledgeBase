---
title: Filter
sidebar_position: 2
---

:::info

In diesem Artikel geht es um die AdGuard-Browsererweiterung, die nur Ihren Browser schützt. Um Ihr gesamtes Gerät zu schützen, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

- [Benutzerdefinierte Filter](#custom-filters)
- [Benutzerregeln](#user-rules)
- [Zulassungsliste](#allowlist)

Das Blockieren von Werbung ist die Kernfunktion jedes Werbeblockers, und die AdGuard-Browsererweiterung bildet da keine Ausnahme. Die Werbeblockierung basiert auf Filtern, d. h. auf einer Reihe von Regeln, die in einer speziellen Sprache geschrieben sind. Diese Regeln legen fest, welche Seitenelemente blockiert werden sollen und welche nicht. AdGuard wertet diese Regeln aus und passt die Webanfragen entsprechend an. Das Ergebnis: Keine Werbung mehr auf Websites.

![Filter \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/filters.png)

Alle Filter sind nach ihrer Funktion in Kategorien eingeteilt:

- Werbeblockierung: Blockieren verschiedener Arten von Werbung
- Datenschutz: Sperren von Online-Trackern und Analysesystemen zum Schutz Ihrer Daten
- Social-Media-Widgets: Sperren von Social-Media-Elementen wie den Schaltflächen _Gefällt mir_ und _Teilen_
- Belästigungen: Sperren von störenden Web-Elementen wie Cookie-Hinweisen, Widgets von Drittanbietern oder Popups auf der Seite
- Sicherheit: Blockieren von Anfragen an Phishing-Websites und schädliche Websites
- Sonstiges: Enthält verschiedene Filter, die nicht in die Hauptkategorien passen
- Sprachspezifisch: Sperren von Werbung auf Websites in bestimmten Sprachen
- Benutzerdefiniert: Ermöglicht es, eigene Filter aus einer lokalen Datei oder einer URL hinzuzufügen

Sie können entweder einzelne Filter oder ganze Gruppen auf einmal aktivieren.

![Sicherheitsfilter \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/security_filters.png)

## Benutzerdefinierte Filter {#custom-filters}

Während die Funktionen der anderen Filtergruppen weitgehend selbsterklärend sind, kann die Gruppe _Benutzerdefiniert_ Fragen aufwerfen.

![Benutzerdefinierte Filter \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/custom_filters.png)

In diesem Tab können Sie Filter hinzufügen, die standardmäßig nicht in der Erweiterung enthalten sind. Es gibt viele [öffentlich zugängliche Filter im Internet](https://filterlists.com). Außerdem können Sie Ihre eigenen Filter erstellen und hinzufügen. Sie können beliebige Filter kombinieren und die Werbeblockierung nach Ihren Wünschen anpassen.

Um einen Filter hinzuzufügen, klicken Sie einfach auf _Eigenen Filter hinzufügen_, geben Sie die URL oder den Dateipfad des Filters ein, den Sie hinzufügen möchten, und klicken Sie auf _Weiter_.

![Eigenen Filter hinzufügen \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/add_filter.png)

Benutzerdefinierte Filter werden eigenständig aktualisiert, sodass Ihr Schutz stets wirksam und auf dem neuesten Stand bleibt, ohne dass eine Aktualisierung der Erweiterung erforderlich ist.

## Benutzerregeln {#user-rules}

_Benutzerregeln_ ist ein weiteres Tool, mit dem Sie die Blockierung von Werbung individuell anpassen können.

![Benutzerregeln \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/user_rules.png)

Es gibt mehrere Möglichkeiten, neue Regeln hinzuzufügen. Am einfachsten ist es, eine Regel einzugeben, aber dafür sind Kenntnisse der [Regelsyntax](/general/ad-filtering/create-own-filters) erforderlich.

Sie können auch eine fertige Filterliste aus einer Textdatei importieren. **Achten Sie darauf, dass die einzelnen Regeln durch Zeilenumbrüche voneinander getrennt sind.**

:::note

Das Importieren einer direkt verwendbaren Filterliste erfolgt am besten im Tab _Benutzerdefinierte Filter_.

:::

Sie können Ihre eigenen Filterregeln exportieren. Diese Option eignet sich gut, um die Liste der Regeln zwischen Browsern oder Geräten zu übertragen.

Wenn Sie eine Website zur _Zulassungsliste_ hinzufügen oder mithilfe des Assistenten ein Element auf einer Seite ausblenden, wird die entsprechende Regel automatisch unter _Benutzerregeln_ gespeichert.

## Positivliste {#allowlist}

Mit der _Zulassungsliste_ können Sie bestimmte Websites von der Filterung ausnehmen. Keine der Sperrregeln gilt für die Websites in dieser Liste.

![Zulassungsliste \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/allowlist.png)

Die _Zulassungsliste_ kann auch umgekehrt verwendet werden, sodass Sie Werbung überall zulassen können, außer auf den Websites, die dieser Liste hinzugefügt wurden. Öffnen Sie dazu die _Zusätzlichen Einstellungen_ und aktivieren Sie _Zulassungsliste umkehren_. Bevor die Funktion aktiviert wird, öffnet sich ein Bestätigungsdialog, in dem die Funktionsweise erläutert wird und eine versehentliche Aktivierung verhindert werden kann.

![Zulassungsliste umkehren \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/invert_allowlist_dialog.png)

Sie können auch bestehende Zulassungslisten importieren und exportieren. Das ist hilfreich, wenn Sie in allen Ihren Browsern dieselben Regeln anwenden möchten.
