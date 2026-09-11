---
title: Problemas de inicio en macOS
sidebar_position: 6
---

:::info

Este artículo trata sobre AdGuard para Mac, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel del sistema. Para ver cómo funciona, [descarga la aplicación AdGuard](https://agrd.io/download-kb-adblock)

:::

Ocasionalmente, macOS puede provocar la corrupción del módulo de extensión de red de AdGuard, lo que le impide utilizar la aplicación. En este caso, deberás seguir una de estas instrucciones, según la versión de tu sistema operativo.

## Problemas de inicio en macOS 11 y superior

Si tienes problemas al iniciar AdGuard para Mac en los sistemas operativos Big Sur y Monterey, sigue estas instrucciones:

1. Reinicia el Mac e ingresa el [modo de recuperación](https://support.apple.com/en-us/HT201255).
1. Deshabilita SIP (Inicia el **Terminal** desde el menú **Utilidades** y escribe `csrutil enable`).
1. Reinicia tu Mac.
1. Cierra la aplicación AdGuard, abre **Terminal** y escribe `systemextensionsctl reset`.
1. Reinicia el Mac y accede al modo de recuperación.
1. Habilita SIP (Inicia **Terminal** desde el menú **Utilidades** y escribe `csrutil enable`).
1. Inicia la aplicación AdGuard y habilita la protección.

## Problemas de inicio en macOS 10

Si tienes problemas para iniciar AdGuard para Mac en los sistemas operativos Sierra, Mojave y Catalina, sigue estas instrucciones:

1. Abre **Terminal** e ingresa el comando `ls -@lOae /private/var/db/KernelExtensionManagement`.
1. Verifica si el indicador `restringido` no está presente (como en la captura de pantalla). ![Ejemplo de comando *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/restricted-flag.jpg)
1. Reinicia tu Mac en modo de recuperación.
1. Abre **Utilidades** → **Terminal**.
1. Ingresa `csrutil disable`.
1. Ingresa la contraseña de administrador.
1. Reinicia tu Mac.
1. Abre **Terminal** e ingresa el siguiente comando: `sudo chflags restricted /private/var/db/KernelExtensionManagement`.
1. Reinicia tu Mac en modo de recuperación.
1. Abre **Utilidades** → **Terminal** → Ingresa `csrutil enable` → Ingresa la contraseña de administrador → Reinicia tu Mac.
1. Habilita la protección AdGuard.
