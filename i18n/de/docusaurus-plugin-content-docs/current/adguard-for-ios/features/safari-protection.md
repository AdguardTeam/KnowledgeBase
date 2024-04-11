---
title: Safari protection
sidebar_position: 1
---

:::info

This article is about AdGuard for iOS, a multifunctional ad blocker that protects your device at the system level. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

### Content blockers {#content-blockers}

Inhaltsblocker dienen als „Container“ für Filterregeln, die die eigentliche Aufgabe des Blockierens von Werbung und Tracking übernehmen. AdGuard für iOS enthält sechs Inhaltsblocker: General, Privacy, Social, Security, Custom und Other. Zuvor erlaubte Apple nur, dass jeder Inhaltsblocker maximal 50.000 Filterregeln enthält, aber mit der Veröffentlichung von iOS 15 wurde die Obergrenze auf 150.000 Regeln angehoben.

All content blockers, their statuses, which thematic filters they currently include, and a total number of used filtering rules can be found on the respective screen in _Advanced settings_ (tap the gear icon at the bottom right → _General_ → _Advanced settings_ → _Content blockers_).

![Content blockers \*mobile\_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/content_blockers_en.jpeg)

:::tip

Lassen Sie alle Inhaltsblocker aktiviert, um die beste Filterqualität zu erzielen.

:::

### Filters {#filters}

Die Funktion von Inhaltsblockern basiert auf Filtern, die manchmal auch als Filterlisten bezeichnet werden. Jeder Filter ist eine Liste von Filterregeln. Wenn Sie beim Surfen einen Werbeblocker aktiviert haben, überprüft dieser ständig die besuchten Seiten und deren Elemente anhand dieser Filterregeln und blockiert alles, was diesen Regeln entspricht. Es werden Regeln entwickelt, um Werbung und Tracker zu blockieren.

Alle Filter sind in thematische Kategorien eingeteilt. To see the full list of these categories (not to be confused with content blockers), open the _Protection_ section by tapping the shield icon, then go to _Safari protection_ → _Filters_.

![Filter groups \*mobile\_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/filters_group_en.jpeg)

Es gibt acht davon. Jede Kategorie vereint mehrere Filter, die einem gemeinsamen Zweck dienen, z. B. dem Blockieren von Werbung, Social-Media-Widgets, Cookie-Hinweisen und dem Schutz vor Online-Betrug. To decide which filters suit your needs, read their descriptions and navigate by the labels (`ads`, `privacy`, `recommended`, etc.).

:::note

Viele aktivierte Filter sind keine Garantie dafür, dass es weniger Werbung geben wird. Eine große Anzahl gleichzeitig aktivierter Filter mindert die Qualität der Werbeblockierung.

:::

Die Kategorie „Custom” ist standardmäßig leer, damit die Benutzer:innen dort ihre Filter per URL hinzufügen können. You can find filters on the Internet or even try to [create one by yourself](/general/ad-filtering/create-own-filters).

### User rules {#user-rules}

Here you can add new rules — either by entering them manually, or by using [the AdGuard manual blocking tool in Safari](#assistant). Mit diesem Tool können Sie die Safari-Filterung anpassen, ohne eine ganze Filterliste hinzufügen zu müssen.

Learn [how to create your own ad filters](/general/ad-filtering/create-own-filters). Bitte beachten Sie aber, dass viele von ihnen in Safari unter iOS nicht funktionieren.

![User rules screen \*mobile\_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/user_rules_en.jpeg)

### Allowlist {#allowlist}

The third section of the _Safari protection_ screen. Wenn Sie das Blockieren von Werbung auf einer bestimmten Website deaktivieren möchten, hilft Ihnen die Positivliste weiter. Damit können Sie Domains und Subdomains zu den Ausschlüssen hinzufügen. AdGuard für iOS verfügt über eine Import-/Exportfunktion, so dass die Positivliste von einem Gerät einfach auf ein anderes übertragen werden kann.
