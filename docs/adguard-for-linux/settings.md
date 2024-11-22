---
title: Settings and protection management
sidebar_position: 3
---

To get a list of all available AdGuard commands, enter:

    adguard-cli --help-all

## Enable and disable protection

To enable protection, enter:

    adguard-cli start

To disable protection, enter:

    adguard-cli stop

To view the protection status, enter:

    adguard-cli status

## Check for updates

To check for updates, enter:

    adguard-cli check-update

To update AdGuard for Linux, enter:

    adguard-cli update

To view the update script output, enter:

    adguard-cli update -v

## Configure AdGuard for Linux

Use the `config` command to configure AdGuard for Linux. Subcommands:

- `show`: Show the current configuration in `proxy.yaml`
- `set`: Configure an option in `proxy.yaml`
    - `listen_ports.http_proxy`: HTTP listening port
    - `proxy_mode`: Proxy mode (`manual` or `auto`)
- `get`: Get the current status of the above options

## Manage filters

Use the `filters` command to configure AdGuard for Linux. Subcommands:

- `list`: List installed filters
    - `--all`: View all filters
- `install`: Install a filter. Enter the URL of the filter you want to install
- `enable`: Enable a filter. Enter the filter name or ID
- `disable`: Disable a filter. Enter the filter name or ID
- `update`: Update filters
