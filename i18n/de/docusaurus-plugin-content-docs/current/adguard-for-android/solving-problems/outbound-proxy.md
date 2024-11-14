---
title: So richten Sie einen ausgehenden Proxy ein
sidebar_position: 8
---

:::info

Dieser Artikel behandelt AdGuard für Android, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

Nachfolgend finden Sie eine Liste der bekanntesten Anwendungen, die in AdGuard als Proxys konfiguriert werden können.

:::note

Wenn Ihre Anwendung unten nicht aufgeführt ist, überprüfen Sie bitte die Proxy-Konfigurationen in den Einstellungen oder kontaktieren Sie das Support-Team.

:::

AdGuard ermöglicht Ihnen das Umleiten des Datenverkehrs Ihres Geräts über einen Proxyserver. To access proxy settings, open **Settings** and then proceed to **Filtering** → **Network** → **Proxy**.

## Beispiele für die Proxy-Konfiguration

In diesem Artikel zeigen wir Ihnen anhand von Beispielen, wie Sie einige der gängigsten Proxys für die Zusammenarbeit mit AdGuard einrichten können.

### So verwenden Sie AdGuard mit Tor

1. Open AdGuard and go to **Settings** → **Filtering** → **Network** → **Proxy**. Download “Orbot: Proxy with Tor” directly from [Google Play](https://play.google.com/store/apps/details?id=org.torproject.android&noprocess) or by tapping **Integrate with Tor** and then **Install**.

1. Open Orbot and press the **Start** button on the application's main screen.

1. Go back to the **Proxy** screen of AdGuard.

1. Tap the **Integrate with Tor** button.

1. Alle erforderlichen Felder sind bereits vorausgefüllt:

    | Feld       | Wert                   |
    | ---------- | ---------------------- |
    | Proxy-Typ  | *SOCKS4* oder *SOCKS5* |
    | Proxy-Host | *127.0.0.1*            |
    | Proxy-Port | *9050*                 |

    Or you can tap **Proxy server** → **Add proxy server**, enter these values manually, and set Orbot as the default proxy.

1. Aktivieren Sie den Haupt-Proxy-Schalter und den AdGuard-Schutz, um den Datenverkehr Ihres Geräts über den Proxy zu leiten.

    Now AdGuard will route all traffic through Orbot. If you disable Orbot, Internet connection will be unavailable until you disable the outbound proxy settings in AdGuard.

### How to use AdGuard with PIA (Private Internet Access)

*Here we presume that you are already a PIA VPN client and have it installed on your device.*

1. Öffnen Sie AdGuard und wechseln Sie zu **Einstellungen** ➜ **Filterung** ➜ **Netzwerk** ➜ **Proxy** ➜ **Proxy-Server**.

1. Tap the **Add proxy server** button and enter the following data:

    | Feld       | Wert                                 |
    | ---------- | ------------------------------------ |
    | Proxy-Typ  | *SOCKS5*                             |
    | Proxy-Host | *proxy-nl.privateinternetaccess.com* |
    | Proxy-Port | *1080*                               |

1. You also need to fill out the **Username/Password** fields. To do so, log in to the [Client Control Panel](https://www.privateinternetaccess.com/pages/client-sign-in) on the PIA website. Tap the **Generate Password** button under the **Generate PPTP/L2TP/SOCKS Password** section. A username starting with “x” and a random password will be shown. Use them to fill out the **Proxy username** and **Proxy password** fields in AdGuard.

1. Tap **Save and select**.

1. Aktivieren Sie den Haupt-Proxy-Schalter und den AdGuard-Schutz, um den Datenverkehr Ihres Geräts über den Proxy zu leiten.

### So verwenden Sie AdGuard mit TorGuard

*Hier gehen wir davon aus, dass Sie bereits ein TorGuard-Kunde sind und es auf Ihrem Gerät installiert haben.*

1. Öffnen Sie AdGuard und wechseln Sie zu **Einstellungen** ➜ **Filterung** ➜ **Netzwerk** ➜ **Proxy** ➜ **Proxy-Server**.

1. Tap the **Add proxy server** button and enter the following data:

    | Feld       | Wert                                          |
    | ---------- | --------------------------------------------- |
    | Proxy-Typ  | *SOCKS5*                                      |
    | Proxy-Host | *proxy.torguard.org* oder *proxy.torguard.io* |
    | Proxy-Port | *1080* oder *1085* oder *1090*                |

1. For **Username** and **Password** fields, enter your proxy username and proxy password you have chosen at TorGuard signup.

1. Tap **Save and select**.

1. Aktivieren Sie den Haupt-Proxy-Schalter und den AdGuard-Schutz, um den Datenverkehr Ihres Geräts über den Proxy zu leiten.

### So verwenden Sie AdGuard mit NordVPN

1. Melden Sie sich bei Ihrem NordVPN-Konto an.

1. Go to **Services** → **NordVPN** → **Manual setup** and set up your service credentials manually.

1. You will receive a verification code on the email address you use for NordVPN. Use it on your NordVPN account as requested, then tap *Apply* and *OK* to save the changes.

![Manuelle Einrichtung](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/outbound-proxy/nordvpn-manual-setup.png)

1. Open the AdGuard app, go to **Settings** → **Filtering** → **Network** → **Proxy** → **Proxy server** → **Add proxy server**.

1. Geben Sie die folgenden Daten ein:

    | Feld       | Wert                                                                                                                          |
    | ---------- | ----------------------------------------------------------------------------------------------------------------------------- |
    | Proxy-Typ  | *SOCKS5*                                                                                                                      |
    | Proxy-Host | Any server from [this list](https://support.nordvpn.com/hc/en-us/articles/20195967385745-NordVPN-proxy-setup-for-qBittorrent) |
    | Proxy-Port | *1080*                                                                                                                        |

1. Enter your NordVPN credentials in the **Username** and **Password** fields.

1. Tap **Save and select**.

1. Aktivieren Sie den Haupt-Proxy-Schalter und den AdGuard-Schutz, um den Datenverkehr Ihres Geräts über den Proxy zu leiten.

### So verwenden Sie AdGuard mit Shadowsocks

*Wir gehen hier davon aus, dass Sie bereits einen Shadowsocks-Server und einen Client auf Ihrem Gerät konfiguriert haben.*

:::note

You should remove Shadowsocks app from filtering before setting up the process (**App management** → **Shadowsocks** → **Route traffic through AdGuard**) to avoid infinite loops and drops.

:::

1. Öffnen Sie AdGuard und wechseln Sie zu **Einstellungen** ➜ **Filterung** ➜ **Netzwerk** ➜ **Proxy** ➜ **Proxy-Server**.

1. Tap the **Add proxy server** and fill in the fields:

    | Feld       | Wert        |
    | ---------- | ----------- |
    | Proxy-Typ  | *SOCKS5*    |
    | Proxy-Host | *127.0.0.1* |
    | Proxy-Port | *1080*      |

1. Tap **Save and select**.

1. Aktivieren Sie den Haupt-Proxy-Schalter und den AdGuard-Schutz, um den Datenverkehr Ihres Geräts über den Proxy zu leiten.

### So verwenden Sie AdGuard mit Clash

*Wir gehen hier davon aus, dass Sie bereits ein Clash-Client sind und es auf Ihrem Gerät installiert haben.*

1. Open Clash and go to **Settings** → **Network** → **Route System Traffic** and toggle the switch. Dadurch wird Clash in den Proxy-Modus versetzt.

1. Öffnen Sie AdGuard und wechseln Sie zu **App-Verwaltung**. Choose **Clash For Android** and disable **Route traffic through AdGuard**. This will eliminate traffic looping.

1. Then go to **Settings** → **Filtering** → **Network** → **Proxy** → **Proxy server**.

1. Tap **Add proxy server** and fill in the fields:

    | Feld       | Wert        |
    | ---------- | ----------- |
    | Proxy-Typ  | *SOCKS5*    |
    | Proxy-Host | *127.0.0.1* |
    | Proxy-Port | *7891*      |

## Beschränkungen

However, at least one factor may prevent certain traffic from being routed through the outbound proxy, even after configuring the AdGuard proxy settings. That would be if the app itself isn't configured to send its traffic through AdGuard. To do it, you need to proceed to **App management**, choose the app, and turn on **Route traffic through AdGuard**.
