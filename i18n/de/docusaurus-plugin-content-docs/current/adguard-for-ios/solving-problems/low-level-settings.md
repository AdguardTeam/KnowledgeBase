---
title: Leitfaden für Low-Level-Einstellungen
sidebar_position: 5
---

:::info

Dieser Artikel behandelt AdGuard für iOS, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

## So rufen Sie die Low-Level-Einstellungen auf

:::caution

Das Ändern von *Low-Level-Einstellungen* kann Probleme mit der Leistung von AdGuard verursachen, die Internetverbindung unterbrechen oder Ihre Sicherheit und Privatsphäre gefährden. Dieser Bereich sollte nur geöffnet werden, wenn Sie wissen, was Sie tun, oder wenn Sie von unserem Support-Team dazu aufgefordert wurden.

:::

To go to *Low-level settings*, tap the gear icon at the bottom right of the screen to open *Settings*. Wählen Sie den Bereich *Allgemein* und sktivieren Sie dann den Schalter *Erweiterter Modus*, woraufhin der Bereich *Erweiterte Einstellungen* angezeigt wird. Tippen Sie auf *Erweiterte Einstellungen*, um den Bereich *Low-Level-Einstellungen* zu erreichen.

## Low-Level-Einstellungen

### Tunnel-Modus

Es gibt zwei Haupttypen von Tunneln: *Split-Tunnel* und *Full-Tunnel*. Der *Split-Tunnel*-Modus sorgt für Kompatibilität von AdGuard und sogenannten „Personal VPN” Apps. Im *Full-Tunnel*-Modus kann kein anderes VPN gleichzeitig mit AdGuard zusammenarbeiten.

Es gibt eine Besonderheit des *Split-Tunnel*-Modus: Wenn der DNS-Proxy nicht gut funktioniert, z. B. wenn die Antwort vom AdGuard-DNS-Server nicht rechtzeitig zurückkommt, wird iOS ihn „umgehen” und den Datenverkehr über den DNS-Server umleiten, der in den iOS-Einstellungen angegeben ist. Während dieser Zeit wird keine Werbung blockiert und der DNS-Verkehr nicht verschlüsselt.

Im *Full-Tunnel*-Modus wird nur der in den AdGuard-Einstellungen angegebene DNS-Server verwendet. If it does not respond, the Internet will simply not work. Enabled *Full-Tunnel* mode may cause the incorrect performance of some programs (for instance, Facetime), and lead to problems with app updates.

Standardmäßig verwendet AdGuard den Modus *Split-Tunnel* als stabilste Option.

Es gibt auch einen zusätzlichen Modus namens *Full-Tunnel (ohne VPN-Symbol)*. Dies ist genau dasselbe wie der *Full-Tunnel*-Modus, aber er ist so eingestellt, dass das VPN-Symbol nicht in der Systemzeile angezeigt wird.

### Sperrmodus

In diesem Modus können Sie auswählen, wie AdGuard auf DNS-Anfragen reagieren soll, die blockiert werden sollen:

- Default — respond with zero IP address when blocked by adblock-style rules; respond with the IP address specified in the rule when blocked by /etc/hosts-style rules
- REFUSED — mit REFUSED-Code antworten
- NXDOMAIN — mit NXDOMAIN-Code antworten
- Unspecified IP — respond with zero IP address
- Benutzerdefinierte IP — mit einer manuell festgelegten IP-Adresse antworten

### IPv6 sperren

Wenn Sie den Schalter nach rechts schieben, wird das Sperren von IPv6-Anfragen (AAAA-Anfragen) aktiviert. DNS-Anfragen vom Typ AAAA werden nicht aufgelöst, so dass nur IPv4-Anfragen bearbeitet werden können.

### Gültigkeitsdauer der blockierten Antwort

Hier können Sie den Zeitraum festlegen, in dem ein Gerät die Antwort auf eine DNS-Anfrage zwischenspeichert. Während der angegebenen „Time to live“ (in Sekunden) kann die Anfrage aus dem Cache gelesen werden, ohne dass der DNS-Server erneut angefragt werden muss.

### Bootstrap-Server

Für DNS-over-HTTPS, DNS-over-TLS und DNS-over-QUIC ist ein Bootstrap-Server erforderlich, um die IP-Adresse des Haupt-DNS-Servers zu erhalten. Wenn nicht angegeben, wird der DNS-Server aus den iOS-Einstellungen als Bootstrap-Server verwendet.

### Fallback-Server

Hier können Sie einen alternativen Server angeben, an den eine Anfrage umgeleitet wird, wenn der Hauptserver nicht antwortet. Wenn nicht angegeben, wird der System-DNS-Server als Ersatz verwendet. Es ist auch möglich, `keine` anzugeben. In diesem Fall wird kein Fallback-Server festgelegt und nur der Haupt-DNS-Server verwendet.

### App im Hintergrund aktualisieren

Hier können Sie festlegen, wie oft die App im Hintergrund nach Filteraktualisierungen suchen soll. Bitte beachten Sie, dass die Prüfung auf Aktualisierungen nicht häufiger als in dem angegebenen Zeitraum durchgeführt wird, wobei die genauen Intervalle nicht unbedingt eingehalten werden.
