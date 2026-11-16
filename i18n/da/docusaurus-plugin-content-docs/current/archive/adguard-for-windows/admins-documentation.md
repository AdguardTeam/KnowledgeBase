---
title: Dokumentation til admins
sidebar_position: 5
---

Denne side beskriver funktionerne og detaljerne i AdGuards centrale styring af politikker og præferencer.

## 1. Download the MSI {#msi-download}

Download the [AdGuard MSI x86](https://agrd.io/adguard_setup86_msi)

Download the [AdGuard MSI x64](https://agrd.io/adguard_setup64_msi)

## 2. Configure the settings for your network {#settings-configuring}

On machines that are joined to an Active Directory domain, policy settings may also be stored in the registry under `HKEY_LOCAL_MACHINE` in the following path: `Software\Policies\AdGuard\`.

The only supported policy is `LicenseKey`. Er denne politik opsat, foretrækkes den af AdGuard, fremfor hvad brugeren måtte angive i grænsefladen. Denne licensnøgle vil blive brugt til licensstatuskontrol.

## 3. Make sure that AdGuard servers are available {#servers-available}

AdGuard connects to two hosts: `api.adguard.org` and `filters.adtidy.org`. Sørg for, at begge AdGuard-servere er tilgængelige.

## 4. Push the MSI out to your network {#msi-push}

Bruges normalt SMS eller andre værktøjer, så brug dem til at pushe AdGuard-MSI ud ligesom det normalt ville ske med enhver anden installationspakke.

Otherwise, you can run the MSI on the target machine directly (and silently) with this command:
`Msiexec /q /i AdGuard.msi`

If you need to roll out an update, use this command:
`Msiexec /q /i AdGuard.msi REINSTALL=ALL REINSTALLMODE=vomus`

:::note

Disse kommandoer skal eksekveres med admin-privilegier.

:::

Skal AdGuard installeres på en Windows 7-computer, så sørg for, at den har .NET 4 Client Profile installeret: https://www.microsoft.com/en-us/download/details.aspx?id=24872

:::note

Er AdGuard til Windows installeret fra en MSI-fil, opdateres AdGuard ikke automatisk. Sådan muliggøres manuelle opdateringer:

- In versions released after v7.16, delete the `ForbidCheckUpdates` parameter or set its value to `NO` (case-insensitive) in the registry under `HKEY_LOCAL_MACHINE\SOFTWARE\Adguard`.

- In v7.16 and earlier versions, set to `YES` (case-insensitive) the `AllowCheckUpdates` parameter for the `HKEY_LOCAL_MACHINE\SOFTWARE\Adguard` key on x86 OS or `HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Adguard` key on x64 OS. Enhver anden eller ingen værdi for denne parameter deaktiverer automatiske opdateringer.

Bemærk, at en sådan installation af applikationen og manuelle opdateringer ikke anbefales og kan forårsage tekniske problemer.

:::

## 5. Test your installation {#installation-test}

Start AdGuard på en målmaskine. Åbn licensskærmen for at tjekke, at den bruger den angivne licens. Der skal muligvis klikkes på "Opdatér status", før AdGuard bekræfter licensnøglen.
