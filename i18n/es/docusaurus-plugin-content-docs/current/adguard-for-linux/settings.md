---
title: Configuración y gestión de protección
sidebar_position: 3
---

## Available commands

Para obtener una lista de todos los comandos disponibles de AdGuard, ingresa:

```sh
adguard-cli --help-all
```

## Habilitando y deshabilitando la protección

### Enable protection

Para habilitar la protección, ingresa:

```sh
adguard-cli start
```

This command attempts to configure a redirection to the proxy.

![Start protection \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/start-protection.gif)

### Disable protection

Para deshabilitar la protección, ingresa:

```sh
adguard-cli stop
```

This command not only stops the proxy but also stops the trafic from redirecting to it.

### Check protection status

Para ver el estado de la protección, ingresa:

```sh
adguard-cli status
```

![Status/Stop protection \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation6.png)

## Updates

### Buscar actualizaciones

Para buscar actualizaciones, ingresa:

```sh
adguard-cli check-update
```

### Update AdGuard for Linux

Para actualizar AdGuard para Linux, ingresa:

```sh
adguard-cli update
```

### Update script output

Para ver la salida del script de actualización, ingresa:

```sh
adguard-cli update -v
```

## Configurando o AdGuard para Linux

Usa el comando `config` para configurar AdGuard para Linux. Subcomandos:

- `show`: Muestra la configuración actual en `proxy.yaml`

    ![Current setup \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation7.png)

- `set`: Configurar una opción en `proxy.yaml`
    - `listen_ports.http_proxy`: puerto HTTP de escucha
    - `proxy_mode`: Modo proxy (`manual` u `auto`)

- `get`: Obtener el estado actual de las opciones anteriores

## Administrar filtros

Usa el comando `filters` para configurar AdGuard para Linux. Subcomandos:

- `list`: Listar filtros instalados

    - `--all`: Ver todos los filtrados

    ![Filter list \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/filter-list.png)

- `install`: Instalar un filtro. Ingrese la URL del filtrado que deseas instalar

- `enable`: Habilitar un filtro. Introduce el nombre o ID del filtro

    ![Enable filters \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/built-in-filters.png)

- `disable`: Deshabilitar un filtro. Introduce el nombre o ID del filtro

- `update`: Actualiza los filtros

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
