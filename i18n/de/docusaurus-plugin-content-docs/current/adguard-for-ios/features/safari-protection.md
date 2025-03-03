---
title: Safari-Schutz
sidebar_position: 1
---

:::info

Dieser Artikel behandelt AdGuard für iOS, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

### Inhaltsblocker {#content-blockers}

Inhaltsblocker dienen als „Container“ für Filterregeln, die die eigentliche Aufgabe des Blockierens von Werbung und Tracking übernehmen. AdGuard für iOS enthält sechs Inhaltsblocker: General, Privacy, Social, Security, Custom und Other. Zuvor erlaubte Apple nur, dass jeder Inhaltsblocker maximal 50.000 Filterregeln enthält, aber mit der Veröffentlichung von iOS 15 wurde die Obergrenze auf 150.000 Regeln angehoben.

Alle Inhaltsblocker, ihr Status, die aktuell enthaltenen thematischen Filter und die Gesamtzahl der verwendeten Filterregeln finden Sie auf dem entsprechenden Bildschirm in den _Erweiterten Einstellungen_ (tippen Sie auf das Zahnradsymbol unten rechts → _Allgemein_ → _Erweiterte Einstellungen_ → _Inhaltsblocker_).

![Inhaltsblocker \*mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/content_blockers_en.jpeg)

:::tip

Lassen Sie alle Inhaltsblocker aktiviert, um die beste Filterqualität zu erzielen.

:::

### Filter {#filters}

Die Funktion von Inhaltsblockern basiert auf Filtern, die manchmal auch als Filterlisten bezeichnet werden. Jeder Filter ist eine Liste von Filterregeln. Wenn Sie beim Surfen einen Werbeblocker aktiviert haben, überprüft dieser ständig die besuchten Seiten und deren Elemente anhand dieser Filterregeln und blockiert alles, was diesen Regeln entspricht. Es werden Regeln entwickelt, um Werbung und Tracker zu blockieren.

Alle Filter sind in thematische Kategorien eingeteilt. Um die vollständige Liste dieser Kategorien anzuzeigen (nicht zu verwechseln mit Inhaltsblockern), öffnen Sie den Bereich _Schutz_, indem Sie auf das Schildsymbol tippen, und gehen Sie dann zu _Safari-Schutz_ → _Filter_.

![Filtergruppen \*mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/filters_group_en.jpeg)

Es gibt acht davon. Jede Kategorie vereint mehrere Filter, die einem gemeinsamen Zweck dienen, z. B. dem Blockieren von Werbung, Social-Media-Widgets, Cookie-Hinweisen und dem Schutz vor Online-Betrug. Um zu entscheiden, welche Filter Ihren Bedürfnissen entsprechen, lesen Sie die Beschreibungen und orientieren Sie sich an den Bezeichnungen („Werbung“, „Datenschutz“, „Empfohlen“ usw.).

:::note

Viele aktivierte Filter sind keine Garantie dafür, dass es weniger Werbung geben wird. Eine große Anzahl gleichzeitig aktivierter Filter mindert die Qualität der Werbeblockierung.

:::

Die Kategorie „Custom” ist standardmäßig leer, damit die Benutzer:innen dort ihre Filter per URL hinzufügen können. Sie können Filter im Internet finden oder sogar versuchen, [selbst einen zu erstellen](/general/ad-filtering/create-own-filters).

### Benutzerregeln {#user-rules}

Hier können Sie neue Regeln hinzufügen — entweder durch manuelle Eingabe oder über [das manuelle Blockierwerkzeug von AdGuard in Safari](#assistant). Mit diesem Tool können Sie die Safari-Filterung anpassen, ohne eine ganze Filterliste hinzufügen zu müssen.

Erfahren Sie [mehr über die Erstellung eigener Filter](/general/ad-filtering/create-own-filters). Bitte beachten Sie aber, dass viele von ihnen in Safari unter iOS nicht funktionieren.

![Bildschirm der Benutzerregeln \*mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/user_rules_en.jpeg)

### Positivliste {#allowlist}

Der dritte Abschnitt des Bildschirms _Safari-Schutz_. Wenn Sie das Blockieren von Werbung auf einer bestimmten Website deaktivieren möchten, hilft Ihnen die Positivliste weiter. Damit können Sie Domains und Subdomains zu den Ausschlüssen hinzufügen. AdGuard für iOS verfügt über eine Import-/Exportfunktion, so dass die Positivliste von einem Gerät einfach auf ein anderes übertragen werden kann.
