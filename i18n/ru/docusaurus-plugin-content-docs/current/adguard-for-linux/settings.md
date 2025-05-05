---
title: Настройки и управление защитой
sidebar_position: 3
---

## Available commands

Чтобы увидеть список всех доступных команд AdGuard, введите:

```sh
adguard-cli --help-all
```

## Включить и отключить защиту

### Enable protection

Чтобы включить защиту, введите:

```sh
adguard-cli start
```

This command attempts to configure a redirection to the proxy.

![Start protection \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/start-protection.gif)

### Disable protection

Чтобы отключить защиту, введите:

```sh
adguard-cli stop
```

This command not only stops the proxy but also stops the trafic from redirecting to it.

### Check protection status

Чтобы просмотреть статус защиты, введите:

```sh
adguard-cli status
```

![Status/Stop protection \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation6.png)

## Updates

### Проверить обновления

Чтобы проверить наличие обновлений, введите:

```sh
adguard-cli check-update
```

### Update AdGuard for Linux

Чтобы обновить AdGuard для Linux, введите:

```sh
adguard-cli update
```

### Update script output

Чтобы просмотреть вывод скрипта обновления, введите:

```sh
adguard-cli update -v
```

## Настройте AdGuard для Linux

Используйте команду `config` для настройки AdGuard для Linux. Подкоманды:

- `show`: показать текущую конфигурацию в `proxy.yaml`

    ![Current setup \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation7.png)

- `set`: настроить параметр в `proxy.yaml`
    - `listen_ports.http_proxy`: порт прослушивания HTTP
    - `proxy_mode`: режим прокси-сервера (`manual` или `auto`)

- `get`: получить текущий статус указанных выше опций

## Управлять фильтрами

Используйте команду `filters` для настройки AdGuard для Linux. Подкоманды:

- `list`: список установленных фильтров

    - `--all`: просмотреть все фильтры

    ![Filter list \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/filter-list.png)

- `install`: установить фильтр. Введите URL-адрес фильтра, который хотите установить

- `enable`: включить фильтр. Введите имя или ID фильтра

    ![Enable filters \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/built-in-filters.png)

- `disable`: отключить фильтр. Введите имя или ID фильтра

- `update`: обновить фильтры

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
