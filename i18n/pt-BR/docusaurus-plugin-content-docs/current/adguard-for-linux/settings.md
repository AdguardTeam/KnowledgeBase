---
title: Gerenciamento das configurações e da proteção
sidebar_position: 3
---

## Comandos disponíveis

Para obter uma lista de todos os comandos disponíveis no AdGuard, digite:

```sh
adguard-cli --help-all
```

## Ativar e desativar a proteção

### Ativar proteção

Para ativar a proteção, insira:

```sh
adguard-cli start
```

Este comando tenta configurar um redirecionamento para o proxy.

![Iniciar proteção \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/start-protection.gif)

### Desativar proteção

Para desativar a proteção, digite:

```sh
adguard-cli stop
```

Este comando não apenas interrompe o proxy, mas também impede o tráfego de ser redirecionado para ele.

### Verificar status da proteção

Para visualizar o status da proteção, digite:

```sh
adguard-cli status
```

![Status/Parar proteção \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation6.png)

## Atualizações

### Verificar atualizações

Para verificar se há atualizações, digite:

```sh
adguard-cli check-update
```

### Atualizar o AdGuard para Linux

Para atualizar o AdGuard para Linux, digite:

```sh
adguard-cli update
```

### Atualizar saída do script

Para visualizar o output do script de atualização, digite:

```sh
adguard-cli update -v
```

## Configurando o AdGuard para Linux

Use o comando `config` para configurar o AdGuard para Linux. Subcomandos:

- `show`: Mostra a configuração atual em `proxy.yaml`

  ![Configuração atual \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation7.png)

- `set`: Configura uma opção em `proxy.yaml`
  - `listen_ports.http_proxy`: Porta de escuta HTTP
  - `proxy_mode`: Modo de proxy (`manual` ou `auto`)

- `get`: Obtém o status atual das opções acima

## Gerenciamento de filtros

Use o comando `filters` para configurar o AdGuard para Linux. Subcomandos:

- `list`: Listar filtros instalados

  - `--all`: Ver todos os filtros

  ![Lista de filtros \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/filter-list.png)

- `instalar`: Instalar um filtro. Digite a URL da filtragem que você deseja instalar

- `enable`: Ativa um filtro. Digite o nome ou ID do filtro

  ![Ativar filtros \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/built-in-filters.png)

- `disable`: Desabilita um filtro. Digite o nome ou ID do filtro

- `update`: Atualiza os filtros

## Alterando o endereço de escuta do proxy no modo manual

Por padrão, o servidor do proxy escuta em `127.0.0.1` — o endereço da interface de rede de loopback.
Existem duas maneiras de fazer o proxy ouvir em uma interface diferente:

1. Execute `adguard-cli config set listen_address <endereço>` onde `<endereço>` é o endereço para escutar.
2. Editar o arquivo de configuração diretamente:
   - Para determinar a localização do arquivo de configuração, execute `adguard-cli config show | grep "Config location"`.
   - Procure a chave `listen_address` e defina seu valor adequadamente. Para escutar em todas as interfaces de rede disponíveis, defina o endereço de escuta como `0.0.0.0` ou `::`.

Se o endereço de escuta estiver definido para qualquer coisa diferente de `127.0.0.1`, então a autenticação do cliente proxy é obrigatória. O AdGuard CLI não será iniciado, a menos que a autenticação do proxy esteja configurada:

- Ao executar `adguard-cli config set listen_address <address>` onde `<address>` não é `127.0.0.1`, o AdGuard CLI solicitará um nome de usuário e uma senha se a autenticação do proxy não estiver configurada.
- Ao editar o arquivo de configuração diretamente, procure pela chave `listen_auth`. Defina a sub-chave `enabled` como `true`, e `username` e `password` como valores não vazios.

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

### Checking the current configuration

To view the current `outbound_proxy` configuration, enter:

```sh
adguard-cli config show outbound_proxy
```

:::info Compatibilidade

Configuring `outbound_proxy` via URL is available starting from AdGuard for Linux v1.1.26 nightly and v1.1 stable release.

:::
