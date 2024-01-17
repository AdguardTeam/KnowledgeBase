---
title: Kompatibilitätsprobleme mit verschiedenen macOS-Versionen
sidebar_position: 4
---

:::info

Dieser Artikel behandelt AdGuard für Mac, einen multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock)

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

1. Use AdGuard in [Automatic Proxy](#automatic-proxy) mode.

1. Disable SIP and switch AdGuard to Kernel Extension mode as explained [here](#kernel-extension).

#### VPN-Apps mit Legacy-API

Despite AdGuard is displayed as a VPN in system settings, it shouldn't cause any conflicts when working alongside other VPN-based apps. However, if you're using a VPN-based app that was downloaded from outside App Store, there's a chance it uses the old VPN API and you have to exclude it from filtering:

1. Open AdGuard's menu.
1. Select *Preferences...*.
1. Switch to the *Network* tab.
1. Click the *Applications...* button.
1. Find the app you want to exclude and uncheck the checkbox next to it.

![Filtered applications](https://cdn.adtidy.org/content/kb/ad_blocker/mac/legacy.jpg)

## Bereits behobene Probleme

These problems have been fixed by Apple by now but can be encountered in the older versions of macOS Big Sur.

### Kompatibilität mit Little Snitch 5

At this moment, Network Extension mode in AdGuard isn't compatible with [Little Snitch 5](https://obdev.at/products/littlesnitch/index.html). When both are running, there's a chance to encounter issues with various apps' behavior, even if they aren't filtered by AdGuard. This problem is directly caused by a bug in Big Sur, and we've already informed Apple about it. This leaves us to believe that this issue will get resolved in one of the next updates.

It needs to be said that this problem can't be solved by disabling connections monitoring in Little Snitch, because this action doesn't unload Little Snitch's extension from the system. We recommend to switch to [**Automatic Proxy**](#automatic-proxy) filtering mode when running AdGuard alongside with Little Snitch on Big Sur, at least until Apple fixes the bug.

### Kompatibilität mit lokalen Proxys

:::note

Now AdGuard can filter local proxies (mostly) without any problems. If you encounter any issues in OS versions 11.1+, or if you're using Big Sur 11.0, remove the local proxy from System settings and configure an upstream proxy in AdGuard by following the instruction below.

:::

To configure an upstream proxy in AdGuard for Mac in Big Sur:

1. Open AdGuard's settings  *Preferences → Network → Outbound proxy*.
2. Choose HTTP, HTTPS, SOCKS4 or SOCKS5, depending on your proxy type.
3. Fill in the fields:
    - `host` is the IP address of your proxy server,
    - `port` is the desired port number to be used by the proxy server,
    - `user` and `password` are corresponding username and password of your proxy (if needed). Ignore either or both when not applicable.

If you run into any problems, please contact our tech support at support@adguard.com.

#### Beispiel 1: Konfigurieren eines Upstream-Shadowsocks-Proxys

Here's an example of how to configure an upstream proxy for [Shadowsocks](https://shadowsocks.org).

First of all, you need a working server side for your proxy. Most likely, to set it up, you would use a JSON file like this (`server` and `password` values were chosen randomly here):

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

You can find more information about how to get started on [Shadowsocks website](https://shadowsocks.org/guide/what-is-shadowsocks.html).

:::

Then you'd have to install Shadowsocks client on your Mac. Make sure that you select 'Manual Mode' or 'Auto Mode' in its settings! The configuration won't work if you select 'Global Mode' (or 'Auto Mode' in Big Sur versions prior to 11.1).

![Select Manual Mode or Auto Mode in settings *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/mac/shadowsocks.jpg)

Now go to *AdGuard menu → Advanced → Advanced Settings...* and set the *Value* area of the `upstream.proxy` setting to `socks5://localhost:1080`. Notice that you need to use "local_port" value from the JSON file here.

Because Shadowsocks uses SOCKS5, you also need to set the value of the `upstream.proxy.socks5udp` setting in AdGuard Advanced Settings to `true` to make AdGuard route UDP traffic to the proxy server.

#### Beispiel 2: Konfigurieren eines Upstream-Surge-Proxys

In Big Sur v11.1+, there are no known conflicts between AdGuard and Surge proxy. If you are using an older version of Big Sur (prior to 11.1), check that **System Proxy** in the bottom right corner is disabled. Otherwise, Surge won't work with AdGuard. On the other hand, **Enhanced Mode** can be enabled without causing a conflict in any Big Sur version.

![Configuring an upstream Surge proxy *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/outbound-proxy.png)

Now go to *Preferences → Network → Outbound proxy* and fill in the fields. For SOCKS5 proxy type:

- `host`: localhost
- `port`: 6153 For HTTP proxy type:
- `host`: localhost
- `port`: 6152

## Alternativen zur Verwendung einer Netzwerkerweiterung

It's impossible to foresee each and every possible problem that can pop up in Big Sur or Monterey, there are countless various hardware/software and settings configurations. If you face any compatibility issues, please contact our support team, but feel free to try one of these workarounds first.

### Verwenden des Filtermodus „Automatischer Proxy“ {#automatic-proxy}

If you face problems in Big Sur or Monterey which can't be resolved by any of the methods above, you can try switching AdGuard to *Automatic proxy* mode.

1. Open AdGuard's menu.
1. Select *Preferences...*.
1. Switch to the *Network* tab.
1. Click the *Select Mode...* button.
1. Select *Automatic Proxy*.

![Switch AdGuard to Automatic proxy mode](https://cdn.adtidy.org/content/kb/ad_blocker/mac/automatic-proxy_en.jpg)

Now AdGuard has automatically added a **.pac** file to your Mac's network settings, so that the system will consider AdGuard a proxy and try to send all traffic through AdGuard.

:::note

Some apps may ignore this system setting and their traffic will not be filtered.

:::

### Aktivieren der Kernel-Erweiterung in Big Sur und Monterey {#kernel-extension}

By default AdGuard uses Network Extension framework in Big Sur and Monterey as the old Kernel Extension framework is disabled there. This can cause some compatibility problems, but to enable Kernel Extension back, you need to disable System Integrity Protection (SIP) first. To disable SIP, follow this instruction:

1. Click the *Apple symbol* in the Menu bar.
1. Click *Restart…*
1. Hold down *Command-R* to reboot into Recovery Mode.
1. Click *Utilities*.
1. Select *Terminal*.
1. Type `csrutil disable`.
1. Press *Return* or *Enter* on your keyboard.
1. Click the *Apple symbol* in the Menu bar.
1. Click *Restart…*

Nachdem SIP deaktiviert ist, aktivieren Sie die Kernel-Erweiterung folgendermaßen:

![Kernel-Erweiterung aktivieren](https://cdn.adtidy.org/content/kb/ad_blocker/mac/kernel_en.jpg)

1. Open AdGuard's menu.
1. Select *Preferences...*.
1. Switch to the *Network* tab.
1. Click the *Select Mode...* button.
1. Select *Kernel Extension*.
1. Confirm that you want to switch to Kernel Extension.

:::caution

Wir empfehlen jedoch nur, diese Methode zu verwenden, wenn alles andere fehlschlägt, da dies zu unerwarteten Problemen führen kann.

:::
