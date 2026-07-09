---
title: Mögliche DNS-Lecks
sidebar_position: 10
---

:::info

Dieser Artikel behandelt AdGuard für Windows, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

AdGuard für Windows ermöglicht die Angabe einer DNS-Serveradresse zur Auflösung von Anfragen anstelle des System-DNS-Servers, der von Ihrem ISP bereitgestellt wird, sofern dieser nicht in den Systemeinstellungen überschrieben wurde. Die Verwendung eines nicht standardmäßigen DNS-Servers kann Ihren DNS-Verkehr vor dem Abfangen durch den ISP schützen. Außerdem erhalten Sie durch die Wahl eines verschlüsselten oder filternden DNS-Servers eine weitere Schutzschicht gegen bösartige Akteure und lästige Werbung.

Viele schätzen den DNS-Schutz von AdGuard für Windows. Einige stoßen jedoch auf das folgende Problem: Eine Überprüfung auf einer Website wie https://ipleak.net/ zeigt, dass die Anfragen vom Standard-DNS-Server statt vom ausgewählten Server bearbeitet werden. In diesem Artikel erfahren Sie, warum das so ist und wie Sie es vermeiden können.

## Bootstrap-DNS-Adresse

Die DNS-Serveradressen können als IPs oder als Domainnamen geschrieben werden. Im Falle von IP-Adressen gibt es keine Schwierigkeiten: AdGuard leitet die DNS-Anfrage direkt an den im DNS-Schutzmodul angegebenen Server weiter. Verschlüsselte DNS-Serveradressen, wie DoT oder DoH, werden jedoch meist als Domainnamen geschrieben. In diesem Fall sendet AdGuard zunächst eine DNS-Anfrage an die Bootstrap-Adresse, die standardmäßig ein System-DNS-Server ist, um die verschlüsselte DNS-Serveradresse aufzulösen. Diese Verbindung wird von den Kontrolldiensten als Offenlegung (Leck) wahrgenommen.

**Um diese Offenlegung zu verhindern:**

- Öffnen Sie *Erweiterten Einstellungen*
- Blättern Sie nach unten zum Abschnitt *Liste der benutzerdefinierten Bootstrap-Adressen*
- Geben Sie die benutzerdefinierte Bootstrap-Adresse im IP-Adressformat ein (Sie können [die Liste der bekannten DNS-Anbieter](https://adguard-dns.io/kb/general/dns-providers/) verwenden)
- Klicken Sie auf *Speichern*

## Fallback-DNS-Server

Es kann vorkommen, dass AdGuard den angegebenen Server nicht erreichen kann, weil die Internetverbindung zu schwach ist, die standardmäßig eingestellte Zeitüberschreitung abgelaufen ist oder es andere Probleme mit dem Server gibt. In diesem Fall wird eine Verbindung zum Fallback-Server hergestellt, der standardmäßig ein System-DNS-Server ist. Diese Verbindung wird vom Kontrolldienst ebenfalls als Offenlegung gewertet.

**Um diese Offenlegung zu verhindern:**

- Öffnen Sie *Erweiterten Einstellungen*
- Blättern Sie nach unten zum Abschnitt *Fallback-Server*
- Aktivieren Sie die Option *Benutzerdefinierte Server verwenden*
- Suchen Sie anschließend den Abschnitt *Liste der benutzerdefinierten Fallback-Server* und geben Sie die benutzerdefinierten Fallback-Server einzeln pro Zeile ein

oder

- Öffnen Sie *Erweiterten Einstellungen*
- Blättern Sie nach unten zum Abschnitt *Fallback-Server*
- Aktivieren Sie die Option *Keine Fallback-Server verwenden*

oder

- Öffnen Sie *Erweiterten Einstellungen*
- Blättern Sie nach unten zum Abschnitt *Zeitüberschreitung des DNS-Servers*
- Geben Sie eine beliebig große Zahl ein
