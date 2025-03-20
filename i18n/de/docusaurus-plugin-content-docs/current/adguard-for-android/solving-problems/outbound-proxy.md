---
title: Einrichten eines ausgehenden Proxys
sidebar_position: 8
---

:::info

Dieser Artikel behandelt AdGuard für Android, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

Nachfolgend finden Sie eine Liste der bekanntesten Anwendungen, die in AdGuard als Proxys konfiguriert werden können.

:::note

Wenn Ihre Anwendung unten nicht aufgeführt ist, überprüfen Sie bitte die Proxy-Konfigurationen in den Einstellungen oder kontaktieren Sie das Support-Team.

:::

AdGuard ermöglicht Ihnen das Umleiten des Datenverkehrs Ihres Geräts über einen Proxyserver. Um auf die Proxy-Einstellungen zuzugreifen, öffnen Sie **Einstellungen** und gehen dann zu **Filterung** → **Netzwerk** → **Proxy**.

## Beispiele für die Proxy-Konfiguration

In diesem Artikel zeigen wir Ihnen anhand von Beispielen, wie Sie einige der gängigsten Proxys für die Zusammenarbeit mit AdGuard einrichten können.

### So verwenden Sie AdGuard mit Tor

1. Öffnen Sie AdGuard und gehen Sie zu **Einstellungen** → **Filterung** → **Netzwerk** → **Proxy**. Laden Sie "Orbot: Proxy with Tor" direkt von [Google Play](https://play.google.com/store/apps/details?id=org.torproject.android&noprocess) oder durch Tippen auf **Mit Tor integrieren** und dann **Installieren**.

1. Öffnen Sie Orbot und drücken Sie die Schaltfläche **Start** auf dem Hauptbildschirm der Anwendung.

1. Wechseln Sie zurück zum **Proxy**-Bildschirm von AdGuard.

1. Tippen Sie auf die Schaltfläche **Mit Tor integrieren**.

1. Alle erforderlichen Felder sind bereits vorausgefüllt:

    | Feld       | Wert                   |
    | ---------- | ---------------------- |
    | Proxy-Typ  | *SOCKS4* oder *SOCKS5* |
    | Proxy-Host | *127.0.0.1*            |
    | Proxy-Port | *9050*                 |

    Sie können auch auf **Proxy-Server** → **Proxy-Server hinzufügen** tippen, diese Werte manuell eingeben und Orbot als Standard-Proxy festlegen.

1. Aktivieren Sie den Haupt-Proxy-Schalter und den AdGuard-Schutz, um den Datenverkehr Ihres Geräts über den Proxy zu leiten.

    Ab jetzt leitet AdGuard den gesamten Datenverkehr über Orbot. Wenn Sie Orbot deaktivieren, wird die Internetverbindung unterbrochen, bis Sie die Einstellungen für den ausgehenden Proxy (Outbound-Proxy) in AdGuard deaktivieren.

### So verwenden Sie AdGuard mit PIA (Private Internet Access)

*Wir gehen davon aus, dass Sie PIA VPN bereits nutzen und auf Ihrem Gerät installiert haben.*

1. Öffnen Sie AdGuard und gehen Sie zu **Einstellungen** → **Filterung** → **Netzwerk** → **Proxy** → **Proxy-Server**.

1. Tippen Sie auf die Schaltfläche **Proxy-Server hinzufügen** und geben Sie die folgenden Daten ein:

    | Feld       | Wert                                 |
    | ---------- | ------------------------------------ |
    | Proxy-Typ  | *SOCKS5*                             |
    | Proxy-Host | *proxy-nl.privateinternetaccess.com* |
    | Proxy-Port | *1080*                               |

1. Sie müssen ebenfalls die Felder **Benutzername/Passwort** ausfüllen. Melden Sie sich dazu im [Client-Kontrollzentrum](https://www.privateinternetaccess.com/pages/client-sign-in) auf der PIA-Website an. Tippen Sie auf die Schaltfläche **Passwort generieren** unter dem Abschnitt **PPPTP/L2TP/SOCKS-Passwort generieren**. Es werden ein mit „x“ beginnender Benutzername und ein zufälliges Passwort angezeigt. Verwenden Sie diese, um die Felder **Proxy-Benutzername** und **Proxy-Passwort** in AdGuard auszufüllen.

1. Tippen Sie auf **Speichern und auswählen**.

1. Aktivieren Sie den Haupt-Proxy-Schalter und den AdGuard-Schutz, um den Datenverkehr Ihres Geräts über den Proxy zu leiten.

### So verwenden Sie AdGuard mit TorGuard

*Hier gehen wir davon aus, dass Sie TorGuard bereits nutzen und es auf Ihrem Gerät installiert haben.*

1. Öffnen Sie AdGuard und gehen Sie zu **Einstellungen** → **Filterung** → **Netzwerk** → **Proxy** → **Proxy-Server**.

1. Tippen Sie auf die Schaltfläche **Proxy-Server hinzufügen** und geben Sie die folgenden Daten ein:

    | Feld       | Wert                                          |
    | ---------- | --------------------------------------------- |
    | Proxy-Typ  | *SOCKS5*                                      |
    | Proxy-Host | *proxy.torguard.org* oder *proxy.torguard.io* |
    | Proxy-Port | *1080* oder *1085* oder *1090*                |

1. In die Felder **Benutzername** und **Passwort** geben Sie Ihren Proxy-Benutzernamen und Ihr Proxy-Passwort ein, die Sie bei der TorGuard-Anmeldung gewählt haben.

1. Tippen Sie auf **Speichern und auswählen**.

1. Aktivieren Sie den Haupt-Proxy-Schalter und den AdGuard-Schutz, um den Datenverkehr Ihres Geräts über den Proxy zu leiten.

### So verwenden Sie AdGuard mit NordVPN

1. Melden Sie sich bei Ihrem NordVPN-Konto an.

1. Gehen Sie zu **Dienste** → **NordVPN** → **Manuelle Einrichtung** und richten Sie Ihre Dienstanmeldedaten manuell ein.

1. An die E-Mail-Adresse, die Sie für NordVPN verwenden, erhalten Sie einen Verifizierungscode. Verwenden Sie es für Ihr NordVPN-Konto und tippen Sie dann auf *Anwenden* und *OK*, um die Änderungen zu speichern.

![Manuelle Einrichtung](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/outbound-proxy/nordvpn-manual-setup.png)

1. Öffnen Sie die AdGuard-App und gehen Sie zu **Einstellungen** → **Filterung** → **Netzwerk** → **Proxy** → **Proxy-Server** → **Proxy-Server hinzufügen**.

1. Geben Sie die folgenden Daten ein:

    | Feld       | Wert                                                                                                                                   |
    | ---------- | -------------------------------------------------------------------------------------------------------------------------------------- |
    | Proxy-Typ  | *SOCKS5*                                                                                                                               |
    | Proxy-Host | Beliebiger Server aus [dieser Liste](https://support.nordvpn.com/hc/en-us/articles/20195967385745-NordVPN-proxy-setup-for-qBittorrent) |
    | Proxy-Port | *1080*                                                                                                                                 |

1. Geben Sie Ihre NordVPN-Anmeldedaten in die Felder **Benutzername** und **Passwort** ein.

1. Tippen Sie auf **Speichern und auswählen**.

1. Aktivieren Sie den Haupt-Proxy-Schalter und den AdGuard-Schutz, um den Datenverkehr Ihres Geräts über den Proxy zu leiten.

### So verwenden Sie AdGuard mit Shadowsocks

*Wir gehen hier davon aus, dass Sie bereits einen Shadowsocks-Server und einen Client auf Ihrem Gerät konfiguriert haben.*

:::note

Sie sollten die Shadowsocks-App aus der Filterung entfernen, bevor Sie den Prozess einrichten (**App-Verwaltung** →**Shadowsocks** → **Datenverkehr durch AdGuard leiten**), um Endlosschleifen und Verbindungsabbrüche zu vermeiden.

:::

1. Öffnen Sie AdGuard und gehen Sie zu **Einstellungen** → **Filterung** → **Netzwerk** → **Proxy** → **Proxy-Server**.

1. Tippen Sie auf die Schaltfläche **Proxy-Server hinzufügen** und füllen Sie die Felder aus:

    | Feld       | Wert        |
    | ---------- | ----------- |
    | Proxy-Typ  | *SOCKS5*    |
    | Proxy-Host | *127.0.0.1* |
    | Proxy-Port | *1080*      |

1. Tippen Sie auf **Speichern und auswählen**.

1. Aktivieren Sie den Haupt-Proxy-Schalter und den AdGuard-Schutz, um den Datenverkehr Ihres Geräts über den Proxy zu leiten.

### So verwenden Sie AdGuard mit Clash

*Wir gehen davon aus, dass Sie Clash bereits auf Ihrem Gerät installiert haben.*

1. Open Clash and go to **Settings** → **Network** → **Route System Traffic** and toggle the switch on. Dadurch wird Clash in den Proxy-Modus versetzt.

1. Öffnen Sie AdGuard und wechseln Sie zu **App-Verwaltung**. Wählen Sie **Clash For Android** und deaktivieren Sie **Datenverkehr durch AdGuard leiten**. Dadurch werden Endlosschleifen im Datenverkehr vermieden.

1. Gehen Sie zu **Einstellungen** → **Filterung** → **Netzwerk** → **Proxy** → **Proxy-Server**.

1. Tippen Sie auf **Proxy-Server hinzufügen** und füllen Sie die Felder aus:

    | Feld       | Wert        |
    | ---------- | ----------- |
    | Proxy-Typ  | *SOCKS5*    |
    | Proxy-Host | *127.0.0.1* |
    | Proxy-Port | *7891*      |

## Beschränkungen

Es gibt jedoch mindestens einen Faktor, der verhindern kann, dass bestimmter Datenverkehr über den ausgehenden Proxy geleitet wird, selbst wenn die Proxy-Einstellungen von AdGuard konfiguriert wurden. Das wäre der Fall, wenn die App selbst nicht so konfiguriert ist, dass sie ihren Datenverkehr durch AdGuard führt. Dazu müssen Sie zur **App-Verwaltung** wechseln, die App auswählen und die Option **Datenverkehr durch AdGuard leiten** aktivieren.
