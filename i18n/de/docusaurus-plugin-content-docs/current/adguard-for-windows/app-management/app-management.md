---
title: App-Verwaltung
sidebar_position: 1
---

Im Abschnitt _App-Verwaltung_ können Sie die Routing- und Filtereinstellungen für alle auf Ihrem Gerät installierten Apps verwalten.

Sobald AdGuard erkennt, dass eine App mit dem Internet verbunden ist, wird sie automatisch zur _App-Verwaltung_ hinzugefügt und ihr Datenverkehr wird über AdGuard geleitet.

Standardmäßig filtert AdGuard den gesamten Datenverkehr, aber Sie können auswählen, was ausgeschlossen werden soll.

AdGuard filtert auch den über HTTPS geleiteten Datenverkehr, da die meisten Websites heutzutage HTTPS verwenden. Dies ist besonders wichtig für das Blockieren von Werbung auf Websites wie youtube.com, facebook.com und x.com, bei denen es ohne HTTPS-Filterung unmöglich ist, Werbung zu entfernen.

Wenn Routing und Filterung für eine App aktiviert sind, werden die Symbole unter jeder App grün angezeigt.

Sie können die Einstellungen unverändert lassen, sowohl das Filtern als auch das Routing deaktivieren oder sie für jede App manuell anpassen. Sie können zudem auf die Statistiken der App zugreifen.

![App stats \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/app_management/stats_app.png)

## Wie App-Filterung und Routing in AdGuard für Windows v8.0 funktionieren

AdGuard für Windows v8.0 führt eine aktualisierte Logik für die Verwaltung von Apps ein. Es hilft, Kompatibilitätsprobleme zu vermeiden, während Sie weiterhin die Kontrolle darüber behalten, welche Apps gefiltert werden. Sehen wir uns an, wie es funktioniert.

Es gibt „problemlose“ und „problematische“ Apps. Einige Apps gelten als „problematisch“ und funktionieren möglicherweise nicht richtig, wenn deren Datenverkehr über AdGuard geleitet wird. Dies kann durch Funktionen wie HTTPS-Interzeption oder Proxying verursacht werden.

Um zu vermeiden, dass Apps direkt nach der Installation beeinträchtigt werden, filtert AdGuard nicht alles wahllos. Stattdessen basiert es auf einer Kompatibilitätsliste — einer Reihe von Apps, von denen bekannt ist, dass sie mit aktivierter Filterung korrekt funktionieren.

:::note

„Filtert nicht alles“ bedeutet nicht „filtert gar nichts“. Vertrauenswürdige Apps (wie Browser) werden immer gefiltert.

:::

Jede App hat drei unabhängige Verarbeitungsebenen: Datenverkehrsweiterleitung über AdGuard, Filterung (Blockieren von Werbung und Trackern) und HTTPS-Filterung (Abfangen von verschlüsseltem Datenverkehr).

Diese werden von drei Quellen bestimmt:

- _Kompatibilitätsliste_

  Apps, die von unserem Team getestet wurden und nachweislich korrekt mit der Filterung funktionieren.
  Diese Liste wird durch interne Tests und Nutzerberichte im [dedizierten Repository zur Auflistung von AdGuard-Kompatibilitätsproblemen](https://github.com/AdguardTeam/CompatibilityIssues) aktualisiert.

- _Ausschlusslisten_

  Separate Listen für Routing, Filterung und HTTPS-Filterung. Dazu gehören Apps, von denen bekannt ist, dass sie beim Filtern brechen.

- _Unbekannte Apps filtern_

  Diese Einstellung legt fest, wie alle anderen Apps (die in keiner Liste enthalten sind) behandelt werden.

:::info

Die Kompatibilitätslisten werden ständig aktualisiert — und Sie können dazu beitragen, sie zu verbessern. Wenn Sie feststellen, dass eine App mit aktivierter Filterung nicht korrekt funktioniert, **melden Sie dies auf [GitHub](https://github.com/AdguardTeam/CompatibilityIssues)** oder kontaktieren Sie den Support über die App. Ihr Feedback hilft dabei, AdGuard für alle zu verbessern.

:::

## Unbekannte Apps filtern

![Unbekannte Apps filtern \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/app_management/app-management.png)

Die Einstellung _Unbekannte Apps filtern_ ist standardmäßig aktiviert und bestimmt, wie AdGuard neue Apps behandelt, die noch nicht in den Kompatibilitäts- oder Ausschlusslisten enthalten sind

Wenn diese Funktion aktiviert ist, wird der App-Datenverkehr über AdGuard geleitet, es werden reguläre Filter angewendet und **die HTTPS-Filterung wird NICHT automatisch aktiviert**. Dies ist beabsichtigt: Die HTTPS-Interzeption ist der sensibelste Teil der Verkehrsverarbeitung und kann das Verhalten der App beeinflussen.

Wenn diese Option deaktiviert ist, werden neue Apps nicht von AdGuard verarbeitet. Sie müssen das Routing für diese Apps manuell konfigurieren.

Hier ist ein kurzer Überblick darüber, wie sich verschiedene App-Kategorien abhängig von dieser Einstellung verhalten:

| App-Kategorie                                                                                    | Aktiviert (Standard)                     | Deaktiviert                                                     |
| ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------- | --------------------------------------------------------------- |
| Kompatibel oder ohne Probleme (z. B. Browser) | · Routing ✅ <br /> · Filterung ✅ <br /> · HTTPS-Filterung ✅ | Gleiches Verhalten – hängt nicht vom Umschalten ab              |
| Problematisch (Ausschlusslisten, Filterung können Probleme verursachen)       | · Routing ❌ <br /> · Filterung ❌ <br /> · HTTPS-Filterung ❌ | Gleiches Verhalten – hängt nicht vom Umschalten ab              |
| Sonstiges / (neu erkannt, unbekannt, nicht in den Listen aufgeführt)          | · Routing ✅ <br /> · Filterung ✅ <br /> · HTTPS-Filterung ❌ | Wird nicht über AdGuard geleitet, muss manuell aktiviert werden |

:::info Was beim Zurücksetzen passiert

Wenn Sie auf **Auf Standardeinstellungen zurücksetzen** klicken, passieren zwei Dinge:

1. Alle app-spezifischen Berechtigungen sind gelöscht (auf „nicht konfiguriert“ gesetzt).
2. Vordefinierte Regeln werden auf bekannte sichere Apps (z. B. Browser) angewendet, einschließlich HTTPS-Filterung.

:::
