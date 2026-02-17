---
title: Configuración y gestión de protección
sidebar_position: 3
---

## Comandos disponibles

Para obtener una lista de todos los comandos disponibles de AdGuard, ingresa:

```sh
adguard-cli --help-all
```

## Habilitando y deshabilitando la protección

### Activar protección

Para habilitar la protección, ingresa:

```sh
adguard-cli start
```

Este comando intenta configurar una redirección al proxy.

![Iniciar protección \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/start-protection.gif)

### Desactivar la protección

Para deshabilitar la protección, ingresa:

```sh
adguard-cli stop
```

Este comando no solo detiene el proxy, sino que también detiene el tráfico de redirección hacia él.

### Comprobar el estado de protección

Para ver el estado de la protección, ingresa:

```sh
adguard-cli status
```

![Estado/Detener protección \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation6.png)

## Actualizaciones

### Buscar actualizaciones

Para buscar actualizaciones, ingresa:

```sh
adguard-cli check-update
```

### Actualizar AdGuard para Linux

Para actualizar AdGuard para Linux, ingresa:

```sh
adguard-cli update
```

### Actualizar la salida del script

Para ver la salida del script de actualización, ingresa:

```sh
adguard-cli update -v
```

## Configurando o AdGuard para Linux

Usa el comando `config` para configurar AdGuard para Linux. Subcomandos:

- `show`: Muestra la configuración actual en `proxy.yaml`

  ![Configuración actual \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation7.png)

- `set`: Configurar una opción en `proxy.yaml`
  - `listen_ports.http_proxy`: puerto HTTP de escucha
  - `proxy_mode`: Modo proxy (`manual` u `auto`)

- `get`: Obtener el estado actual de las opciones anteriores

:::note

The Automatic mode can only be used if the following requirements are met:

- `iptables` is installed and running (either `nft` or `legacy`)
- `iptables` supports the `nat` table for both IPv4 and IPv6
- `iptables` supports the `REDIRECT` and `QUEUE` chains for both IPv4 and IPv6
- The `sudo` package is installed

:::

## Administrar filtros

Usa el comando `filters` para configurar AdGuard para Linux. Subcomandos:

- `list`: Listar filtros instalados

  - `--all`: Ver todos los filtrados

  ![Lista de filtros \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/filter-list.png)

- `install`: Instalar un filtro. Ingrese la URL del filtrado que deseas instalar

- `enable`: Habilitar un filtro. Introduce el nombre o ID del filtro

  ![Habilitar filtros \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/built-in-filters.png)

- `disable`: Deshabilitar un filtro. Introduce el nombre o ID del filtro

- `update`: Actualiza los filtros

## Cambiando la dirección de escucha del proxy en modo proxy manual

De forma predeterminada, el proxy escucha en `127.0.0.1` — la dirección de la interfaz de red de loopback invertido.
Hay dos formas de hacer que el proxy escuche en una interfaz diferente:

1. Ejecuta `adguard-cli config set listen_address <dirección>` donde `<dirección>` es la dirección a la que escuchar.
2. Edita el archivo de configuración directamente:
   - Para determinar la ubicación del archivo de configuración, ejecuta `adguard-cli config show | grep "Config location"`.
   - Busca la clave `listen_address` y establece su valor en consecuencia. Para escuchar en todas las interfaces de red disponibles, establece la dirección de escucha en `0.0.0.0` o `::`.

Si la dirección de escucha está configurada en algo diferente a `127.0.0.1`, se requiere la autenticación del cliente proxy. AdGuard CLI no se iniciará a menos que se configure la autenticación del proxy:

- Al ejecutar `adguard-cli config set listen_address <address>` donde `<address>` no es `127.0.0.1`, AdGuard CLI solicitará un nombre de usuario y una contraseña si la autenticación del proxy no está configurada.
- Al editar el archivo de configuración directamente, busca la clave `listen_auth`. Establece la subclave `enabled` en `true`, y `username` y `password` en valores no vacíos.

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

:::info Compatibilidad

Configuring `outbound_proxy` via URL is available starting from AdGuard for Linux v1.1.26 nightly and v1.1 stable release.

:::

## Export and import settings

The export/import functionality allows you to backup your AdGuard CLI configuration and restore it on the same or different system. This includes filters, proxy settings, and other configuration options.

### Export settings

To export current AdGuard CLI settings to a ZIP archive, use:

```sh
adguard-cli export-settings
```

You can specify the output path using the `-o` or `--output` flag. This can be either a specific file path or a directory:

```sh
# Export to a specific file
adguard-cli export-settings -o "/path/to/settings.zip"

# Export to a directory (archive will be created with a standard name)
adguard-cli export-settings -o "/path/to/directory"
```

If no output path is specified, the settings will be exported to the working directory with a standard name. After successful export, the command will display the full path where the archive was created.

### Import settings

To import AdGuard CLI settings from a ZIP archive, use:

```sh
adguard-cli import-settings -i "/path/to/settings.zip"
```

The `-i` or `--input` flag is required and specifies the path to the settings archive to import.
