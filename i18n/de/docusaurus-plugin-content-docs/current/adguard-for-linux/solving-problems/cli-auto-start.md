---
title: AdGuard für Linux automatisch starten
sidebar_position: 1
---

Wenn Sie möchten, dass AdGuard CLI automatisch gestartet wird, richten Sie es als systemd-Dienst ein. Dadurch kann der Schutz durch AdGuard entweder bei der Anmeldung oder beim Systemstart aktiviert werden. Wählen Sie die Option, die Ihren Anforderungen am besten entspricht.

## AdGuard CLI beim Anmelden starten

Um AdGuard CLI beim Anmelden automatisch zu starten, erstellen Sie einen systemd-Dienst auf Benutzerebene.

1. Erstellen Sie die Dienstdatei `~/.config/systemd/user/adguard-cli.service` und fügen Sie die folgende Konfiguration hinzu:

```ini
[Unit]
Description=AdGuard CLI
After=network.target

[Service]
Type=forking
WorkingDirectory=/opt/adguard-cli
ExecStart=/opt/adguard-cli/adguard-cli start
ExecStop=/opt/adguard-cli/adguard-cli stop
Restart=always
TimeoutStartSec=0
TimeoutStopSec=0
StandardOutput=journal
RemainAfterExit=yes

[Install]
WantedBy=default.target
```

1. Führen Sie die folgenden Befehle aus, um den Dienst zu aktivieren:

```sh
systemctl --user daemon-reload
systemctl --user enable --now adguard-cli
```

## AdGuard CLI beim Systemstart ausführen

Wenn Sie möchten, dass der Schutz durch AdGuard beim Systemstart aktiviert wird, erstellen Sie einen Dienst auf Systemebene.

1. Erstellen Sie die Dienstdatei `/etc/systemd/system/adguard-cli.service` und fügen Sie die folgende Konfiguration hinzu:

````ini
[Unit]
Description=AdGuard CLI
After=network.target

[Service]
Type=forking
WorkingDirectory=/opt/adguard-cli
ExecStart=/opt/adguard-cli/adguard-cli start
ExecStop=/opt/adguard-cli/adguard-cli stop
Restart=always
TimeoutStartSec=0
TimeoutStopSec=0
StandardOutput=journal
RemainAfterExit=yes
User=username

[Install]
WantedBy=multi-user.target

Ersetzen Sie im Parameter `User=username` `username` durch Ihren Linux-Benutzernamen.

1. Führen Sie die folgenden Befehle aus, um den Dienst zu aktivieren:

```sh
systemctl daemon-reload
systemctl enable --now adguard-cli
````
