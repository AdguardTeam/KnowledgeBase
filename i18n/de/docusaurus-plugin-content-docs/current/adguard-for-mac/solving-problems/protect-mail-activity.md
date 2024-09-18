---
title: Mail-Aktivitäten und AdGuard schützen
sidebar_position: 8
---

:::info

Dieser Artikel behandelt AdGuard für Mac, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie die App funktioniert, [laden Sie AdGuard für Mac herunter](https://agrd.io/download-kb-adblock)

:::

## Kurzbeschreibung

Die Mail-App von Apple verwendet jetzt einen Proxy, um die IP-Adressen der Nutzer:innen zu verbergen, wenn Bilder aus E-Mails heruntergeladen werden.

![Mail-Datenschutz](https://cdn.adtidy.org/content/kb/ad_blocker/mac/mac_protectMailActivity.jpg)

Es funktioniert jedoch nicht, wenn eine VPN-Verbindung aktiv ist. Da AdGuard als VPN behandelt wird, werden Bilder nicht automatisch vorgeladen.

Apple erklärt dieses Problem [hier](https://support.apple.com/HT212797).

## Details

AdGuard für Mac verwendet jetzt die in macOS integrierte Socket-Filterung basierend auf der Netzwerkerweiterungs-API. Dieser neue und ziemlich fehlerhafte Mechanismus ersetzte gute alte Kernel-Erweiterungen. In den letzten 1,5 Jahren haben wir Apple mehr als 20 (!) Fehler bezüglich ihrer neuen Filtermethode gemeldet.

Die Netzwerkerweiterungs-API hat eine VPN-ähnliche Konfiguration mit einer Liste routenähnlicher Einträge. Auf Big Sur verwendete AdGuard „Split-Tunnel“-Regeln, um die Erstellung der „Standard-Routen“-Regel zu vermeiden, da diese bei frühen Big Sur-Versionen Probleme verursacht. Diese Probleme wurden in Monterey gelöst, also hindert uns nichts daran, die „Standard-Routen“-Regel zu verwenden.

Auf Monterey wurde iCloud Privat-Relay eingeführt. Die Datenschutzfunktionen von Mail-App verwenden auch Privat-Relay-Server.

Infolgedessen kann AdGuard nicht mit den Datenschutzfunktionen von iCloud Privat-Relay und der Mail-App zusammenarbeiten:

1. iCloud Privat-Relay wird auf Verbindungen auf Bibliotheksebene angewendet – bevor sie die Socket-Ebene erreichen, auf der AdGuard arbeitet.
2. iCloud Privat-Relay verwendet QUIC, das AdGuard nicht filtern kann, da HTTP/3-Filterung noch nicht verfügbar ist.
3. Folglich sperrt AdGuard QUIC, einschließlich des iCloud Privat-Relay-Verkehrs — andernfalls ist das Sperren von Werbung unmöglich.
4. Wenn Sie iCloud Privat-Relay verwenden und AdGuard in den „Split-Tunnel“-Modus schalten, können Sie keine Websites in Safari öffnen.
5. Um dieses Problem für Monterey zu umgehen, wenden wir die Regel „Standard-Route“ an. Wenn Privat-Relay diese Regel sieht, deaktiviert es sich automatisch. AdGuard funktioniert also nahtlos auf Monterey, aber iCloud Privat-Relay wird deaktiviert.

`network.extension.monterey.force.split.tunnel` stellt das „Big Sur“-Verhalten wieder her, aber diese Option kann den Zugriff auf Websites aufgrund von (3) und (4) unterbrechen. Wir suchen weiter nach einer Lösung für dieses Problem. Eine der Optionen ist die Implementierung der HTTP/3-Filterung.

## Empfohlene Lösung

An dieser Stelle empfehlen wir die Verwendung eines herkömmlichen VPN-Dienstes, wie [AdGuard VPN](https://adguard-vpn.com/), anstelle der neueren Apple-Datenschutzfunktionen.
