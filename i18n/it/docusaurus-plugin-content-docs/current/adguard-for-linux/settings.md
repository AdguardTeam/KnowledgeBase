---
title: Gestione impostazioni e protezione
sidebar_position: 3
---

## Comandi disponibili

Per ottenere una lista di tutti i comandi AdGuard disponibili, inserisci:

```sh
adguard-cli --help-all
```

## Abilita e disabilita protezione

### Abilita protezione

Per abilitare la protezione, inserisci:

```sh
adguard-cli start
```

Questo comando tenta di configurare una ridirezione al proxy.

![Avvia protezione \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/start-protection.gif)

### Disabilita protezione

Per disabilitare la protezione, inserire:

```sh
adguard-cli stop
```

Questo comando non solo ferma il proxy ma ferma anche il traffico dal reindirizzare a esso.

### Controlla lo stato della protezione

Per vedere lo stato della protezione, inserisci:

```sh
adguard-cli status
```

![Stato/Ferma protezione \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation6.png)

## Aggiornamenti

### Controlla gli aggiornamenti

Per controllare gli aggiornamenti, inserisci:

```sh
adguard-cli check-update
```

### Aggiorna AdGuard per Linux

Per aggiornare AdGuard per Linux, inserisci:

```sh
adguard-cli update
```

### Aggiorna il risultato del codice

Per vedere il risultato del codice di aggiornamento, inserisci:

```sh
adguard-cli update -v
```

## Configura AdGuard per Linux

Usa il comando `config` per configurare AdGuard per Linux. Sotto-comandi:

- `show`: Mostra la configurazione corrente in `proxy.yaml`

  ![Impostazione corrente \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation7.png)

- `set`: Configura un'opzione in `proxy.yaml`
  - `listen_ports.http_proxy`: porta HTTP di ascolto
  - `proxy_mode`: Modalità proxy (`manuale` o `automatico`)

- `get`: Ottieni lo stato attuale delle opzioni soprastanti

:::note

The Automatic mode can only be used if the following requirements are met:

- `iptables` is installed and running (either `nft` or `legacy`)
- `iptables` supports the `nat` table for both IPv4 and IPv6
- `iptables` supports the `REDIRECT` and `QUEUE` chains for both IPv4 and IPv6
- The `sudo` package is installed

:::

## Gestisci i filtri

Usa il comando `filters` per configurare AdGuard per Linux. Sotto-comandi:

- `list`: Elenca i filtri installati

  - `--all`: Vedi tutti i filtri

  ![Lista filtri \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/filter-list.png)

- `install`: installa un filtro. Inserisci l'URL del filtro che desideri installare

- `enable`: Abilita un filtro. Inserisci il nome o l'ID del filtro

  ![Abilita filtri \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/built-in-filters.png)

- `disable`: disabilita un filtro. Inserisci il nome o l'ID del filtro

- `update`: aggiorna i filtri

## Modifica dell'indirizzo di ascolto del server proxy in modalità proxy manuale

Per impostazione predefinita, il server proxy ascolta su `127.0.0.1` — l'indirizzo dell'interfaccia di rete di loopback.
Ci sono due modi per far ascoltare il server prossimo su un'interfaccia diversa:

1. Esegui `adguard-cli config set listen_address <address>` dove `<address>` è l'indirizzo su cui ascoltare.
2. Modifica il file di configurazione direttamente:
   - Per determinare il luogo del file di configurazione, esegui `adguard-cli config show | grep "Config location"`.
   - Cerca la chiave `listen_address` e imposta il suo valore come desiderato. Per ascoltare su tutte le interfacce di rete disponibili, impostare l'indirizzo di ascolto come `0.0.0.0` o `::`.

Se l'indirizzo di ascolto è impostato su qualcosa di diverso da `127.0.0.1`, allora l'autenticazione del client proxy è obbligatoria. AdGuard CLI non si avvierà a meno che l'autenticazione del proxy non sia configurata:

- Quando si esegue `adguard-cli config set listen_address <address>` dove `<address>` non è `127.0.0.1`, AdGuard CLI chiederà un nome utente e una parola d'accesso se l'autenticazione proxy non è già configurata.
- Quando si modifica il file di configurazione direttamente, cercare la chiave `listen_auth`. Imposta la sottochiave `enabled` su `true`, e `username` e `password` su valori non vuoti.

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

:::info Compatibilità

Configuring `outbound_proxy` via URL is available starting from AdGuard for Linux v1.1.26 nightly and v1.1 stable release.

:::
