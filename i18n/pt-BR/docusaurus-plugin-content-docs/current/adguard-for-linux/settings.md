---
title: Gerenciamento das configurações e da proteção
sidebar_position: 3
---

## Available commands

Para obter uma lista de todos os comandos disponíveis no AdGuard, digite:

```sh
adguard-cli --help-all
```

## Ativar e desativar a proteção

### Enable protection

Para ativar a proteção, insira:

```sh
adguard-cli start
```

This command attempts to configure a redirection to the proxy.

![Start protection \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/start-protection.gif)

### Disable protection

Para desativar a proteção, digite:

```sh
adguard-cli stop
```

This command not only stops the proxy but also stops the trafic from redirecting to it.

### Check protection status

Para visualizar o status da proteção, digite:

```sh
adguard-cli status
```

![Status/Stop protection \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation6.png)

## Updates

### Verificar atualizações

Para verificar se há atualizações, digite:

```sh
adguard-cli check-update
```

### Update AdGuard for Linux

Para atualizar o AdGuard para Linux, digite:

```sh
adguard-cli update
```

### Update script output

Para visualizar o output do script de atualização, digite:

```sh
adguard-cli update -v
```

## Configurando o AdGuard para Linux

Use o comando `config` para configurar o AdGuard para Linux. Subcomandos:

- `show`: Mostra a configuração atual em `proxy.yaml`

    ![Current setup \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation7.png)

- `set`: Configura uma opção em `proxy.yaml`
    - `listen_ports.http_proxy`: Porta de escuta HTTP
    - `proxy_mode`: Modo de proxy (`manual` ou `auto`)

- `get`: Obtém o status atual das opções acima

## Gerenciamento de filtros

Use o comando `filters` para configurar o AdGuard para Linux. Subcomandos:

- `list`: Listar filtros instalados

    - `--all`: Ver todos os filtros

    ![Filter list \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/filter-list.png)

- `instalar`: Instalar um filtro. Digite a URL da filtragem que você deseja instalar

- `enable`: Ativa um filtro. Digite o nome ou ID do filtro

    ![Enable filters \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/built-in-filters.png)

- `disable`: Desabilita um filtro. Digite o nome ou ID do filtro

- `update`: Atualiza os filtros

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
