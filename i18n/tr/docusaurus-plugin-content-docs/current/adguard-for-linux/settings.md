---
title: Ayarlar ve koruma yönetimi
sidebar_position: 3
---

## Available commands

Mevcut tüm AdGuard komutlarının listesini almak için şunu yazın:

```sh
adguard-cli --help-all
```

## Enable and disable protection

### Enable protection

Korumayı etkinleştirmek için şunu yazın:

```sh
adguard-cli start
```

This command attempts to configure a redirection to the proxy.

![Start protection \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/start-protection.gif)

### Disable protection

Korumayı devre dışı bırakmak için şunu yazın:

```sh
adguard-cli stop
```

This command not only stops the proxy but also stops the trafic from redirecting to it.

### Check protection status

Koruma durumunu görüntülemek için şunu yazın:

```sh
adguard-cli status
```

![Status/Stop protection \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation6.png)

## Güncellemeler

### Güncellemeleri denetleyin

Güncellemeleri denetlemek için şunu yazın:

```sh
adguard-cli check-update
```

### Update AdGuard for Linux

Linux için AdGuard'ı güncellemek için şunu yazın:

```sh
adguard-cli update
```

### Update script output

To view the update script output, enter:

```sh
adguard-cli update -v
```

## Linux için AdGuard'ı yapılandırma

Linux için AdGuard'ı yapılandırmak için `config` komutunu kullanın. Alt komutlar:

- `show`: Show the current configuration in `proxy.yaml`

    ![Current setup \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation7.png)

- `set`: Configure an option in `proxy.yaml`
    - `listen_ports.http_proxy`: HTTP listening port
    - `proxy_mode`: Proxy mode (`manual` or `auto`)

- `get`: Get the current status of the above options

## Manage filters

Use the `filters` command to configure AdGuard for Linux. Alt komutlar:

- `list`: List installed filters

    - `--all`: View all filters

    ![Filter list \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/filter-list.png)

- `install`: Install a filter. Yüklemek istediğiniz filtrenin URL'sini girin

- `enable`: Enable a filter. Filtrenin adını veya kimliğini girin

    ![Enable filters \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/built-in-filters.png)

- `disable`: Disable a filter. Filtrenin adını veya kimliğini girin

- `update`: Update filters

## Changing the proxy server listen address in manual proxy mode

By default, the proxy server listens on `127.0.0.1` — the address of the loopback network interface.
There are two ways to make the proxy server listen on a different interface:

1. Run `adguard-cli config set listen_address <address>` where `<address>` is the address to listen on.
2. Yapılandırma dosyasını doğrudan düzenleyin:
    - Yapılandırma dosyasının konumunu belirlemek için `adguard-cli config show | grep "Config location"` komutunu çalıştırın.
    - Look for the `listen_address` key and set its value accordingly. To listen on all available network interfaces, set the listen address to `0.0.0.0` or `::`.

If the listen address is set to anything other than `127.0.0.1`, then proxy client authentication is required. AdGuard CLI will not start unless proxy authentication is configured:

- When running `adguard-cli config set listen_address <address>` where `<address>` is not `127.0.0.1`, AdGuard CLI will prompt for a username and password if proxy authentication is not already configured.
- When editing the config file directly, look for the `listen_auth`key. Set the `enabled` sub-key to `true`, and `username` and `password` to non-empty values.
