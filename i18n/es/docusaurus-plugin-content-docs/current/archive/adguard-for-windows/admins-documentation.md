---
title: Documentación para administradores
sidebar_position: 5
---

Esta página describe las características y detalles sobre la gestión central de políticas y preferencias de AdGuard.

## 1. Download the MSI {#msi-download}

Download the [AdGuard MSI x86](https://agrd.io/adguard_setup86_msi)

Download the [AdGuard MSI x64](https://agrd.io/adguard_setup64_msi)

## 2. Configure the settings for your network {#settings-configuring}

On machines that are joined to an Active Directory domain, policy settings may also be stored in the registry under `HKEY_LOCAL_MACHINE` in the following path: `Software\Policies\AdGuard\`.

The only supported policy is `LicenseKey`. Si se establece esta política, AdGuard la preferirá sobre lo que el usuario pueda ingresar en la interfaz. Esta clave de licencia se usará para verificar el estado de la licencia.

## 3. Make sure that AdGuard servers are available {#servers-available}

AdGuard connects to two hosts: `api.adguard.org` and `filters.adtidy.org`. Asegúrate de que ambos servidores estén disponibles.

## 4. Push the MSI out to your network {#msi-push}

Si normalmente usas SMS u otras herramientas, úsalas para enviar el MSI de AdGuard como lo harías normalmente con cualquier otro paquete de instalación.

Otherwise, you can run the MSI on the target machine directly (and silently) with this command:
`Msiexec /q /i AdGuard.msi`

If you need to roll out an update, use this command:
`Msiexec /q /i AdGuard.msi REINSTALL=ALL REINSTALLMODE=vomus`

:::note

Debes ejecutar estos comandos con privilegios de administrador.

:::

Si deseas instalar AdGuard en una computadora con Windows 7, asegúrate de que tengas instalada la versión Cliente de .NET 4: https://www.microsoft.com/en-us/download/details.aspx?id=24872

:::note

Si has instalado AdGuard para Windows desde un archivo MSI, AdGuard no se actualizará automáticamente. Para permitir actualizaciones manuales:

- In versions released after v7.16, delete the `ForbidCheckUpdates` parameter or set its value to `NO` (case-insensitive) in the registry under `HKEY_LOCAL_MACHINE\SOFTWARE\Adguard`.

- In v7.16 and earlier versions, set to `YES` (case-insensitive) the `AllowCheckUpdates` parameter for the `HKEY_LOCAL_MACHINE\SOFTWARE\Adguard` key on x86 OS or `HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Adguard` key on x64 OS. Cualquier otro valor o ningún valor para este parámetro deshabilitará las actualizaciones automáticas.

Ten en cuenta que la dicha instalación de la app y las actualizaciones manuales no son recomendadas y pueden causar problemas técnicos.

:::

## 5. Test your installation {#installation-test}

En una máquina de destino, inicia AdGuard. Abre la pantalla de licencia para verificar si está utilizando la licencia especificada. Es posible que necesites hacer clic en "Actualizar estado" para hacer que AdGuard valide la clave de licencia.
