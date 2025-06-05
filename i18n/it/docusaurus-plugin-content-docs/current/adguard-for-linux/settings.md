---
title: Gestione impostazioni e protezione
sidebar_position: 3
---

## Available commands

Per ottenere una lista di tutti i comandi AdGuard disponibili, inserisci:

```sh
adguard-cli --help-all
```

## Abilita e disabilita protezione

### Enable protection

Per abilitare la protezione, inserisci:

```sh
adguard-cli start
```

This command attempts to configure a redirection to the proxy.

![Start protection \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/start-protection.gif)

### Disable protection

Per disabilitare la protezione, inserire:

```sh
adguard-cli stop
```

This command not only stops the proxy but also stops the trafic from redirecting to it.

### Check protection status

Per vedere lo stato della protezione, inserisci:

```sh
adguard-cli status
```

![Status/Stop protection \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation6.png)

## Updates

### Controlla gli aggiornamenti

Per controllare gli aggiornamenti, inserisci:

```sh
adguard-cli check-update
```

### Update AdGuard for Linux

Per aggiornare AdGuard per Linux, inserisci:

```sh
adguard-cli update
```

### Update script output

Per vedere il risultato del codice di aggiornamento, inserisci:

```sh
adguard-cli update -v
```

## Configura AdGuard per Linux

Usa il comando `config` per configurare AdGuard per Linux. Sotto-comandi:

- `show`: Mostra la configurazione corrente in `proxy.yaml`

    ![Current setup \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation7.png)

- `set`: Configura un'opzione in `proxy.yaml`
    - `listen_ports.http_proxy`: porta HTTP di ascolto
    - `proxy_mode`: Modalità proxy (`manuale` o `automatico`)

- `get`: Ottieni lo stato attuale delle opzioni soprastanti

## Gestisci i filtri

Usa il comando `filters` per configurare AdGuard per Linux. Sotto-comandi:

- `list`: Elenca i filtri installati

    - `--all`: Vedi tutti i filtri

    ![Filter list \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/filter-list.png)

- `install`: installa un filtro. Inserisci l'URL del filtro che desideri installare

- `enable`: Abilita un filtro. Inserisci il nome o l'ID del filtro

    ![Enable filters \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/built-in-filters.png)

- `disable`: disabilita un filtro. Inserisci il nome o l'ID del filtro

- `update`: aggiorna i filtri

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
