---
title: Mögliche DNS-Lecks
sidebar_position: 9
---

:::info

Dieser Artikel behandelt AdGuard für Windows, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

AdGuard for Windows allows users to specify a DNS server address to resolve queries instead of system DNS server, which is provided by your ISP if not overridden in the system settings. Using a non-default DNS server can safeguard your DNS traffic from the ISP’s interception. Moreover, by choosing an encrypted and/or filtering DNS server, you get another layer of protection against bad actors and annoying ads.

Many AdGuard for Windows users appreciate the DNS protection feature. But some of them encounter the following issue: a check on a website like https://ipleak.net/ shows that requests are handled by the default DNS server instead of the selected one. In this article we will tell you why this happens and how to avoid it.

## Bootstrap-DNS-Adresse

The DNS server addresses could be written as IPs or as domain names. Im Falle von IP-Adressen gibt es keine Schwierigkeiten: AdGuard leitet die DNS-Anfrage direkt an den im DNS-Schutzmodul angegebenen Server weiter. Verschlüsselte DNS-Serveradressen, wie DoT oder DoH, werden jedoch meist als Domainnamen geschrieben. In diesem Fall sendet AdGuard zunächst eine DNS-Anfrage an die Bootstrap-Adresse, die standardmäßig ein System-DNS-Server ist, um die verschlüsselte DNS-Serveradresse aufzulösen. Diese Verbindung wird von den Kontrolldiensten als Offenlegung (Leck) wahrgenommen.

**Um diese Offenlegung zu verhindern:**

- Öffnen Sie *Erweiterten Einstellungen*
- scroll down to the *List of custom bootstrap addresses* section
- Geben Sie die benutzerdefinierte Bootstrap-Adresse im IP-Adressformat ein (Sie können [die Liste der bekannten DNS-Anbieter](https://adguard-dns.io/kb/general/dns-providers/) verwenden)
- Klicken Sie auf *Speichern*

## Fallback-DNS-Server

It could happen that AdGuard cannot reach the specified server because of a weak internet connection, an expiration of timeout set by default or some server related issues. In diesem Fall wird eine Verbindung zum Fallback-Server hergestellt, der standardmäßig ein System-DNS-Server ist. Diese Verbindung wird vom Kontrolldienst ebenfalls als Offenlegung gewertet.

**Um diese Offenlegung zu verhindern:**

- Öffnen Sie *Erweiterten Einstellungen*
- scroll down to the *Fallback servers* section
- check the *Use custom servers* option
- then find the *List of custom fallback servers* section and enter the custom fallback servers one per line

or

- Öffnen Sie *Erweiterten Einstellungen*
- scroll down to the *Fallback servers* section
- check the *Don’t use fallback servers* option

or

- Öffnen Sie *Erweiterten Einstellungen*
- scroll down to the *DNS server timeout period* section
- enter an arbitrary large number
