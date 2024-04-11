---
title: DNS-Schutz
sidebar_position: 2
---

:::info

This article is about AdGuard for iOS, a multifunctional ad blocker that protects your device at the system level. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

[DNS protection module](https://adguard-dns.io/kb/general/dns-filtering/) enhances your privacy by encrypting your DNS traffic. Im Gegensatz zum Blockieren von Inhalten in Safari funktioniert der DNS-Schutz systemweit, also über Safari hinaus, in Apps und anderen Browsern. Sie müssen dieses Modul erst aktivieren, bevor Sie es verwenden können. You can do this on the home screen by tapping the shield icon at the top of the screen, or by going to the _Protection_ → _DNS protection_ tab.

:::note

Um die DNS-Einstellungen verwalten zu können, muss für die AdGuard-Apps ein lokales VPN eingerichtet werden. Ihr Datenverkehr wird nicht über einen externen Server geleitet. Dennoch werden Sie vom System aufgefordert, die Zugriffsberechtigung zu bestätigen.

:::

### DNS implementation {#dns-implementation}

![DNS implementation screen \*mobile\_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/implementation_en.jpeg)

In diesem Abschnitt gibt es zwei Optionen: AdGuard und Nativ. Im Grunde sind dies zwei Methoden zur Einrichtung von DNS.

Bei der nativen Implementierung wird das DNS vom System und nicht von der App verwaltet. Das bedeutet, dass AdGuard kein lokales VPN einrichten muss. Leider können Sie damit die Systembeschränkungen nicht umgehen und AdGuard zusammen mit anderen VPN-basierten Apps verwenden. Bei aktiviertem VPN wird das native DNS ignoriert. Consequently, you won't be able to filter traffic locally or to use our brand new [DNS-over-QUIC protocol (DoQ)](https://adguard.com/en/blog/dns-over-quic.html).

### DNS servers {#dns-servers}

The next section you'll see on the DNS Protection screen is DNS server. Hier werden der aktuell ausgewählte DNS-Server und die Verschlüsselungsart angezeigt. Um eine der beiden Optionen zu ändern, tippen Sie auf die Schaltfläche, um den Bildschirm „DNS-Server” aufzurufen.

![DNS servers \*mobile\_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/dns_server_en.jpeg)

Die Server unterscheiden sich durch ihre Geschwindigkeit, das verwendete Protokoll, die Vertrauenswürdigkeit, die Protokollierungspolitik usw. Standardmäßig schlägt AdGuard mehrere DNS-Server aus den beliebtesten vor (einschließlich AdGuard DNS). Tippen Sie auf eine beliebige Option, um die Verschlüsselungsart zu ändern (sofern der Eigentümer des Servers eine solche Option anbietet) oder um die Homepage des Servers anzuzeigen. We added labels such as `No logging policy`, `Ad blocking`, `Security` to help you make a choice.

Darüber hinaus gibt es am unteren Rand des Bildschirms die Möglichkeit, einen benutzerdefinierten DNS-Server hinzuzufügen. Es werden reguläre, DNSCrypt-, DNS-over-HTTPS-, DNS-over-TLS- und DNS-over-QUIC-Server unterstützt.

### Network settings {#network-settings}

![Network settings screen \*mobile\_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/network_settings_en.jpeg)

Die Benutzer:innen können ihre DNS-Sicherheit auch im Bereich „Netzwerk-Einstellungen” festlegen. _Filter mobile data_ and _Filter Wi-Fi_ enable or disable DNS protection for the respective network types. Further down, at _Wi-Fi exceptions_, you can exclude particular Wi-Fi networks from DNS protection (for example, you might want to exclude your home network if you use [AdGuard Home](https://adguard.com/adguard-home/overview.html)).

### DNS filtering {#dns-filtering}

Mit der DNS-Filterung können Sie Ihren DNS-Verkehr anpassen, indem Sie AdGuard DNS filter aktivieren, benutzerdefinierte DNS-Filter hinzufügen und die Sperr-/Positivliste verwenden.

So finden Sie diese Funktion:

_Protection_ (the shield icon in the bottom menu bar) → _DNS protection_ → _DNS filtering_

![DNS filtering screen \*mobile\_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/dns_filtering_en.jpeg)

#### DNS filters {#dns-filters}

Similar to filters that work in Safari, DNS filters are sets of rules written according to special [syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/). AdGuard überwacht Ihren DNS-Verkehr und blockiert Anfragen, die einer oder mehreren Regeln entsprechen. You can use filters such as [AdGuard DNS filter](https://github.com/AdguardTeam/AdguardSDNSFilter) or add hosts files as filters. Es können mehrere Filter gleichzeitig hinzugefügt werden. To know how to do it, get acquainted with [this exhaustive manual](adguard-for-ios/solving-problems/system-wide-filtering).

#### Allowlist and Blocklist {#allowlist-blocklist}

Zusätzlich zu den DNS-Filtern können Sie die DNS-Filterung gezielt beeinflussen, indem Sie einzelne Domains zur Sperrliste oder zur Positivliste hinzufügen. Die Sperrliste unterstützt sogar dieselbe DNS-Syntax, und beide können importiert und exportiert werden, genau wie die Positivliste bei der Inhaltsblockierung von Safari.
