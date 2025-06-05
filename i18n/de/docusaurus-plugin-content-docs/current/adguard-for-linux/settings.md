---
title: Einstellungen und Schutzverwaltung
sidebar_position: 3
---

## Available commands

Um eine Liste aller verfügbaren AdGuard-Befehle zu erhalten, geben Sie ein:

```sh
adguard-cli --help-all
```

## Schutz aktivieren und deaktivieren

### Enable protection

Um den Schutz zu aktivieren, geben Sie ein:

```sh
adguard-cli start
```

This command attempts to configure a redirection to the proxy.

![Start protection \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/start-protection.gif)

### Disable protection

Um den Schutz zu deaktivieren, geben Sie ein:

```sh
adguard-cli stop
```

This command not only stops the proxy but also stops the trafic from redirecting to it.

### Check protection status

Um den Schutzstatus anzuzeigen, geben Sie ein:

```sh
adguard-cli status
```

![Status/Stop protection \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation6.png)

## Updates

### Auf Aktualisierungen prüfen

Um auf Aktualisierungen zu prüfen, geben Sie ein:

```sh
adguard-cli check-update
```

### Update AdGuard for Linux

Um AdGuard für Linux zu aktualisieren, geben Sie ein:

```sh
adguard-cli update
```

### Update script output

Um die Ausgabe des Aktualisierungsskripts anzuzeigen, geben Sie ein:

```sh
adguard-cli update -v
```

## AdGuard für Linux konfigurieren

Verwenden Sie den Befehl `config`, um AdGuard für Linux zu konfigurieren. Unterbefehle:

- `show`: Die aktuelle Konfiguration in `proxy.yaml` anzeigen

    ![Current setup \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation7.png)

- `set`: Eine Option in `proxy.yaml` konfigurieren
    - `listen_ports.http_proxy`: HTTP-Lauschport
    - `proxy_mode`: Proxy-Modus (`manual` oder `auto`)

- `get`: Den aktuellen Status der oben genannten Optionen abrufen

## Filter verwalten

Verwenden Sie den Befehl `filters`, um AdGuard für Linux zu konfigurieren. Unterbefehle:

- `list`: Liste der installierten Filter

    - `--all`: Alle Filter anzeigen

    ![Filter list \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/filter-list.png)

- `install`: Einen Filter installieren. Geben Sie die URL des Filters ein, den Sie installieren möchten

- `enable`: Einen Filter aktivieren. Geben Sie den Namen oder die ID des Filters ein

    ![Enable filters \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/built-in-filters.png)

- 'disable': Einen Filter deaktivieren. Geben Sie den Namen oder die ID des Filters ein

- 'update': Filter aktualisieren

## Changing the proxy server listen address in manual proxy mode

By default, the proxy server listens on `127.0.0.1` — the address of the loopback network interface.
There are two ways to make the proxy server listen on a different interface:

1. Run `adguard-cli config set listen_address <address>` where `<address>` is the address to listen on.
2. Edit the config file directly:
    - To determine the location of the config file, run `adguard-cli config show | grep "Config location"`.
    - Look for the `listen_address` key and set its value accordingly. To listen on all available network interfaces, set the listen address to `0.0.0.0` or `::`.

If the listen address is set to anything other than `127.0.0.1`, then proxy client authentication is required. AdGuard CLI will not start unless proxy authentication is configured:

- When running `adguard-cli config set listen_address <address>` where `<address>` is not `127.0.0.1`, AdGuard CLI will prompt for a username and password if proxy authentication is not already configured.
- When editing the config file directly, look for the `listen_auth`key. Set the `enabled` sub-key to `true`, and `username` and `password` to non-empty values.
