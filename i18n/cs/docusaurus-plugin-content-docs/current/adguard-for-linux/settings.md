---
title: Sparáva nastavení a ochrany
sidebar_position: 3
---

## Dostupné příkazy

Chcete-li získat seznam všech dostupných příkazů AdGuardu, zadejte:

```sh
adguard-cli --help-all
```

## Povolení a zakázání ochrany

### Zapnout ochranu

Chcete-li povolit ochranu, zadejte:

```sh
adguard-cli start
```

Tento příkaz se pokusí nakonfigurovat přesměrování na proxy.

![Start protection \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/start-protection.gif)

### Vypnout ochranu

Chcete-li povolit zakázat, zadejte:

```sh
adguard-cli stop
```

Tento příkaz nejen zastaví proxy, ale také zastaví přesměrování na něj.

### Zkontrolovat stav ochrany

Chcete-li zobrazit stav ochrany, zadejte:

```sh
adguard-cli status
```

![Status/Stop protection \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation6.png)

## Aktualizace

### Zkontrolovat aktualizace

Chcete-li zkontrolovat aktualizace, zadejte:

```sh
adguard-cli check-update
```

### Aktualizace AdGuardu pro Linux

Chcete-li aktualizovat AdGuard pro Linux, zadejte:

```sh
adguard-cli update
```

### Aktualizace výstupu skriptu

Chcete-li zobrazit výstup skriptu aktualizace, zadejte:

```sh
adguard-cli update -v
```

## Konfigurace AdGuardu pro Linux

Pro konfiguraci AdGuardu pro Linux použijte příkaz `config`. Dílčí příkazy:

- `show`: Zobrazení aktuální konfigurace v souboru `proxy.yaml`

    ![Current setup \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation7.png)

- `set`: Konfigurace volby v souboru `proxy.yaml`
    - `listen_ports.http_proxy`: Naslouchací port HTTP
    - `proxy_mode`: Režim proxy (`manuální` nebo `automatický`)

- `get`: Zjištění aktuálního stavu výše uvedených možností

## Správa filtrů

Pro konfiguraci AdGuardu pro Linux použijte příkaz `filters`. Dílčí příkazy:

- `list`: Seznam nainstalovaných filtrů

    - `--all`: Zobrazení všech filtrů

    ![Filter list \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/filter-list.png)

- `install`: Instalace filtru. Zadejte adresu URL filtru, který chcete nainstalovat

- `enable`: Povolení filtru. Zadejte název nebo ID filtru

    ![Enable filters \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/built-in-filters.png)

- `disable`: Zakázání filtrování. Zadejte název nebo ID filtru

- `update`: Aktualizace filtrů

## Změna poslechové adresy proxy v režimu ručního proxy

Ve výchozím nastavení naslouchá proxy na `127.0.0.1` — adrese zpětného síťového rozhraní.
Existují dva způsoby, jak zajistit, aby proxy naslouchal na jiném rozhraní:

1. Run `adguard-cli config set listen_address <address>` where `<address>` is the address to listen on.
2. Edit the config file directly:
    - To determine the location of the config file, run `adguard-cli config show | grep "Config location"`.
    - Look for the `listen_address` key and set its value accordingly. To listen on all available network interfaces, set the listen address to `0.0.0.0` or `::`.

If the listen address is set to anything other than `127.0.0.1`, then proxy client authentication is required. AdGuard CLI will not start unless proxy authentication is configured:

- When running `adguard-cli config set listen_address <address>` where `<address>` is not `127.0.0.1`, AdGuard CLI will prompt for a username and password if proxy authentication is not already configured.
- When editing the config file directly, look for the `listen_auth`key. Set the `enabled` sub-key to `true`, and `username` and `password` to non-empty values.
