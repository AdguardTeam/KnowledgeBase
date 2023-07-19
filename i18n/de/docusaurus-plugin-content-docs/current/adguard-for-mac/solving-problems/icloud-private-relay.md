---
title: iCloud Private Relay und AdGuard
sidebar_position: 7
---

:::Info

This article covers AdGuard for Mac, a multifunctional ad blocker that protects your device at the system level. To see how it works, [download the AdGuard app](https://adguard.com/download.html?auto=true)

:::

## Problembeschreibung

Standardmäßig verwendet AdGuard die „Standard-Route“, die iCloud Private Relay deaktiviert.

Derzeit können AdGuard und iCloud Private Relay nicht gleichzeitig funktionieren. AdGuard kann keine Anzeigen blockieren, da iCloud Private Relay den Datenverkehr verschlüsselt, bevor AdGuard Netzwerkverbindungen filtern kann.  Wenn iCloud Private Relay aktiv ist, wird jegliche Filterung (einschließlich lokaler Filterung) unmöglich. Daher kann AdGuard in Safari keinen Datenverkehr filtern oder eine DNS-Filterung durchführen. Dennoch filtert AdGuard immer noch den Datenverkehr in anderen Browsern. Um iCloud Private Relay weiterhin zu verwenden, sollten Sie [AdGuard für Safari](https://adguard.com/adguard-safari/overview.html) installieren.

Das Gleiche gilt für die Verwendung von VPN-Apps auf dem Mac: Sie müssen sich entscheiden, ob Sie iCloud Private Relay oder einen VPN-Dienst verwenden.

## Details

AdGuard für Mac verwendet jetzt die in macOS integrierte Socket-Filterung basierend auf der Netzwerkerweiterungs-API. Dieser neue und ziemlich fehlerhafte Mechanismus ersetzte gute alte Kernel-Erweiterungen. In den letzten 1,5 Jahren haben wir Apple mehr als 20 (!) Fehler bezüglich ihrer neuen Filtermethode gemeldet.

Die Netzwerkerweiterungs-API hat eine VPN-ähnliche Konfiguration mit einer Liste routenähnlicher Einträge. Auf Big Sur hat AdGuard „Split-Tunnel“-Regeln entwickelt, um die Erstellung der „Default Route“-Regel zu vermeiden, da diese bei frühen Big Sur-Versionen Probleme verursacht.

Auf Monterey wurde iCloud Private Relay eingeführt. Datenschutzfunktionen der Mail-App verwenden auch private Relay-Server.

Infolgedessen kann AdGuard nicht mit iCloud Private Relay und den Datenschutzfunktionen der Mail-App zusammenarbeiten:
1. iCloud Private Relay wird auf Verbindungen auf Bibliotheksebene angewendet – bevor sie die Socket-Ebene erreichen, auf der AdGuard arbeitet.
2. iCloud Private Relay verwendet QUIC, das AdGuard in gefilterten Apps nicht filtern kann, da die HTTP/3-Filterung noch nicht verfügbar ist.
3. Da AdGuard QUIC blockiert, einschließlich iCloud Private Relay-Datenverkehr, ist eine Anzeigenblockierung ansonsten nicht möglich.
4. Wenn Sie iCloud Private Relay verwenden und AdGuard in den „Split-Tunnel“-Modus schalten, können Sie keine Websites in Safari öffnen.
5. Um dieses Problem für Monterey zu umgehen, wenden wir die Regel „Standard-Route“ an. Wenn Private Relay diese Regel sieht, deaktiviert es sich automatisch. AdGuard funktioniert also nahtlos auf Monterey, aber iCloud Private Relay wird deaktiviert.

`network.extension.monterey.force.split.tunnel` stellt das „Big Sur“-Verhalten wieder her, aber diese Option kann den Zugriff auf Websites aufgrund von (3) und (4) unterbrechen. Wir suchen weiter nach einer Lösung für dieses Problem. Eine der Optionen ist die Implementierung der HTTP/3-Filterung.

## Empfohlene Lösung

Wir empfehlen die Verwendung von AdGuard zusammen mit einem traditionelleren VPN-Dienst wie [AdGuard VPN](https://adguard-vpn.com/).

## Alternative Lösung

Sie können verhindern, dass AdGuard die „Standard-Route“ verwendet, indem Sie die „Standard-Route“ deaktivieren.  Dies kann über Erweiterte Einstellungen → `network.extension.monterey.force.split.tunnel` erfolgen.

![Deaktivieren Sie die Standard-Route in den erweiterten Einstellungen *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/mac_adguard_advanced_settings.jpg)

Beachten Sie, dass Sie in diesem Fall mit den oben beschriebenen Problemen konfrontiert werden.
