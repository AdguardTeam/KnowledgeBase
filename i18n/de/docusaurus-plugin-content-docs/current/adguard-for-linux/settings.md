---
title: Einstellungen und Schutzverwaltung
sidebar_position: 3
---

Um eine Liste aller verfügbaren AdGuard-Befehle zu erhalten, geben Sie ein:

```
adguard-cli --help-all
```

## Schutz aktivieren und deaktivieren

Um den Schutz zu aktivieren, geben Sie ein:

```
adguard-cli start
```

Um den Schutz zu deaktivieren, geben Sie ein:

```
adguard-cli stop
```

Um den Schutzstatus anzuzeigen, geben Sie ein:

```
adguard-cli status
```

## Auf Aktualisierungen prüfen

Um auf Aktualisierungen zu prüfen, geben Sie ein:

```
adguard-cli check-update
```

Um AdGuard für Linux zu aktualisieren, geben Sie ein:

```
adguard-cli update
```

Um die Ausgabe des Aktualisierungsskripts anzuzeigen, geben Sie ein:

```
adguard-cli update -v
```

## AdGuard für Linux konfigurieren

Verwenden Sie den Befehl `config`, um AdGuard für Linux zu konfigurieren. Unterbefehle:

- `show`: Die aktuelle Konfiguration in `proxy.yaml` anzeigen
- `set`: Eine Option in `proxy.yaml` konfigurieren
    - `listen_ports.http_proxy`: HTTP-Lauschport
    - `proxy_mode`: Proxy-Modus (`manual` oder `auto`)
- `get`: Den aktuellen Status der oben genannten Optionen abrufen

## Filter verwalten

Verwenden Sie den Befehl `filters`, um AdGuard für Linux zu konfigurieren. Unterbefehle:

- `list`: Liste der installierten Filter
    - `--all`: Alle Filter anzeigen
- `install`: Einen Filter installieren. Geben Sie die URL des Filters ein, den Sie installieren möchten
- `enable`: Einen Filter aktivieren. Geben Sie den Namen oder die ID des Filters ein
- 'disable': Einen Filter deaktivieren. Geben Sie den Namen oder die ID des Filters ein
- 'update': Filter aktualisieren
