---
title: So legen Sie App-Ausschlüsse und benutzerdefinierte Filter fest
sidebar_position: 5
---

In der AdGuard CLI ist es nicht möglich, App-Ausschlüsse aus anderen Versionen des Programms zu importieren. Sie können jedoch die erforderlichen Ausschlüsse und Filter manuell erstellen, indem Sie mehrere Konfigurationsdateien im Arbeitsverzeichnis der App bearbeiten.

## So fügen Sie Ausschlüsse hinzu

Arbeitsverzeichnis von AdGuard CLI:

- Linux: `~/.local/share/adguard-cli/`
- macOS: `~/Library/Application Support/adguard-cli/`

In diesem Ordner befinden sich mehrere wichtige Dateien:

1. `browsers.yaml` – eine Liste von Browsern (Safari, Chrome, Firefox usw.). Hier können Sie das Filtern von HTTPS-Verbindungen für einzelne Browser aktivieren oder deaktivieren oder diese vollständig vom Filtern ausschließen.

**Beispiel `browsers.yaml` (für Linux)**:

```sh
- name: firefox
  action: default
- name: chrome
  action: default
- name: chromium
  action: default
- name: brave
  action: default
```

**Beispiel `browsers.yaml` (für macOS)**:

```sh
- name: com.apple.Safari
  action: default
- name: com.google.Chrome
  action: default
- name: org.mozilla.firefox
  action: default
- name: com.brave.Browser
  action: default
```

Um die HTTPS-Filterung zu deaktivieren, ersetzen Sie `default` durch `bypass_https`. Um die App vollständig von der Filterung auszuschließen, ersetzen Sie `default` durch `bypass`.

1. `proxy.yaml` — die Hauptkonfigurationsdatei. Es gibt einen Bereich für Apps, in dem Ausschlüsse für andere Apps festgelegt werden können.

**Beispiel `proxy.yaml`**:

```sh
  - include-list: browsers.yaml
  - name: '*vpn*'
    action: 'bypass'          
    skip_outbound_proxy: true
  - name: '*'
    action: 'bypass_https'   
```

:::note

Unter **Linux** geben Sie den Namen der ausführbaren Datei an (`chrome`, `firefox` usw.). Unter **macOS** geben Sie die Bundle-ID an, z. B. `com.google.Chrome`, `org.mozilla.firefox`.

:::

## So fügen Sie benutzerdefinierte Filter hinzu

Das Arbeitsverzeichnis enthält die Datei `user.txt`, in der Sie Ihre eigenen Regeln zum Sperren oder Zulassen von Websites hinzufügen können. Wenn Sie eine eigene Liste mit Regeln im `.txt`-Format erstellt haben, verbinden Sie diese über `proxy.yaml`:

```sh
filters:
  - 'flm://'
  - 'user.txt'
  - 'my_filter.txt' # Verbinden Ihrer eigenen Datei
```
