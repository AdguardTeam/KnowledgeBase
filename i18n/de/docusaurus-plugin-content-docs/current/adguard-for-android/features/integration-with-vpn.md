---
title: Integration mit AdGuard VPN
sidebar_position: 6
---

:::info

Dieser Artikel behandelt AdGuard für Android, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

AdGuard für Android erstellt ein lokales VPN, um den Datenverkehr zu filtern. Daher können andere VPN-Apps nicht genutzt werden, während AdGuard für Android ausgeführt wird. Die beiden Apps AdGuard und [AdGuard VPN](https://adguard-vpn.com/) verfügen jedoch über integrierte Modi, mit denen Sie sie gemeinsam nutzen können.

In diesem Modus fungiert AdGuard VPN als Outbound-Proxy-Server, über den AdGuard Werbeblocker ihren Datenverkehr leitet. Dadurch kann AdGuard eine VPN-Schnittstelle erstellen und Werbung und Tracker lokal blockieren, während AdGuard VPN den gesamten Datenverkehr über einen entfernten Server leitet.

Wenn Sie AdGuard VPN deaktivieren, wird AdGuard VPN nicht mehr als Outbound-Proxy verwendet. Wenn Sie AdGuard deaktivieren, leitet AdGuard VPN den Datenverkehr über seine eigene VPN-Schnittstelle.

Wenn Sie AdGuard Werbeblocker nutzen und AdGuard VPN installieren, wird die Werbeblocker-App dies erkennen und die _Integration mit AdGuard VPN_ automatisch aktivieren. Das Gleiche geschieht in umgekehrter Richtung. Beachten Sie, dass Sie bei aktivierter Integration die App-Ausschlüsse und die Verbindung zu DNS-Servern nicht über die AdGuard VPN-App verwalten können. Sie können Apps, die durch Ihren VPN-Tunnel geleitet werden sollen, über _Einstellungen_ → _Filterung_ → _Netzwerk_ → _Proxy_ → _Über Proxy geleitete Apps_ festlegen. Um einen DNS-Server auszuwählen, öffnen Sie AdGuard → _Schutz_ → _DNS-Schutz_ → _DNS-Server_.
