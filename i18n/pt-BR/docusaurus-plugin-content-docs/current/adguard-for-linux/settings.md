---
title: Gerenciamento das configurações e da proteção
sidebar_position: 3
---

Para obter uma lista de todos os comandos disponíveis no AdGuard, digite:

```
adguard-cli --help-all
```

## Ativar e desativar a proteção

Para ativar a proteção, insira:

```
adguard-cli start
```

Para desativar a proteção, digite:

```
adguard-cli stop
```

Para visualizar o status da proteção, digite:

```
adguard-cli status
```

## Verificar atualizações

Para verificar se há atualizações, digite:

```
adguard-cli check-update
```

Para atualizar o AdGuard para Linux, digite:

```
adguard-cli update
```

Para visualizar o output do script de atualização, digite:

```
adguard-cli update -v
```

## Configurando o AdGuard para Linux

Use o comando `config` para configurar o AdGuard para Linux. Subcomandos:

- `show`: Mostra a configuração atual em `proxy.yaml`
- `set`: Configura uma opção em `proxy.yaml`
    - `listen_ports.http_proxy`: Porta de escuta HTTP
    - `proxy_mode`: Modo de proxy (`manual` ou `auto`)
- `get`: Obtém o status atual das opções acima

## Gerenciamento de filtros

Use o comando `filters` para configurar o AdGuard para Linux. Subcomandos:

- `list`: Listar filtros instalados
    - `--all`: Ver todos os filtros
- `instalar`: Instalar um filtro. Digite a URL da filtragem que você deseja instalar
- `enable`: Ativa um filtro. Digite o nome ou ID do filtro
- `disable`: Desabilita um filtro. Digite o nome ou ID do filtro
- `update`: Atualiza os filtros
