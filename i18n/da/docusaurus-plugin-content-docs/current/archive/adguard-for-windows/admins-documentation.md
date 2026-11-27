---
title: Dokumentation til admins
sidebar_position: 5
---

Denne side beskriver funktionerne og detaljerne i AdGuards centrale styring af politikker og præferencer.

## 1. Download MSI'en {#msi-download}

Download [AdGuard MSI x86-filen](https://agrd.io/adguard_setup86_msi)

Download [AdGuard MSI x64-filen](https://agrd.io/adguard_setup64_msi)

## 2. Opsæt netværksindstillingerne {#settings-configuring}

På maskiner forbundet til et Active Directory-domæne kan politikindstillinger også være gemt i registreringsdatabasen under `HKEY_LOCAL_MACHINE` på flg. sti: `Software\Policies\AdGuard\`.

Den eneste understøttede politik er `LicenseKey`. Er denne politik opsat, foretrækkes den af AdGuard, fremfor hvad brugeren måtte angive i grænsefladen. Denne licensnøgle vil blive brugt til licensstatuskontrol.

## 3. Sørg for, at AdGuard-serverene er tilgængelige {#servers-available}

AdGuard opretter forbindelse til to værter: `api.adguard.org` og `filters.adtidy.org`. Sørg for, at begge AdGuard-servere er tilgængelige.

## 4. Push MSI'en ud til netværket {#msi-push}

Bruges normalt SMS eller andre værktøjer, så brug dem til at pushe AdGuard-MSI ud ligesom det normalt ville ske med enhver anden installationspakke.

Alternativt kan MSI'en køres (tavst) direkte på målmaskinen med denne kommando:
`Msiexec /q /i AdGuard.msi`

Ved behov for at udrulle en opdatering, brug denne kommando:
`Msiexec /q /i AdGuard.msi REINSTALL=ALL REINSTALLMODE=vomus`

:::note

Disse kommandoer skal eksekveres med admin-privilegier.

:::

Skal AdGuard installeres på en Windows 7-computer, så sørg for, at den har .NET 4 Client Profile installeret: https://www.microsoft.com/en-us/download/details.aspx?id=24872

:::note

Er AdGuard til Windows installeret fra en MSI-fil, opdateres AdGuard ikke automatisk. Sådan muliggøres manuelle opdateringer:

- Slet i versioner udgivet efter v7.16 parameteren `ForbidCheckUpdates` eller sæt dens værdi til `NO` (ikke minuskel/majuskel sensitiv) i registreringsdatabasen under `HKEY_LOCAL_MACHINE\SOFTWARE\Adguard`.

- Sæt i versioner op til og med v7.16 parameteren `AllowCheckUpdates` til `YES` (ikke minuskel/majuskel sensitiv) for nøglen `HKEY_LOCAL_MACHINE\SOFTWARE\Adguard` på x86 OS eller `HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Adguard` på x64 OS. Enhver anden eller ingen værdi for denne parameter deaktiverer automatiske opdateringer.

Bemærk, at en sådan installation af applikationen og manuelle opdateringer ikke anbefales og kan forårsage tekniske problemer.

:::

## 5. Test installationen {#installation-test}

Start AdGuard på en målmaskine. Åbn licensskærmen for at tjekke, at den bruger den angivne licens. Der skal muligvis klikkes på "Opdatér status", før AdGuard bekræfter licensnøglen.
