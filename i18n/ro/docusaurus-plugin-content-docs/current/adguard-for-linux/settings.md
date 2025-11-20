---
title: Settings and protection management
sidebar_position: 3
---

## Available commands

To get a list of all available AdGuard commands, enter:

```sh
adguard-cli --help-all
```

## Enable and disable protection

### Enable protection

To enable protection, enter:

```sh
adguard-cli start
```

This command attempts to configure a redirection to the proxy.

![Start protection \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/start-protection.gif)

### Disable protection

To disable protection, enter:

```sh
adguard-cli stop
```

This command not only stops the proxy but also stops the trafic from redirecting to it.

### Check protection status

To view the protection status, enter:

```sh
adguard-cli status
```

![Status/Stop protection \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation6.png)

## Updates

### Căutare actualizări

To check for updates, enter:

```sh
adguard-cli check-update
```

### Update AdGuard for Linux

To update AdGuard for Linux, enter:

```sh
adguard-cli update
```

### Update script output

To view the update script output, enter:

```sh
adguard-cli update -v
```

## Configure AdGuard for Linux

Use the `config` command to configure AdGuard for Linux. Subcommands:

- `show`: Show the current configuration in `proxy.yaml`

  ![Current setup \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation7.png)

- `set`: Configure an option in `proxy.yaml`
  - `listen_ports.http_proxy`: HTTP listening port
  - `proxy_mode`: Proxy mode (`manual` or `auto`)

- `get`: Get the current status of the above options

## Manage filters

Use the `filters` command to configure AdGuard for Linux. Subcommands:

- `list`: List installed filters

  - `--all`: View all filters

  ![Filter list \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/filter-list.png)

- `install`: Install a filter. Enter the URL of the filter you want to install

- `enable`: Enable a filter. Enter the name or ID of the filter

  ![Enable filters \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/built-in-filters.png)

- `disable`: Disable a filter. Enter the name or ID of the filter

- `update`: Update filters

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

## Configure outbound proxy

You can configure `outbound_proxy` if you want AdGuard CLI to work through another proxy server.

There are two ways to configure it:

### 1. Configure via URL (recommended)

Instead of setting each option step by step, you can set all parameters in a single line using a URL:

```sh
adguard-cli config set outbound_proxy https://user:pass@host:port
```

:::info

Supported modes are HTTP, HTTPS, SOCKS4, and SOCKS5.

:::

You can also quickly enable or disable `outbound_proxy`:

```sh
adguard-cli config set outbound_proxy false
```

Or quickly clear the settings:

```sh
adguard-cli config set outbound_proxy ""
```

### 2. Configure individual parameters

The ability to adjust specific parameters is also available:

```sh
adguard-cli config set outbound_proxy.enabled true
adguard-cli config set outbound_proxy.host localhost
adguard-cli config set outbound_proxy.port 3128
adguard-cli config set outbound_proxy.username user
adguard-cli config set outbound_proxy.password pass
```

Disable certificate verification for HTTPS proxies:

```sh
adguard-cli config set outbound_proxy.trust_any_certificate true
```

Enable SOCKS5 proxy for UDP traffic:

```sh
adguard-cli config set outbound_proxy.udp_through_socks5_enabled true
```

:::note

If your SOCKS5 proxy does not support UDP, connections may fail.

:::

## Per-app AdGuard CLI configuration

Users often need to enable filtering manually for certain browsers. AdGuard for Linux supports **per-app configuration**, allowing you to apply settings or rules individually to each application instead of system-wide.

For details, refer to the `apps` section in `proxy.yaml`.

A set of pre-configured entries for popular web browsers is included by default in `browsers.yaml`.

### Checking the current configuration

To view the current `outbound_proxy` configuration, enter:

```sh
adguard-cli config show outbound_proxy
```

:::info Compatibilitate

Configuring `outbound_proxy` via URL is available starting from AdGuard for Linux v1.1.26 nightly and v1.1 stable release.

:::
