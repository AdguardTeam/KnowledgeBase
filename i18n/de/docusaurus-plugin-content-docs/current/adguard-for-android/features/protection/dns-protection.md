---
title: DNS-Schutz
sidebar_position: 4
---

:::info

Dieser Artikel behandelt AdGuard für Android, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

Sie können auf das DNS-Schutzmodul zugreifen, indem Sie auf den Tab _Schutz_ (zweites linkes Symbol unten auf dem Bildschirm) tippen und dann _DNS-Schutz_ auswählen.

:::tip

Die Funktionsweise des DNS-Schutzes ist anders als die normale Blockierung von Werbung und Trackern. You can [learn more about it and how it works from a dedicated article](https://adguard-dns.io/kb/general/dns-filtering/#how-does-dns-filtering-work)

:::

_DNS-Schutz_ ermöglicht das Filtern von DNS-Anfragen mit Hilfe eines ausgewählten DNS-Servers, DNS-Filtern und Benutzerregeln:

- Einige DNS-Server verfügen über Sperrlisten, mit denen DNS-Anfragen an potenziell schädliche Domains blockiert werden können

- Zusätzlich zu den DNS-Servern kann AdGuard mit Hilfe eines speziellen DNS-Filters DNS-Anfragen selbst filtern. Er enthält eine umfangreiche Liste von Werbe- und Tracking-Domains. Anfragen an diese Domains werden an einen Blackhole-Server umgeleitet

- Sie können Domains auch sperren und entsperren, indem Sie Benutzerregeln erstellen. Dazu sollten Sie unseren Artikel über [Syntax von DNS-Filterregeln](https://adguard-dns.io/kb/general/dns-filtering-syntax/) lesen

![DNS-Schutz \*mobile\_border](https://cdn.adtidy.org/blog/new/u8qtxdns_protection.png)

#### DNS-Server

In diesem Abschnitt können Sie einen DNS-Server auswählen, um DNS-Anfragen aufzulösen, Werbung und Tracker zu blockieren und den DNS-Datenverkehr zu verschlüsseln. Tippen Sie auf einen Server, um seine vollständige Beschreibung zu erfahren und ein Protokoll auszuwählen. Wenn Sie den gewünschten Server nicht gefunden haben, können Sie ihn manuell hinzufügen:

- Tippen Sie auf _DNS-Server hinzufügen_ und geben Sie eine oder mehrere Serveradressen ein

- Alternativ können Sie auch einen DNS-Server aus der [Liste der bekannten DNS-Anbieter](https://adguard-dns.io/kb/general/dns-providers/) auswählen und daneben auf _Zu AdGuard hinzufügen_ tippen

- Wenn Sie einen privaten AdGuard-DNS-Server verwenden, können Sie ihn über das [Dashboard](https://adguard-dns.io/dashboard/) zu AdGuard hinzufügen

Standardmäßig ist _Automatisches DNS_ ausgewählt. Es legt einen DNS-Server fest, der auf Ihren AdGuard- und Geräteeinstellungen basiert. Wenn Sie [Integration mit AdGuard VPN](/adguard-for-android/features/integration-with-vpn) oder einen anderen SOCKS5-Proxy aktiviert haben, wird eine Verbindung zu _AdGuard DNS ohne Filterung_ oder einem anderen von Ihnen angegebenen Server hergestellt. In allen anderen Fällen wird eine Verbindung mit dem DNS-Server hergestellt, der in Ihren Geräteeinstellungen ausgewählt wurde.

#### DNS-Filter

In diesem Abschnitt können Sie benutzerdefinierte DNS-Filter und DNS-Filterregeln hinzufügen. Weitere Filter finden Sie auf [filterlists.com](https://filterlists.com/).
