---
title: Settings and protection management
sidebar_position: 3
---

## Available commands

To get a list of all available AdGuard commands, enter:

    adguard-cli --help-all

## Enable and disable protection

### Enable protection

To enable protection, enter:

    adguard-cli start

This command attempts to configure a redirection to the proxy.

![Start protection *border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/start-protection.gif)

### Disable protection

To disable protection, enter:

    adguard-cli stop

This command not only stops the proxy but also stops the trafic from redirecting to it.

### Check protection status

To view the protection status, enter:

    adguard-cli status

![Status/Stop protection *border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation6.png)

## Updates

### Check for updates

To check for updates, enter:

    adguard-cli check-update

### Update AdGuard for Linux

To update AdGuard for Linux, enter:

    adguard-cli update

### Update script output

To view the update script output, enter:

    adguard-cli update -v

## Configure AdGuard for Linux

Use the `config` command to configure AdGuard for Linux. Subcommands:

- `show`: Show the current configuration in `proxy.yaml`

![Current setup *border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation7.png)

- `set`: Configure an option in `proxy.yaml`
    - `listen_ports.http_proxy`: HTTP listening port
    - `proxy_mode`: Proxy mode (`manual` or `auto`)
- `get`: Get the current status of the above options

## Manage filters

Use the `filters` command to configure AdGuard for Linux. Subcommands:

- `list`: List installed filters
    - `--all`: View all filters

![Filter list *border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/filter-list.png)

- `install`: Install a filter. Enter the URL of the filter you want to install
- `enable`: Enable a filter. Enter the name or ID of the filter

![Enable filters *border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/built-in-filters.png)

- `disable`: Disable a filter. Enter the name or ID of the filter
- `update`: Update filters
