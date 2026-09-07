---
title: Documentation pour les administrateurs
sidebar_position: 5
---

Cette page décrit les caractéristiques et les détails de la gestion centrale des politiques et des préférences d'AdGuard.

## 1. Download the MSI {#msi-download}

Download the [AdGuard MSI x86](https://agrd.io/adguard_setup86_msi)

Download the [AdGuard MSI x64](https://agrd.io/adguard_setup64_msi)

## 2. Configure the settings for your network {#settings-configuring}

On machines that are joined to an Active Directory domain, policy settings may also be stored in the registry under `HKEY_LOCAL_MACHINE` in the following path: `Software\Policies\AdGuard\`.

The only supported policy is `LicenseKey`. Si cette politique est définie, AdGuard la privilégiera par rapport à ce que l'utilisateur peut saisir dans l'interface. Cette clef de licence sera utilisée pour vérifier l'état de la licence.

## 3. Make sure that AdGuard servers are available {#servers-available}

AdGuard connects to two hosts: `api.adguard.org` and `filters.adtidy.org`. Assurez-vous que les deux serveurs sont disponibles.

## 4. Push the MSI out to your network {#msi-push}

Si vous utilisez habituellement des SMS ou d'autres outils, utilisez-les pour envoyer le MSI AdGuard comme vous le feriez normalement avec n'importe quel autre paquet d'installation.

Otherwise, you can run the MSI on the target machine directly (and silently) with this command:
`Msiexec /q /i AdGuard.msi`

If you need to roll out an update, use this command:
`Msiexec /q /i AdGuard.msi REINSTALL=ALL REINSTALLMODE=vomus`

:::note

Vous devez exécuter ces commandes avec des privilèges d'administration.

:::

Si vous souhaitez installer AdGuard sur un ordinateur Windows 7, assurez-vous qu'il dispose du profil client .NET 4 installé : https://www.microsoft.com/en-us/download/details.aspx?id=24872

:::note

Si vous avez installé AdGuard pour Windows à partir d'un fichier MSI, AdGuard ne sera pas mis à jour automatiquement. Pour autoriser les mises à jour manuelles :

- In versions released after v7.16, delete the `ForbidCheckUpdates` parameter or set its value to `NO` (case-insensitive) in the registry under `HKEY_LOCAL_MACHINE\SOFTWARE\Adguard`.

- In v7.16 and earlier versions, set to `YES` (case-insensitive) the `AllowCheckUpdates` parameter for the `HKEY_LOCAL_MACHINE\SOFTWARE\Adguard` key on x86 OS or `HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Adguard` key on x64 OS. Toute autre valeur ou aucune valeur pour ce paramètre désactivera les mises à jour automatiques.

Veuillez noter que cette installation de l'application et les mises à jour manuelles ne sont pas recommandées et peuvent entraîner des problèmes techniques.

:::

## 5. Test your installation {#installation-test}

Sur une machine cible, lancez AdGuard. Ouvrez l'écran de licence pour vérifier qu'il utilise la licence spécifiée. Vous devrez peut-être cliquer sur "Actualiser le statut" pour faire en sorte qu'AdGuard valide la clef de licence.
