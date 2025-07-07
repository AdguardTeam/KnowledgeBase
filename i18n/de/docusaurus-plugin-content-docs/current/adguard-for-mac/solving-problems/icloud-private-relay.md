---
title: iCloud Privat-Relay und AdGuard
sidebar_position: 7
---

:::info

Dieser Artikel behandelt AdGuard für Mac, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie die App funktioniert, [laden Sie AdGuard für Mac herunter](https://agrd.io/download-kb-adblock)

:::

## Problembeschreibung

Standardmäßig verwendet AdGuard die „Standardroute“, die iCloud Privat-Relay deaktiviert.

Derzeit können AdGuard und iCloud Privat-Relay nicht gleichzeitig funktionieren. AdGuard kann keine Anzeigen blockieren, da iCloud Privat-Relay den Datenverkehr verschlüsselt, bevor AdGuard Netzwerkverbindungen filtern kann. Wenn iCloud Privat-Relay aktiv ist, wird jegliche Filterung (einschließlich lokaler Filterung) unmöglich. Daher kann AdGuard in Safari keinen Datenverkehr filtern oder eine DNS-Filterung durchführen. Dennoch filtert AdGuard immer noch den Datenverkehr in anderen Browsern. Um iCloud Privat-Relay weiterhin zu verwenden, sollten Sie [AdGuard für Safari](https://adguard.com/adguard-safari/overview.html) installieren.

Das Gleiche gilt für die Verwendung von VPN-Apps auf dem Mac: Sie müssen sich entscheiden, ob Sie iCloud Privat-Relay oder einen VPN-Dienst verwenden.

## Details

AdGuard für Mac verwendet jetzt die in macOS integrierte Socket-Filterung basierend auf der Netzwerkerweiterungs-API. Dieser neue und ziemlich fehlerhafte Mechanismus ersetzte gute alte Kernel-Erweiterungen. In den letzten 1,5 Jahren haben wir Apple mehr als 20 (!) Fehler bezüglich ihrer neuen Filtermethode gemeldet.

Die Netzwerkerweiterungs-API hat eine VPN-ähnliche Konfiguration mit einer Liste routenähnlicher Einträge. Auf Big Sur hat AdGuard „Split-Tunnel“-Regeln entwickelt, um die Erstellung der „Default Route“-Regel zu vermeiden, da diese bei frühen Big Sur-Versionen Probleme verursacht.

Auf Monterey wurde iCloud Privat-Relay eingeführt. Datenschutzfunktionen der Mail-App verwenden auch Privat-Relay-Server.

Infolgedessen kann AdGuard nicht mit iCloud Privat-Relay und den Datenschutzfunktionen der Mail-App zusammenarbeiten:

1. iCloud Privat-Relay wird auf Verbindungen auf Bibliotheksebene angewendet – bevor sie die Socket-Ebene erreichen, auf der AdGuard arbeitet.
2. iCloud Privat-Relay wird mit HTTP/3 CONNECT-Proxys implementiert.
3. Da AdGuard CONNECT HTTP/3-Anfragen noch nicht filtert, versucht es, HTTP/3-Proxy-Verbindungen auf HTTP/1.1 herunterzustufen, was zur Blockierung des iCloud Privat-Relay-Verkehrs führt.
4. Wenn Sie iCloud Privat-Relay verwenden und AdGuard in den Split-Tunnel“Modus schalten, können Sie keine Websites in Safari öffnen.
5. Um dieses Problem für Monterey zu umgehen, wenden wir die Regel „Standard-Route“ an. Wenn Privat-Relay diese Regel sieht, deaktiviert es sich automatisch. AdGuard funktioniert also nahtlos auf Monterey, aber iCloud Privat-Relay wird deaktiviert.

Die Option `network.extension.monterey.force.split.tunnel` stellt das „Big Sur“-Verhalten wieder her, aber diese Option kann den Zugriff auf Websites aufgrund von (3) und (4) unterbrechen. Wir suchen weiter nach einer Lösung für dieses Problem. Eine der Optionen ist die Implementierung der HTTP/3-Proxy-Filterung.

## Empfohlene Lösung

Wir empfehlen die Verwendung von AdGuard zusammen mit einem traditionelleren VPN-Dienst wie [AdGuard VPN](https://adguard-vpn.com/).

## Alternative Lösung

Sie können verhindern, dass AdGuard die „Standard-Route“ verwendet, indem Sie die „Standard-Route“ deaktivieren. Dies kann über Erweiterte Einstellungen → `network.extension.monterey.force.split.tunnel` erfolgen.

![Deaktivieren Sie die Standard-Route in den erweiterten Einstellungen *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/mac_adguard_advanced_settings.jpg)

Beachten Sie, dass Sie in diesem Fall mit den oben beschriebenen Problemen konfrontiert werden.
