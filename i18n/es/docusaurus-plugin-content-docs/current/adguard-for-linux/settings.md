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
