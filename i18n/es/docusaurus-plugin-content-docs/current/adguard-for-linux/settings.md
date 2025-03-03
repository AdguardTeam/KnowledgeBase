---
title: Configuración y gestión de protección
sidebar_position: 3
---

Para obtener una lista de todos los comandos disponibles de AdGuard, ingresa:

```
adguard-cli --help-all
```

## Habilitando y deshabilitando la protección

Para habilitar la protección, ingresa:

```
adguard-cli start
```

Para deshabilitar la protección, ingresa:

```
adguard-cli stop
```

Para ver el estado de la protección, ingresa:

```
adguard-cli status
```

## Buscar actualizaciones

Para buscar actualizaciones, ingresa:

```
adguard-cli check-update
```

Para actualizar AdGuard para Linux, ingresa:

```
adguard-cli update
```

Para ver la salida del script de actualización, ingresa:

```
adguard-cli update -v
```

## Configurando o AdGuard para Linux

Usa el comando `config` para configurar AdGuard para Linux. Subcomandos:

- `show`: Muestra la configuración actual en `proxy.yaml`
- `set`: Configurar una opción en `proxy.yaml`
    - `listen_ports.http_proxy`: puerto HTTP de escucha
    - `proxy_mode`: Modo proxy (`manual` u `auto`)
- `get`: Obtener el estado actual de las opciones anteriores

## Administrar filtros

Usa el comando `filters` para configurar AdGuard para Linux. Subcomandos:

- `list`: Listar filtros instalados
    - `--all`: Ver todos los filtrados
- `install`: Instalar un filtro. Ingrese la URL del filtrado que deseas instalar
- `enable`: Habilitar un filtro. Introduce el nombre o ID del filtro
- `disable`: Deshabilitar un filtro. Introduce el nombre o ID del filtro
- `update`: Actualiza los filtros
