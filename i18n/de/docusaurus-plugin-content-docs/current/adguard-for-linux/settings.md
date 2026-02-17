---
title: Einstellungen und Schutzverwaltung
sidebar_position: 3
---

## Verfügbare Befehle

Um eine Liste aller verfügbaren AdGuard-Befehle zu erhalten, geben Sie ein:

```sh
adguard-cli --help-all
```

## Schutz aktivieren und deaktivieren

### Schutz aktivieren

Um den Schutz zu aktivieren, geben Sie ein:

```sh
adguard-cli start
```

Dieser Befehl versucht, eine Weiterleitung zum Proxy zu konfigurieren.

![Schutz starten \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/start-protection.gif)

### Schutz deaktivieren

Um den Schutz zu deaktivieren, geben Sie ein:

```sh
adguard-cli stop
```

Dieser Befehl stoppt nicht nur den Proxy, sondern auch die Weiterleitung des Datenverkehrs zu ihm.

### Schutzstatus prüfen

Um den Schutzstatus anzuzeigen, geben Sie ein:

```sh
adguard-cli status
```

![Status/Schutz stoppen \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation6.png)

## Aktualisierungen

### Auf Aktualisierungen prüfen

Um auf Aktualisierungen zu prüfen, geben Sie ein:

```sh
adguard-cli check-update
```

### AdGuard für Linux aktualisieren

Um AdGuard für Linux zu aktualisieren, geben Sie ein:

```sh
adguard-cli update
```

### Skriptausgabe aktualisieren

Um die Ausgabe des Aktualisierungsskripts anzuzeigen, geben Sie ein:

```sh
adguard-cli update -v
```

## AdGuard für Linux konfigurieren

Verwenden Sie den Befehl `config`, um AdGuard für Linux zu konfigurieren. Unterbefehle:

- `show`: Die aktuelle Konfiguration in `proxy.yaml` anzeigen

  ![Aktuelle Einrichtung \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation7.png)

- `set`: Eine Option in `proxy.yaml` konfigurieren
  - `listen_ports.http_proxy`: HTTP-Lauschport
  - `proxy_mode`: Proxy-Modus (`manual` oder `auto`)

- `get`: Den aktuellen Status der oben genannten Optionen abrufen

:::note

Der Automatikmodus kann nur verwendet werden, wenn folgende Voraussetzungen erfüllt sind:

- `iptables` ist installiert und wird ausgeführt (entweder `nft` oder `legacy`)
- `iptables` unterstützt die `nat`-Tabelle sowohl für IPv4 als auch für IPv6
- `iptables` unterstützt die `REDIRECT`- und `QUEUE`-Ketten sowohl für IPv4 als auch für IPv6
- Das Paket `sudo` wurde installiert

:::

## Filter verwalten

Verwenden Sie den Befehl `filters`, um AdGuard für Linux zu konfigurieren. Unterbefehle:

- `list`: Liste der installierten Filter

  - `--all`: Alle Filter anzeigen

  ![Filterliste \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/filter-list.png)

- `install`: Einen Filter installieren. Geben Sie die URL des Filters ein, den Sie installieren möchten

- `enable`: Einen Filter aktivieren. Geben Sie den Namen oder die ID des Filters ein

  ![Filter aktivieren \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/built-in-filters.png)

- 'disable': Einen Filter deaktivieren. Geben Sie den Namen oder die ID des Filters ein

- 'update': Filter aktualisieren

## Lauschadresse des Proxyservers im manuellen Proxymodus ändern

Standardmäßig lauscht der Proxyserver auf `127.0.0.1` — die Adresse der Loopback-Netzwerkschnittstelle.
Es gibt zwei Möglichkeiten, den Proxyserver an einer anderen Schnittstelle lauschen zu lassen:

1. Führen Sie `adguard-cli config set listen_address <address>` aus, wobei `<address>` die Adresse ist, auf die gelauscht werden soll.
2. Konfigurationsdatei direkt bearbeiten:
   - Um den Speicherort der Konfigurationsdatei zu ermitteln, führen Sie `adguard-cli config show | grep "Config location"` aus.
   - Suchen Sie nach dem Schlüssel `listen_address` und setzen Sie dessen Wert entsprechend. Um auf allen verfügbaren Netzwerkschnittstellen zu lauschen, setzen Sie die Listen-Adresse auf `0.0.0.0` oder `::`.

Wenn die Lauschadresse auf einen anderen Wert als `127.0.0.1` eingestellt ist, ist eine Authentifizierung des Proxy-Clients erforderlich. AdGuard CLI startet nicht, wenn keine Proxy-Authentifizierung konfiguriert ist:

- Wenn Sie `adguard-cli config set listen_address <address>` ausführen, wobei `<address>` nicht `127.0.0.1` ist, wird AdGuard CLI nach einem Benutzernamen und Passwort fragen, wenn die Proxy-Authentifizierung nicht bereits konfiguriert ist.
- Wenn Sie die Konfigurationsdatei direkt bearbeiten, suchen Sie nach dem Schlüssel `listen_auth`. Setzen Sie den Unterschlüssel `enabled` auf `true` und geben Sie Werte für `username` und `password` ein.

## Ausgehenden Proxy konfigurieren

Sie können `outbound_proxy` konfigurieren, wenn Sie möchten, dass AdGuard CLI einen anderen Proxy-Server verwendet.

Es gibt zwei Möglichkeiten, dies zu konfigurieren:

### 1. Über URL konfigurieren (empfohlen)

Anstatt jede Option Schritt für Schritt festzulegen, können Sie alle Parameter in einer einzigen Zeile mithilfe einer URL festlegen:

```sh
adguard-cli config set outbound_proxy https://user:pass@host:port
```

:::info

Unterstützte Modi sind HTTP, HTTPS, SOCKS4 und SOCKS5.

:::

Sie können `outbound_proxy` auch schnell aktivieren oder deaktivieren:

```sh
adguard-cli config set outbound_proxy false
```

Oder löschen Sie schnell die Einstellungen:

```sh
adguard-cli config set outbound_proxy ""
```

### 2. Eigene Parameter festlegen

Die Möglichkeit, bestimmte Parameter anzupassen, ist ebenfalls verfügbar:

```sh
adguard-cli config set outbound_proxy.enabled true
adguard-cli config set outbound_proxy.host localhost
adguard-cli config set outbound_proxy.port 3128
adguard-cli config set outbound_proxy.username user
adguard-cli config set outbound_proxy.password pass
```

Zertifikatsüberprüfung für HTTPS-Proxys deaktivieren:

```sh
adguard-cli config set outbound_proxy.trust_any_certificate true
```

SOCKS5-Proxy für UDP-Datenverkehr aktivieren:

```sh
adguard-cli config set outbound_proxy.udp_through_socks5_enabled true
```

:::note

Wenn Ihr SOCKS5-Proxy UDP nicht unterstützt, können Verbindungen fehlschlagen.

:::

## AdGuard CLI-Konfiguration pro App

Benutzer müssen das Filtern für bestimmte Browser oft manuell aktivieren. AdGuard für Linux unterstützt die **Konfiguration pro App**, sodass Sie Einstellungen oder Regeln individuell für jede Anwendung anwenden können, anstatt sie systemweit zu übernehmen.

Weitere Informationen finden Sie im Abschnitt `apps` in `proxy.yaml`.

Eine Reihe vorkonfigurierter Einträge für gängige Webbrowser ist standardmäßig in `browsers.yaml` enthalten.

### Überprüfung der aktuellen Konfiguration

Um die aktuelle Konfiguration von `outbound_proxy` anzuzeigen, geben Sie Folgendes ein:

```sh
adguard-cli config show outbound_proxy
```

:::info Kompatibilität

Die Konfiguration von `outbound_proxy` über URL ist ab AdGuard für Linux v1.1.26 Nightly und v1.1 Stable Release verfügbar.

:::

## Einstellungen exportieren und importieren

Mit der Export-/Importfunktion können Sie Ihre AdGuard-CLI-Konfiguration sichern und auf demselben oder einem anderen System wiederherstellen. Dazu gehören Filter, Proxy-Einstellungen und andere Konfigurationseistellungen.

### Einstellungen exportieren

Um die aktuellen AdGuard-CLI-Einstellungen in ein ZIP-Archiv zu exportieren, verwenden Sie:

```sh
adguard-cli export-settings
```

Sie können den Ausgabepfad mit dem Parameter `-o` oder `--output` angeben. Dies kann entweder ein bestimmter Dateipfad oder ein Ordner sein:

```sh
# Export to a specific file
adguard-cli export-settings -o "/path/to/settings.zip"

# Export to a directory (archive will be created with a standard name)
adguard-cli export-settings -o "/path/to/directory"
```

Wenn kein Ausgabepfad angegeben ist, werden die Einstellungen unter einem Standardnamen in das Arbeitsverzeichnis exportiert. Nach erfolgreichem Export zeigt der Befehl den vollständigen Pfad an, in dem das Archiv erstellt wurde.

### Einstellungen importieren

Um AdGuard CLI-Einstellungen aus einem ZIP-Archiv zu importieren, verwenden Sie:

```sh
adguard-cli import-settings -i "/path/to/settings.zip"
```

Die Option `-i` oder `--input` ist erforderlich und gibt den Pfad zum zu importierenden Archiv mit den Einstellungen an.
