---
title: Kompatibilitätsprobleme mit verschiedenen macOS-Versionen
sidebar_position: 4
---

:::note

This article covers AdGuard for Mac, a multifunctional ad blocker that protects your device at the system level. To see how it works, [download the AdGuard app](https://adguard.com/download.html?auto=true)

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

An dieser Stelle empfehlen wir die Verwendung eines traditionelleren VPN-Dienstes wie AdGuard VPN anstelle der neuen Datenschutzfunktionen von Apple.

### Monterey 12, Big Sur 11.6 und höher: derzeit bestehende Probleme

Diese Probleme wurden von Apple noch nicht oder nur teilweise behoben.

#### Kompatibilität mit Cisco AnyConnect

AdGuard will not work together with Cisco AnyConnect while in the *Network Extension* mode. Sie müssen AdGuard in den Modus *Automatischer Proxy* schalten. Folgen Sie dazu [dieser Anleitung](#automatic-proxy).


#### Kompatibilität mit Flutter

> Dieses Problem wurde in Flutter 2.2 behoben, das im Juni 2021 veröffentlicht wurde. Aber um es für in Flutter entwickelte Anwendungen zu beheben, müssen Sie auf Updates warten. Wenn Sie Flutter zusammen mit AdGuard im „Netzwerk-Erweiterung“-Modus (oder einer anderen App vom Typ „Transparent Proxy“) in Monterey oder Big Sur verwenden, werden Sie auf Probleme stoßen: Projekte werden nicht geöffnet und Flutter wird effektiv unterbrochen. Wir haben diesen Fehler bereits an Apple gemeldet. In der Zwischenzeit können Sie diese temporären Lösungen verwenden:

1) Verwenden Sie AdGuard im Modus [Automatischer Proxy](#automatic-proxy).

2) Deaktivieren Sie SIP und schalten Sie AdGuard in den Kernel-Extension-Modus, wie [hier](#kernel-extension) erklärt.

#### VPN-Apps mit Legacy-API

Obwohl AdGuard in den Systemeinstellungen als VPN angezeigt wird, sollte es keine Konflikte verursachen, wenn es mit anderen VPN-basierten Apps zusammenarbeitet. Wenn Sie jedoch eine VPN-basierte App verwenden, die von außerhalb des App Store heruntergeladen wurde, besteht die Möglichkeit, dass sie die alte VPN-API verwendet, und Sie müssen sie von der Filterung ausschließen:

1) Öffnen Sie das AdGuard-Menü. 2) Wählen Sie *Einstellungen...*. 3) Wechseln Sie auf die Registerkarte *Netzwerk*. 4) Klicken Sie auf die Schaltfläche *Anwendungen...*. 5) Suchen Sie die App, die Sie ausschließen möchten, und deaktivieren Sie das Kontrollkästchen daneben.

![Gefilterte Anträge](https://cdn.adtidy.org/content/kb/ad_blocker/mac/legacy.jpg)

## Bereits behobene Probleme

Diese Probleme wurden inzwischen von Apple behoben, können aber in den älteren Versionen von macOS Big Sur auftreten.

### Kompatibilität mit Little Snitch 5

Derzeit ist der Netzwerker-Erweiterungsmodus in AdGuard nicht mit [Little Snitch 5](https://obdev.at/products/littlesnitch/index.html) kompatibel. Wenn beide ausgeführt werden, besteht die Möglichkeit, dass Probleme mit dem Verhalten verschiedener Apps auftreten, auch wenn sie nicht von AdGuard gefiltert werden. Dieses Problem wird direkt durch einen Fehler in Big Sur verursacht, und wir haben Apple bereits darüber informiert. Dies lässt uns glauben, dass dieses Problem in einem der nächsten Updates behoben wird.

Es muss gesagt werden, dass dieses Problem nicht gelöst werden kann, indem die Verbindungsüberwachung in Little Snitch deaktiviert wird, da diese Aktion die Erweiterung von Little Snitch nicht aus dem System entlädt. Wir empfehlen, auf den Filtermodus [**Automatischer Proxy**](#automatic-proxy) zu wechseln, wenn AdGuard zusammen mit Little Snitch auf Big Sur ausgeführt wird, zumindest bis Apple den Fehler behoben hat.

### Kompatibilität mit lokalen Proxys

> Hinweis: Jetzt kann AdGuard lokale Proxys (meistens) problemlos filtern. Wenn Sie in den Betriebssystemversionen 11.1+ auf Probleme stoßen oder wenn Sie Big Sur 11.0 verwenden, entfernen Sie den lokalen Proxy aus den Systemeinstellungen und konfigurieren Sie einen Upstream-Proxy in AdGuard, indem Sie die nachstehenden Anweisungen befolgen.

Um einen Upstream-Proxy in AdGuard für Mac in Big Sur zu konfigurieren, müssen Sie zum *AdGuard-Menü → Erweitert → Erweiterte Einstellungen...* gehen. Klicken Sie auf die Schaltfläche *Wert* der `upstream.proxy`-Einstellung zum Konfigurieren eines Proxys.

![Proxy-Einstellungen in AdGuard für Mac auf Big Sur](https://cdn.adtidy.org/content/kb/ad_blocker/mac/proxy_en.jpg)

Geben Sie eine Zeichenfolge ein, die wie folgt aussieht: `scheme://user:password@host:port`, wobei

* `scheme` ist entweder `http`, `https`, `socks4` oder `socks5`, abhängig von Ihrem Proxy-Typ,

> Wenn Sie den Proxytyp `socks5` verwenden, setzen Sie den Wert der Einstellung `upstream.proxy.socks5udp` auf `true`, damit AdGuard den UDP-Datenverkehr an den Proxyserver weiterleitet.

* `user` und `password` sind der entsprechende Benutzername und das Passwort Ihres Proxys (falls erforderlich). Ignorieren Sie eines oder beide, wenn nicht zutreffend,
* `host` ist die IP-Adresse Ihres Proxy-Servers,
* `port` ist die gewünschte Portnummer, die vom Proxy-Server verwendet werden soll.

> Beispiel: `socks5://localhost:6322` konfiguriert einen lokalen SOCKS5-Proxy, der Port 6322 abhört und weder Benutzername noch Passwort erfordert.

Klicken Sie auf *Anwenden* , damit AdGuard den gesamten Datenverkehr an den konfigurierten Proxy-Server weiterleitet.

Wenden Sie sich bei Problemen bitte an unseren technischen Support unter support@adguard.com.

#### Beispiel 1: Konfigurieren eines Upstream-Shadowsocks-Proxys

Hier ist ein Beispiel für die Konfiguration eines Upstream-Proxys für [Shadowsocks](https://shadowsocks.org).

Zunächst einmal benötigen Sie eine funktionierende Serverseite für Ihren Proxy. Höchstwahrscheinlich würden Sie zum Einrichten eine JSON-Datei wie diese verwenden (`server` und `password` Werte wurden hier zufällig ausgewählt):

```
{
   "server":"111.222.333.444",
   "server_port":8388,
   "local_port":1080,
   "password":"barfoo!",
   "timeout":600,
   "method":"chacha20-ietf-poly1305"
}
```

> Weitere Informationen zu den ersten Schritten finden Sie auf der [Shadowsocks-Website](https://shadowsocks.org/guide/what-is-shadowsocks.html).

Dann müssten Sie den Shadowsocks-Client auf Ihrem Mac installieren. Stellen Sie sicher, dass Sie in den Einstellungen „Manueller Modus“ oder „Automatischer Modus“ auswählen! Die Konfiguration funktioniert nicht, wenn Sie „Global Mode“ (oder „Auto Mode“ in Big Sur-Versionen vor 11.1) auswählen.

![Wählen Sie den manuellen Modus oder den automatischen Modus in den Einstellungen *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/mac/shadowsocks.jpg)

Gehen Sie nun zu *AdGuard Menü → Erweitert → Erweiterte Einstellungen...* und setzen Sie den Bereich *Wert* der Einstellung `upstream.proxy` auf `socks5://localhost:1080`. Beachten Sie, dass Sie hier den Wert „local_port“ aus der JSON-Datei verwenden müssen.

Da Shadowsocks SOCKS5 verwendet, müssen Sie auch den Wert der Einstellung `upstream.proxy.socks5udp` in den erweiterten Einstellungen von AdGuard auf `true` setzen, damit AdGuard den UDP-Datenverkehr an den Proxy-Server weiterleitet.

#### Beispiel 2: Konfigurieren eines Upstream-Surge-Proxys

In Big Sur v11.1+ gibt es keine bekannten Konflikte zwischen AdGuard und dem Surge-Proxy. Wenn Sie eine ältere Version von Big Sur (vor 11.1) verwenden, überprüfen Sie, ob **System Proxy** in der unteren rechten Ecke deaktiviert ist. Andernfalls funktioniert Surge nicht mit AdGuard. Andererseits kann **Enhanced Mode** aktiviert werden, ohne dass es in einer Big Sur-Version zu Konflikten kommt.

![Konfigurieren eines vorgelagerten Surge-Proxys *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/surge.jpg)

Gehen Sie nun zu *AdGuard Menü → Erweitert → Erweiterte Einstellungen...* und setzen Sie den Bereich *Wert* der Einstellung `upstream.proxy` auf `socks5://localhost:6153`. Beachten Sie, dass Sie den Wert **port** verwenden müssen, der im Bereich **Events** der Registerkarte **Activity** in Ihrem Surge-Client angegeben ist.

Wenn Sie das SOCKS5-Protokoll gewählt haben, müssen Sie auch den Wert der Einstellung `upstream.proxy.socks5udp` in den erweiterten Einstellungen von AdGuard auf `true` setzen, damit AdGuard den UDP-Datenverkehr an den Proxy-Server weiterleitet.

## Alternativen zur Verwendung einer Netzwerkerweiterung

Es ist unmöglich, jedes mögliche Problem vorherzusehen, das in Big Sur oder Monterey auftauchen kann, es gibt unzählige verschiedene Hardware-/Software- und Einstellungskonfigurationen. Wenn Sie auf Kompatibilitätsprobleme stoßen, wenden Sie sich bitte an unser Support-Team, aber probieren Sie zuerst eine dieser Problemumgehungen aus.

### Verwenden des Filtermodus „Automatischer Proxy“ {#automatic-proxy}

Wenn Sie in Big Sur oder Monterey auf Probleme stoßen, die mit keiner der oben genannten Methoden gelöst werden können, können Sie versuchen, AdGuard in den Modus *Automatischer Proxy* zu schalten.

1) Öffnen Sie das AdGuard-Menü. 2) Wählen Sie *Einstellungen...*. 3) Wechseln Sie auf die Registerkarte *Netzwerk*. 4) Klicken Sie auf die Schaltfläche *Modus auswählen...*. 5) Wählen Sie *Automatischer Proxy* aus.

![Schalten Sie AdGuard in den automatischen Proxy-Modus](https://cdn.adtidy.org/content/kb/ad_blocker/mac/automatic-proxy_en.jpg)

Jetzt hat AdGuard automatisch eine **.pac** -Datei zu den Netzwerkeinstellungen Ihres Mac hinzugefügt, sodass das System AdGuard als Proxy betrachtet und versucht, den gesamten Datenverkehr über AdGuard zu senden.

> Beachten Sie, dass einige Apps diese Systemeinstellung möglicherweise ignorieren und ihr Datenverkehr nicht gefiltert wird.

### Aktivieren der Kernel-Erweiterung in Big Sur und Monterey {#kernel-extension}

Standardmäßig verwendet AdGuard das Netzwerk-Erweiterungs-Framework in Big Sur und Monterey, da die alte Kernel-Erweiterung dort deaktiviert ist. Dies kann einige Kompatibilitätsprobleme verursachen, aber um die Kernel-Erweiterung wieder zu aktivieren, müssen Sie zuerst den Systemintegritätsschutz (SIP) deaktivieren. Um SIP zu deaktivieren, folgen Sie dieser Anleitung:

1) Klicken Sie auf das *Apfelsymbol* in der Menüleiste. 2) Klicken Sie auf *Restart…* 3) Halten Sie *Command-R* gedrückt, um im Wiederherstellungsmodus neu zu starten. 4) Klicken Sie auf *Utilities*. 5) Wählen Sie *Terminal* aus. 6) Geben Sie `csrutil disable` ein. 7) Drücken Sie *Return* oder *Enter* auf Ihrer Tastatur. 8) Klicken Sie auf das *Apfelsymbol* in der Menüleiste. 9) Klicken Sie auf *Restart…*

Nachdem SIP deaktiviert ist, aktivieren Sie die Kernel-Erweiterung folgendermaßen:

![Kernel-Erweiterung aktivieren](https://cdn.adtidy.org/content/kb/ad_blocker/mac/kernel_en.jpg)

1) Öffnen Sie das AdGuard-Menü. 2) Wählen Sie *Einstellungen...*. 3) Wechseln Sie auf die Registerkarte *Netzwerk*. 4) Klicken Sie auf die Schaltfläche *Modus auswählen...*. 5) Wählen Sie *Kernel-Erweiterung* aus. 6) Bestätigen Sie, dass Sie zur Kernel-Erweiterung wechseln möchten.

> Wir empfehlen jedoch nur, diese Methode zu verwenden, wenn alles andere fehlschlägt, da dies zu unerwarteten Problemen führen kann.
