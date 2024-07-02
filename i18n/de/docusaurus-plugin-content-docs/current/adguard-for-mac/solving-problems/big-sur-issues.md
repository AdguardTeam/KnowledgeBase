---
title: Kompatibilitätsprobleme mit verschiedenen macOS-Versionen
sidebar_position: 4
---

:::info

Dieser Artikel behandelt AdGuard für Mac, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie die App funktioniert, [laden Sie AdGuard für Mac herunter](https://agrd.io/download-kb-adblock)

:::

## Aktuell bestehende Probleme

Jedes Jahr veröffentlicht Apple eine neue Version von macOS, die innovative Lösungen einführt und neue nützliche Funktionen hinzufügt. Einige von ihnen, wie Netzwerk-Erweiterungs API (Big Sur) oder iCloud Private Relay (Monterey), verursachen jedoch einige Probleme für viele Anwendungen, wobei AdGuard keine Ausnahme bildet. In diesem Artikel betrachten wir die bekannten Probleme, die für jede macOS-Version spezifisch sind, und auch die möglichen Lösungen.

### Monterey 12: derzeit bestehende Probleme

Diese Probleme wurden von Apple noch nicht oder nur teilweise behoben.

#### Kompatibilität mit iCloud Private Relay

Derzeit können AdGuard und iCloud Private Relay nicht gleichzeitig funktionieren. AdGuard kann keine Werbung blockieren, da iCloud Private Relay den Datenverkehr verschlüsselt, bevor AdGuard Netzwerkverbindungen filtern kann. Wenn iCloud Private Relay aktiv ist, wird jegliche Filterung (einschließlich lokaler Filterung) unmöglich. Daher kann AdGuard in Safari keinen Datenverkehr filtern oder eine DNS-Filterung durchführen. Aus diesem Grund verwendet AdGuard standardmäßig die „Standardroute“, die iCloud Private Relay deaktiviert.

Für ein tieferes Verständnis dieses Problems lesen Sie bitte [diesen Artikel](../icloud-private-relay).

**Empfohlene Lösung**

Wir empfehlen die Verwendung von AdGuard zusammen mit einem traditionelleren VPN-Dienst wie [AdGuard VPN](https://adguard-vpn.com/).

**Alternative Lösung**

Sie können verhindern, dass AdGuard die  „Standardroute“ verwendet, indem Sie sie deaktivieren. Dies kann über Erweiterte Einstellungen → `network.extension.monterey.force.split.tunnel` erfolgen. Beachten Sie, dass die Aktivierung dieser Einstellung zu den oben beschriebenen Problemen führt.

![Erweiterte Einstellungen *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/mac_adguard_advanced_settings.jpg)

#### Kompatibilität mit Protect Mail Activity

Die Mail-App von Apple verwendet jetzt einen Proxy, um die IP-Adressen der Nutzer:innen zu verbergen, wenn Bilder aus E-Mails heruntergeladen werden. Es funktioniert jedoch nicht, wenn eine VPN-Verbindung aktiv ist. Da AdGuard als VPN behandelt wird, werden Bilder nicht automatisch vorgeladen.

Für ein tieferes Verständnis dieses Problems lesen Sie bitte [diesen Artikel](../protect-mail-activity).

**Empfohlene Lösung**

At this point, we recommend using a more traditional VPN service, such as [AdGuard VPN](https://adguard-vpn.com/), instead of the newer Apple privacy features.

### Monterey 12, Big Sur 11.6 und höher: derzeit bestehende Probleme

Diese Probleme wurden von Apple noch nicht oder nur teilweise behoben.

#### Kompatibilität mit Cisco AnyConnect

AdGuard funktioniert nicht zusammen mit Cisco AnyConnect im Modus *Network Extension*. Sie müssen AdGuard in den Modus *Automatischer Proxy* schalten. Folgen Sie dazu [dieser Anleitung](#automatic-proxy).

#### Kompatibilität mit Flutter

Dieses Problem wurde in Flutter 2.2 behoben, das im Juni 2021 veröffentlicht wurde. Aber um das Problem für in Flutter entwickelte Anwendungen zu beheben, müssen Sie auf Aktualisierungen warten.

Wenn Sie Flutter zusammen mit AdGuard im Modus „Network Extension“ (oder einer anderen Anwendung vom Typ „Transparent Proxy“) in Monterey oder Big Sur verwenden, treten Probleme auf: Projekte lassen sich nicht öffnen, und Flutter ist praktisch nutzlos. Der Fehler wurde bereits an Apple gemeldet. In der Zwischenzeit können Sie diese vorübergehenden Lösungen verwenden:

1. Verwenden Sie AdGuard im Modus [Automatischer Proxy](#automatic-proxy).

1. Deaktivieren Sie SIP und schalten Sie AdGuard in den Kernel Extension Modus, wie [hier](#kernel-extension) erklärt.

#### VPN-Apps mit Legacy-API

Obwohl AdGuard in den Systemeinstellungen als VPN angezeigt wird, sollte es keine Konflikte verursachen, wenn es mit anderen VPN-basierten Apps zusammenarbeitet. Wenn Sie jedoch eine VPN-basierte App verwenden, die von außerhalb des App Store heruntergeladen wurde, besteht die Möglichkeit, dass sie die alte VPN-API verwendet, und Sie müssen sie von der Filterung ausschließen:

1. Öffnen Sie das AdGuard-Menü.
1. Wählen Sie *Einstellungen…*.
1. Wechseln Sie zum Tab *Netzwerk*.
1. Click the *Applications...* button.
1. Suchen Sie die App, die Sie ausschließen möchten, und deaktivieren Sie das Kontrollkästchen neben der App.

![Gefilterte Apps](https://cdn.adtidy.org/content/kb/ad_blocker/mac/legacy.jpg)

## Bereits behobene Probleme

Diese Probleme wurden inzwischen von Apple behoben, können aber noch in älteren Versionen von macOS Big Sur auftreten.

### Kompatibilität mit Little Snitch 5

Derzeit ist der Modus Network Extension in AdGuard nicht mit [Little Snitch 5](https://obdev.at/products/littlesnitch/index.html) kompatibel. Wenn beide laufen, kann es zu Problemen mit dem Verhalten verschiedener Apps kommen, auch wenn sie nicht von AdGuard gefiltert werden. Dieses Problem wird direkt durch einen Fehler in Big Sur verursacht, und Apple wurde von uns bereits darüber informiert. Dies lässt vermuten, dass dieses Problem in einem der nächsten Aktualisierungen behoben werden wird.

Es muss gesagt werden, dass dieses Problem nicht durch die Deaktivierung der Verbindungsüberwachung in Little Snitch gelöst werden kann, da diese Aktion die Erweiterung von Little Snitch nicht aus dem System entlädt. Wir empfehlen, in den [**Automatischen Proxy**](#automatic-proxy)-Filtermodus zu wechseln, wenn Sie AdGuard zusammen mit Little Snitch auf Big Sur betreiben, zumindest bis Apple den Fehler behebt.

### Kompatibilität mit lokalen Proxys

:::note

Jetzt kann AdGuard lokale Proxys (meistens) problemlos filtern. Wenn Sie in den Betriebssystemversionen 11.1+ auf Probleme stoßen oder wenn Sie Big Sur 11.0 verwenden, entfernen Sie den lokalen Proxy aus den Systemeinstellungen und konfigurieren Sie einen Upstream-Proxy in AdGuard, indem Sie die nachstehenden Anweisungen befolgen.

:::

So konfigurieren Sie einen Upstream-Proxy in AdGuard für Mac in Big Sur:

1. Open AdGuard's settings  *Preferences → Network → Outbound proxy*.
2. Wählen Sie HTTP, HTTPS, SOCKS4 oder SOCKS5, je nach Proxy-Typ.
3. Füllen Sie die Felder aus:
    - `host` ist die IP-Adresse Ihres Proxy-Servers,
    - `port` ist die gewünschte Portnummer, die vom Proxy-Server verwendet werden soll,
    - `user` und `password` sind der entsprechende Benutzername und das Passwort Ihres Proxys (falls erforderlich). Ignorieren Sie eine oder beide, wenn sie nicht zutreffend sind.

Wenden Sie sich bei Problemen bitte an unseren technischen Support unter support@adguard.com.

#### Beispiel 1: Konfigurieren eines Upstream-Shadowsocks-Proxys

Hier ist ein Beispiel für die Konfiguration eines Upstream-Proxys für [Shadowsocks](https://shadowsocks.org).

Zunächst benötigen Sie eine funktionierende Serverseite für Ihren Proxy. Höchstwahrscheinlich würden Sie zum Einrichten eine JSON-Datei wie diese verwenden (`server` und `password` Werte wurden hier zufällig ausgewählt):

```json
{
   "server":"111.222.333.444",
   "server_port":8388,
   "local_port":1080,
   "password":"barfoo!",
   "timeout":600,
   "method":"chacha20-ietf-poly1305"
}
```

:::tip

Weitere Informationen zu den ersten Schritten finden Sie auf der [Shadowsocks-Website](https://shadowsocks.org/guide/what-is-shadowsocks.html).

:::

Dann müssten Sie den Shadowsocks-Client auf Ihrem Mac installieren. Stellen Sie sicher, dass Sie in den Einstellungen „Manueller Modus“ oder „Automatischer Modus“ auswählen. Die Konfiguration funktioniert nicht, wenn Sie „Global Mode“ (oder „Auto Mode“ in Big Sur-Versionen vor 11.1) auswählen.

![Manuellen Modus oder automatischen Modus in den Einstellungen auswählen *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/mac/shadowsocks.jpg)

Öffnen Sie nun das Menü *AdGuard → Erweitert → Erweiterte Einstellungen…* und setzen Sie den Bereich *Wert* der Einstellung `upstream.proxy` auf `socks5://localhost:1080`. Beachten Sie, dass Sie hier den Wert „local_port“ aus der JSON-Datei verwenden müssen.

Da Shadowsocks SOCKS5 verwendet, müssen Sie auch den Wert der Einstellung `upstream.proxy.socks5udp` in den erweiterten Einstellungen von AdGuard auf `true` setzen, damit AdGuard den UDP-Datenverkehr an den Proxy-Server weiterleitet.

#### Beispiel 2: Konfigurieren eines Upstream-Surge-Proxys

In Big Sur v11.1+ gibt es keine bekannten Konflikte zwischen AdGuard und dem Surge-Proxy. Wenn Sie eine ältere Version von Big Sur (vor 11.1) verwenden, überprüfen Sie, ob **System Proxy** in der unteren rechten Ecke deaktiviert ist. Andernfalls funktioniert Surge nicht mit AdGuard. Andererseits kann **Enhanced Mode** aktiviert werden, ohne dass es in einer Big Sur-Version zu Konflikten kommt.

![Konfigurieren eines vorgelagerten Surge-Proxys *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/outbound-proxy.png)

Now go to *Preferences → Network → Outbound proxy* and fill in the fields. Für SOCKS5-Proxy-Typ:

- `host`: localhost
- `port`: 6153 Für HTTP-Proxy-Typ:
- `host`: localhost
- `port`: 6152

## Alternativen zur Verwendung einer Netzwerkerweiterung

Es ist unmöglich, jedes mögliche Problem vorherzusehen, das in Big Sur oder Monterey auftauchen kann, es gibt unzählige verschiedene Hardware-/Software- und Einstellungskonfigurationen. Wenn Sie auf Kompatibilitätsprobleme stoßen, wenden Sie sich bitte an unser Support-Team, aber probieren Sie zuerst eine dieser Problemumgehungen aus.

### Verwenden des Filtermodus „Automatischer Proxy“ {#automatic-proxy}

Wenn Sie in Big Sur oder Monterey auf Probleme stoßen, die mit keiner der oben genannten Methoden gelöst werden können, können Sie versuchen, AdGuard in den Modus *Automatischer Proxy* zu schalten.

1. Öffnen Sie das AdGuard-Menü.
1. Wählen Sie *Einstellungen…*.
1. Wechseln Sie zum Tab *Netzwerk*.
1. Click the *Select Mode...* button.
1. Select *Automatic Proxy*.

![AdGuard in den automatischen Proxy-Modus schalten](https://cdn.adtidy.org/content/kb/ad_blocker/mac/automatic-proxy_en.jpg)

Now AdGuard has automatically added a **.pac** file to your Mac's network settings, so that the system will consider AdGuard a proxy and try to send all traffic through AdGuard.

:::note

Some apps may ignore this system setting and their traffic will not be filtered.

:::

### Aktivieren der Kernel Extension in Big Sur und Monterey {#kernel-extension}

Standardmäßig verwendet AdGuard das Network Extension-Framework in Big Sur und Monterey, da die alte Kernel-Erweiterung dort deaktiviert ist. This can cause some compatibility problems, but to enable Kernel Extension back, you need to disable System Integrity Protection (SIP) first. Um SIP zu deaktivieren, folgen Sie dieser Anleitung:

1. Klicken Sie auf das *Apfelsymbol* in der Menüleiste.
1. Klicken Sie auf *Neustart…*
1. Halten Sie die Tastenkombination *Command (⌘) + R* gedrückt, um in den Wiederherstellungsmodus zu wechseln.
1. Klicken Sie auf *Dienstprogramme*.
1. Wählen Sie *Terminal* aus.
1. Geben Sie `csrutil disable` ein.
1. Drücken Sie *Return* oder *Enter* auf Ihrer Tastatur.
1. Klicken Sie auf das *Apfelsymbol* in der Menüleiste.
1. Klicken Sie auf *Neustart*

Nachdem SIP deaktiviert ist, aktivieren Sie die Kernel-Erweiterung folgendermaßen:

![Kernel Extension aktivieren](https://cdn.adtidy.org/content/kb/ad_blocker/mac/kernel_en.jpg)

1. Öffnen Sie das AdGuard-Menü.
1. Wählen Sie *Einstellungen…*.
1. Wechseln Sie zum Tab *Netzwerk*.
1. Click the *Select Mode...* button.
1. Select *Kernel Extension*.
1. Confirm that you want to switch to Kernel Extension.

:::caution

Wir empfehlen jedoch nur, diese Methode zu verwenden, wenn alles andere fehlschlägt, da dies zu unerwarteten Problemen führen kann.

:::
