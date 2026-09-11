---
title: Automatické spuštění AdGuardu pro Linux
sidebar_position: 1
---

Chcete-li, aby se AdGuard CLI spouštěl automaticky, nastavte jej jako službu systemd. Díky tomu se ochrana AdGuard spustí buď při přihlášení, nebo při spuštění systému. Vyberte možnost, která nejlépe vyhovuje vašim potřebám.

## Spustit AdGuard CLI při přihlášení

Chcete-li spouštět AdGuard CLI automaticky při přihlášení, vytvořte službu systemd na úrovni uživatele.

1. Vytvořte soubor služby `~/.config/systemd/user/adguard-cli.service` a přidejte následující konfiguraci:

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

1. Spusťte následující příkazy pro povolení služby:

```sh
systemctl --user daemon-reload
systemctl --user enable --now adguard-cli
```

## Spustit AdGuard CLI při spuštění systému

Chcete-li, aby se ochrana AdGuard spouštěla při startu systému, vytvořte službu na systémové úrovni.

1. Vytvořte soubor služby `/etc/systemd/system/adguard-cli.service` a přidejte následující konfiguraci:

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

V parametru `User=username` nahraďte `username` vsším uživ. jménem Linux.

1. Spusťte následující příkazy a službu povolte:

```sh
systemctl daemon-reload
systemctl enable --now adguard-cli
````
