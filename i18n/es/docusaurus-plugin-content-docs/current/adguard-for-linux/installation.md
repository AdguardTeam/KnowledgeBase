---
title: Instalación, configuración y desinstalación
sidebar_position: 2
---

## Instalando AdGuard para Linux

Para instalar AdGuard, ingresa:

Release

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/release/install.sh | sh -s -- -v
```

Beta

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/beta/install.sh | sh -s -- -v
```

Nightly

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/nightly/install.sh | sh -s -- -v
```

Si es necesario, introduce tu contraseña de administrador.

Presiona `y` para crear un enlace en `/usr/local/bin` al ejecutable y espera hasta que la instalación esté completa.

:::note

Puedes verificar la firma para probar que es una versión oficial de AdGuard utilizando la herramienta `gpg`. [Más información en GitHub](https://github.com/AdguardTeam/AdGuardCLI?tab=readme-ov-file#verify-releases)

:::

## Activando una licencia

AdGuard para Linux requiere una [licencia de AdGuard](https://adguard.com/license.html). Si aún no tienes una licencia, puedes iniciar sesión o crear una cuenta para obtener una prueba gratis de 14 días. Si ya tienes una licencia, inicia sesión para activarla.

Para iniciar sesión o crear una cuenta, ingresa:

```
adguard-cli activate
```

Para restablecer tu licencia, introduce:

```
adguard-cli reset-license
```

Para ver la información de la licencia, ingresa:

```
adguard-cli license
```

## Configuración inicial

Para poner AdGuard en funcionamiento, completa la configuración inicial. Esto incluye la instalación del Certificado CA de AdGuard, la activación de los filtros necesarios y la selección del modo proxy.

Para ejecutar el asistente de configuración, ingresa:

```
adguard-cli configure
```

## Desinstalar AdGuard para Linux

Para desinstalar AdGuard, ingresa:

Release

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/release/install.sh | sh -s -- -v -u
```

Beta

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/beta/install.sh | sh -s -- -v -u
```

Nightly

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/nightly/install.sh | sh -s -- -v -u
```

Si es necesario, introduce tu contraseña de administrador.
