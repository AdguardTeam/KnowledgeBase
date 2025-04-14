---
title: Documentación para administradores
sidebar_position: 5
---

Esta página describe las características y detalles sobre la gestión central de políticas y preferencias de AdGuard.

## 1. Descarga la MSI {#msi-download}

Descargar [AdGuard MSI x86](https://agrd.io/adguard_setup86_msi)

Descarga [AdGuard MSI x64](https://agrd.io/adguard_setup64_msi)

## 2. Configura la configuración para tu red {#settings-configuring}

En máquinas que están unidas a un dominio de Active Directory, las configuraciones de políticas también pueden almacenarse en el registro bajo `HKEY_LOCAL_MACHINE` en la siguiente ruta: `Software\Policies\AdGuard\`.

La única política soportada es `LicenseKey`. Si se establece esta política, AdGuard la preferirá sobre lo que el usuario pueda ingresar en la interfaz. Esta clave de licencia se usará para verificar el estado de la licencia.

## 3. Asegúrate de que los servidores de AdGuard estén disponibles {#servers-available}

AdGuard se conecta a dos hosts: `api.adguard.org` y `filters.adtidy.org`. Asegúrate de que ambos servidores estén disponibles.

## 4. Envía el MSI a tu red {#msi-push}

Si normalmente usas SMS u otras herramientas, úsalas para enviar el MSI de AdGuard como lo harías normalmente con cualquier otro paquete de instalación.

De lo contrario, puedes ejecutar el MSI directamente en la máquina de destino (y de manera silenciosa) con este comando: `Msiexec /q /i AdGuard.msi`

Si necesitas implementar una actualización, usa este comando: `Msiexec /q /i AdGuard.msi REINSTALL=ALL REINSTALLMODE=vomus`

:::note

Debes ejecutar estos comandos con privilegios de administrador.

:::

Si deseas instalar AdGuard en una computadora con Windows 7, asegúrate de que tengas instalada la versión Cliente de .NET 4: https://www.microsoft.com/en-us/download/details.aspx?id=24872

:::note

Si has instalado AdGuard para Windows desde un archivo MSI, AdGuard no se actualizará automáticamente. Para permitir actualizaciones manuales:

- En las versiones lanzadas después de v7.16, elimina el parámetro `ForbidCheckUpdates` o establece su valor en `NO` (no sensible a mayúsculas) en el registro bajo `HKEY_LOCAL_MACHINE\SOFTWARE\Adguard`.

- En v7.16 y versiones anteriores, establezca en `YES` (sin distinción entre mayúsculas y minúsculas) el parámetro `AllowCheckUpdates` para la clave `HKEY_LOCAL_MACHINE\SOFTWARE\Adguard` en sistemas operativos x86 o la clave `HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Adguard` en sistemas operativos x64. Cualquier otro valor o ningún valor para este parámetro deshabilitará las actualizaciones automáticas.

Ten en cuenta que la dicha instalación de la app y las actualizaciones manuales no son recomendadas y pueden causar problemas técnicos.

:::

## 5. Prueba tu instalación {#installation-test}

En una máquina de destino, inicia AdGuard. Abre la pantalla de licencia para verificar si está utilizando la licencia especificada. Es posible que necesites hacer clic en "Actualizar estado" para hacer que AdGuard valide la clave de licencia.
