---
title: Kompatibilitätsprobleme mit verschiedenen macOS-Versionen
sidebar_position: 4
---

:::Info

Dieser Artikel behandelt AdGuard für Mac, einen multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://adguard.com/download.html?auto=true)

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

This problem is solved in Flutter 2.2, released in June 2021. But to fix it for applications developed in Flutter, you need to wait for updates.

If you use Flutter alongside AdGuard in "Network Extension" mode (or any other "Transparent Proxy"-type app) in Monterey or Big Sur, you will run into problems: projects won't open and Flutter will be effectively broken. We have already reported this bug to Apple. Meanwhile, you can use these temporary solutions:

1) Use AdGuard in [Automatic Proxy](#automatic-proxy) mode.

2) Disable SIP and switch AdGuard to Kernel Extension mode as explained [here](#kernel-extension).

#### VPN-Apps mit Legacy-API

Despite AdGuard is displayed as a VPN in system settings, it shouldn't cause any conflicts when working alongside other VPN-based apps. However, if you're using a VPN-based app that was downloaded from outside App Store, there's a chance it uses the old VPN API and you have to exclude it from filtering:

1) Open AdGuard's menu. 2) Select *Preferences...*. 3) Switch to the *Network* tab. 4) Click the *Applications...* button. 5) Find the app you want to exclude and uncheck the checkbox next to it.

![Filtered applications](https://cdn.adtidy.org/content/kb/ad_blocker/mac/legacy.jpg)

## Bereits behobene Probleme

These problems have been fixed by Apple by now but can be encountered in the older versions of macOS Big Sur.

### Kompatibilität mit Little Snitch 5

At this moment, Network Extension mode in AdGuard isn't compatible with [Little Snitch 5](https://obdev.at/products/littlesnitch/index.html). When both are running, there's a chance to encounter issues with various apps' behavior, even if they aren't filtered by AdGuard. This problem is directly caused by a bug in Big Sur, and we've already informed Apple about it. This leaves us to believe that this issue will get resolved in one of the next updates.

It needs to be said that this problem can't be solved by disabling connections monitoring in Little Snitch, because this action doesn't unload Little Snitch's extension from the system. We recommend to switch to [**Automatic Proxy**](#automatic-proxy) filtering mode when running AdGuard alongside with Little Snitch on Big Sur, at least until Apple fixes the bug.

### Kompatibilität mit lokalen Proxys

:::note

Now AdGuard can filter local proxies (mostly) without any problems. Wenn Sie in den Betriebssystemversionen 11.1+ auf Probleme stoßen oder wenn Sie Big Sur 11.0 verwenden, entfernen Sie den lokalen Proxy aus den Systemeinstellungen und konfigurieren Sie einen Upstream-Proxy in AdGuard, indem Sie die nachstehenden Anweisungen befolgen.

:::

To configure an upstream proxy in AdGuard for Mac in Big Sur, open AdGuard's settings *Preferences → Network → Outbound proxy*. Click the *Value* area of the `upstream.proxy` setting to configure a proxy.

Geben Sie eine Zeichenfolge ein, die wie folgt aussieht: `scheme://user:password@host:port`, wobei

* `scheme` ist entweder `http`, `https`, `socks4` oder `socks5`, abhängig von Ihrem Proxy-Typ,

Wenn Sie den Proxytyp `socks5` verwenden, setzen Sie den Wert der Einstellung `upstream.proxy.socks5udp` auf `true`, damit AdGuard den UDP-Datenverkehr an den Proxyserver weiterleitet.

* `user` und `password` sind der entsprechende Benutzername und das Passwort Ihres Proxys (falls erforderlich). Ignorieren Sie eines oder beide, wenn nicht zutreffend,
* `host` ist die IP-Adresse Ihres Proxy-Servers,
* `port` ist die gewünschte Portnummer, die vom Proxy-Server verwendet werden soll.

:::note Example

`socks5://localhost:6322` will configure a SOCKS5 local proxy that listens to port 6322 and doesn't require a username or a password.

:::

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

:::tip

Weitere Informationen zu den ersten Schritten finden Sie auf der [Shadowsocks-Website](https://shadowsocks.org/guide/what-is-shadowsocks.html).

:::

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

:::note

Some apps may ignore this system setting and their traffic will not be filtered.

:::

### Aktivieren der Kernel-Erweiterung in Big Sur und Monterey {#kernel-extension}

Standardmäßig verwendet AdGuard das Netzwerk-Erweiterungs-Framework in Big Sur und Monterey, da die alte Kernel-Erweiterung dort deaktiviert ist. Dies kann einige Kompatibilitätsprobleme verursachen, aber um die Kernel-Erweiterung wieder zu aktivieren, müssen Sie zuerst den Systemintegritätsschutz (SIP) deaktivieren. Um SIP zu deaktivieren, folgen Sie dieser Anleitung:

1) Klicken Sie auf das *Apfelsymbol* in der Menüleiste. 2) Klicken Sie auf *Restart…* 3) Halten Sie *Command-R* gedrückt, um im Wiederherstellungsmodus neu zu starten. 4) Klicken Sie auf *Utilities*. 5) Wählen Sie *Terminal* aus. 6) Geben Sie `csrutil disable` ein. 7) Drücken Sie *Return* oder *Enter* auf Ihrer Tastatur. 8) Klicken Sie auf das *Apfelsymbol* in der Menüleiste. 9) Klicken Sie auf *Restart…*

Nachdem SIP deaktiviert ist, aktivieren Sie die Kernel-Erweiterung folgendermaßen:

![Kernel-Erweiterung aktivieren](https://cdn.adtidy.org/content/kb/ad_blocker/mac/kernel_en.jpg)

1) Öffnen Sie das AdGuard-Menü. 2) Wählen Sie *Einstellungen...*. 3) Wechseln Sie auf die Registerkarte *Netzwerk*. 4) Klicken Sie auf die Schaltfläche *Modus auswählen...*. 5) Wählen Sie *Kernel-Erweiterung* aus. 6) Bestätigen Sie, dass Sie zur Kernel-Erweiterung wechseln möchten.

:::Zur Beachtung

Wir empfehlen jedoch nur, diese Methode zu verwenden, wenn alles andere fehlschlägt, da dies zu unerwarteten Problemen führen kann.

:::
