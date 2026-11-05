---
title: Automatisk start af AdGuard til Linux
sidebar_position: 1
---

Ønskes AdGuard CLI startet automatisk, opsæt den som en systemd-tjeneste. Dette tillader AdGuard-beskyttelsen at starte enten ved indlogning eller systemopstart. Vælg den mulighed, der bedst matcher behovet.

## Start AdGuard CLI ved indlogning

For at autostarte AdGuard CLI ved indlogning, opret en brugerniveau-systemd-tjeneste.

1. Opret tjenestefilen `~/.config/systemd/user/adguard-cli.service` og tilføj flg. opsætning:

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

1. Eksekvér flg. kommandoer for at aktivere tjenesten:

```sh
systemctl --user daemon-reload
systemctl --user enable --now adguard-cli
```

## Start AdGuard CLI ved systemopstart

Ønskes AdGuard-beskyttelsen startet ved systemopstart, opret en systemniveautjeneste.

1. Opret tjenestefilen `/etc/systemd/system/adguard-cli.service` og tilføj flg. opsætning:

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

I `User=username`-parameterden, erstat `username` med det aktuelle Linux-brugernavn.

1. Eksekvér flg. kommandoer for at aktivere tjenesten:

```sh
systemctl daemon-reload
systemctl enable --now adguard-cli
````
