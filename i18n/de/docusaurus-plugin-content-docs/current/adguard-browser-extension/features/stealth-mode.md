---
title: Tracking-Schutz (Privatsphäre)
sidebar_position: 3
---

:::info

In diesem Artikel geht es um die AdGuard Browsererweiterung, die nur Ihren Browser schützt. Um Ihr gesamtes Gerät zu schützen, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

Das Ziel des _Tracking-Schutzes_ ist es, Ihre sensiblen persönlichen Daten vor Online-Trackern und Betrügern zu schützen. Es gibt geringfügige Unterschiede bei den Tracking-Schutzfunktionen zwischen Chromium-basierten Browsern, die MV3 unterstützen, und Nicht-Chromium-Browsern, die MV2 unterstützen.

![Tracking-Schutz in Chromium-basierten Browsern \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_mv3_trackingProtection.png)

_Tracking-Schutz_ in Chromium-basierten Browsern

_Tracking-Schutz_ verhindert, dass Websites die Suchanfrage einsehen können, mit der Sie sie im Internet gefunden haben — es werden automatisch Cookies von Drittanbietern und Websites gelöscht und vieles mehr. Alle diese Funktionen werden in einem [separaten Artikel](/general/stealth-mode) beschrieben.

:::note

Browsererweiterungen sind auf einen bestimmten Browser beschränkt und unterliegen dessen technischen Beschränkungen. Daher können sie nicht alle Tracking-Schutzfunktionen bieten, die in vollwertigen Werbeblocker-Apps zur Verfügung stehen.

:::

:::caution

In der AdGuard Browser-Erweiterung funktioniert die Option _WebRTC blockieren_ global — sie blockiert oder erlaubt WebRTC für alle Websites. Dieses Verhalten lässt sich nicht für jede Website einzeln steuern. Ausnahmeregeln wie `@@||example.com^$stealth=webrtc` haben in der Browsererweiterung keine Wirkung, da die Option `webrtc` nicht zu den [unterstützten Optionen für den Modifikator `$stealth`](/general/ad-filtering/create-own-filters#stealth-modifier) gehört. Wenn Sie WebRTC-Einstellungen für einzelne Websites vornehmen möchten, nutzen Sie die vollwertige App AdGuard für Windows, Mac oder Android.

:::

## Fingerprinting blockieren {#fingerprinting}

Ab Version 5.6 enthält der Bereich _Allgemein_ des _Tracking-Schutzes_ die Option _Fingerprinting blockieren_. Sie verändert leicht die Bilder, die Websites aus einem Canvas auslesen, sodass Websites diese nicht verwenden können, um Ihren Browser und Ihr Gerät zu identifizieren. Ein [separater Artikel](/general/stealth-mode#fingerprinting) beschreibt, wie dies funktioniert.

Die Option ist standardmäßig deaktiviert. Sie funktioniert nur, wenn der AdGuard-Schutz und der _Tracking-Schutz_ aktiviert sind. Änderungen an der Option, der Positivliste und den Benutzerregeln gelten für Seiten, die Sie danach öffnen oder neu laden.

_Fingerprinting blockieren_ ist in allen Browsern verfügbar, die von der AdGuard Browsererweiterung unterstützt werden, einschließlich Firefox für Android. Wie früh der Schutz einsetzt, hängt vom Browser ab:

- In der [MV3-Version](/adguard-browser-extension/mv3-version) der Erweiterung und in Firefox 128 oder neuer startet der Schutz vor den Skripten der Website selbst.
- In der MV2-Version für Chromium-basierte Browser kann der Schutz auf manchen Seiten zu spät starten, sodass eine Website das Originalbild auslesen kann.
- In Firefox-Versionen vor 128 startet der Schutz vor den Skripten der Website selbst, außer auf Websites mit einer strengen Content Security Policy: Dort kann er zu spät oder gar nicht starten.

In der MV3-Version erfordert _Fingerprinting blockieren_ dieselbe Browsereinstellung wie benutzerdefinierte Filter: _Benutzerskripte zulassen_ oder _Entwicklermodus_ in Chrome-Versionen vor 138. Solange die Option aktiviert und die Einstellung deaktiviert ist, zeigt AdGuard eine Erinnerung unter der Option an. Erfahren Sie, [wie Sie die Einstellung aktivieren](/adguard-browser-extension/user-scripts-api). Kehren Sie anschließend zur Seite _Tracking-Schutz_ in den AdGuard-Einstellungen zurück: Sie müssen die Option nicht aus- und wieder einschalten.

In privaten Fenstern funktioniert der Schutz nur, wenn Sie AdGuard erlauben, dort ausgeführt zu werden.

Der Schutz ist auf Websites in der [Positivliste](/adguard-browser-extension/features/filters#allowlist) deaktiviert. Wenn _Positivliste invertieren_ aktiviert ist, funktioniert er nur auf Websites aus der Liste. Um nur _Fingerprinting blockieren_ für eine Website zu deaktivieren und andere Funktionen des _Tracking-Schutzes_ beizubehalten, fügen Sie eine Benutzerregel wie `@@||example.com^$stealth=fingerprinting` hinzu. Erfahren Sie mehr über den [Modifikator `$stealth`](/general/ad-filtering/create-own-filters#stealth-modifier) und seine [Einschränkungen](/general/ad-filtering/create-own-filters#stealth-modifier-limitations).

In Firefox weiß ein Frame von einer anderen Website, wie etwa ein eingebettetes Widget, möglicherweise nicht, auf welcher Seite er sich befindet: immer in Versionen vor 148 und in neueren Versionen, wenn die Seite ihre Adresse vor dem Frame verbirgt. Ein solcher Frame erhält auf jeder Website, die ihn einbettet, dasselbe Ergebnis, und die Positivliste deaktiviert den Schutz darin nicht. Um den Schutz in einem solchen Frame zu deaktivieren, fügen Sie eine Regel für die Domain des Frames hinzu, zum Beispiel `@@||widget.example.com^$stealth=fingerprinting`.
