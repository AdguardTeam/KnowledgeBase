---
title: Documentation pour les administrateurs
sidebar_position: 5
---

Cette page décrit les caractéristiques et les détails de la gestion centrale des politiques et des préférences d'AdGuard.

## 1. Téléchargez le MSI {#msi-download}

Téléchargez le [MSI AdGuard x86](https://agrd.io/adguard_setup86_msi)

Téléchargez le [AdGuard MSI x64](https://agrd.io/adguard_setup64_msi)

## 2. Configurez les paramètres de votre réseau {#settings-configuring}

Sur les ordinateurs qui sont joints à un domaine Active Directory, les paramètres de stratégie peuvent également être stockés dans le registre sous `HKEY_LOCAL_MACHINE` dans le chemin suivant : 'Software\Policies\AdGuard\'.

La seule politique prise en charge est `LicenseKey`. Si cette politique est définie, AdGuard la privilégiera par rapport à ce que l'utilisateur peut saisir dans l'interface. Cette clef de licence sera utilisée pour vérifier l'état de la licence.

## 3. Assurez-vous que les serveurs AdGuard sont disponibles {#servers-available}

AdGuard se connecte à deux hôtes : `api.adguard.org` et `filters.adtidy.org`. Assurez-vous que les deux serveurs sont disponibles.

## 4. Envoyez le MSI vers votre réseau {#msi-push}

Si vous utilisez habituellement des SMS ou d'autres outils, utilisez-les pour envoyer le MSI AdGuard comme vous le feriez normalement avec n'importe quel autre paquet d'installation.

Sinon, vous pouvez exécuter le MSI directement (et silencieusement) sur la machine cible avec cette commande : `Msiexec /q /i AdGuard.msi`

Si vous devez déployer une mise à jour, utilisez cette commande : `Msiexec /q /i AdGuard.msi REINSTALL=ALL REINSTALLMODE=vomus`

::note

Vous devez exécuter ces commandes avec des privilèges d'administration.

:::

Si vous souhaitez installer AdGuard sur un ordinateur Windows 7, assurez-vous qu'il dispose du profil client .NET 4 installé : https://www.microsoft.com/en-us/download/details.aspx?id=24872

:::note

Si vous avez installé AdGuard pour Windows à partir d'un fichier MSI, AdGuard ne sera pas mis à jour automatiquement. Pour autoriser les mises à jour manuelles :

- Dans les versions publiées après v7.16, supprimez le paramètre `ForbidCheckUpdates` ou définissez sa valeur sur `NON` (insensible à la casse) dans le registre sous `HKEY_LOCAL_MACHINE\SOFTWARE\Adguard`.

- Dans les versions v7.16 et antérieures, définissez sur `OUI` (insensible à la casse) le paramètre `AllowCheckUpdates` pour la clé `HKEY_LOCAL_MACHINE\SOFTWARE\Adguard` sur les systèmes d'exploitation x86 ou la clé `HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Adguard` sur les systèmes d'exploitation x64. Toute autre valeur ou aucune valeur pour ce paramètre désactivera les mises à jour automatiques.

Veuillez noter que cette installation de l'application et les mises à jour manuelles ne sont pas recommandées et peuvent entraîner des problèmes techniques.

:::

## 5. Testez votre installation {#installation-test}

Sur une machine cible, lancez AdGuard. Ouvrez l'écran de licence pour vérifier qu'il utilise la licence spécifiée. Vous devrez peut-être cliquer sur "Actualiser le statut" pour faire en sorte qu'AdGuard valide la clef de licence.
