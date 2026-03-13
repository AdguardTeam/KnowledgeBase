---
title: Starting AdGuard for Linux automatically
sidebar_position: 1
---

If you want AdGuard CLI to start automatically, configure it as a systemd service. This allows AdGuard protection to launch either at login or at system startup. Choose the option that best fits your needs.

## Start AdGuard CLI at login

To start AdGuard CLI automatically at login, create a user-level systemd service.

1. Create the service file `~/.config/systemd/user/adguard-cli.service` and add the following configuration:

```sh
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
2. Run the following commands to enable the service:

```sh
systemctl --user daemon-reload
systemctl --user enable --now adguard-cli
```

## Start AdGuard CLI at system startup

If you want AdGuard protection to start at system startup, create a system-level service.

1. Create the service file `/etc/systemd/system/adguard-cli.service` and add the following configuration:

```sh
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
WantedBy=default.target
```

In the `User=username` parameter, replace `username` with your Linux username.

2. Run the following commands to enable the service:

```sh
systemctl daemon-reload
systemctl enable --now adguard-cli
```
