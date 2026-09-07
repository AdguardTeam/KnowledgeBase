---
title: Documentazione per admin
sidebar_position: 5
---

Questa pagina descrive le funzionalità e i dettagli della gestione centrale di politiche e preferenze di AdGuard.

## 1. Download the MSI {#msi-download}

Download the [AdGuard MSI x86](https://agrd.io/adguard_setup86_msi)

Download the [AdGuard MSI x64](https://agrd.io/adguard_setup64_msi)

## 2. Configure the settings for your network {#settings-configuring}

On machines that are joined to an Active Directory domain, policy settings may also be stored in the registry under `HKEY_LOCAL_MACHINE` in the following path: `Software\Policies\AdGuard\`.

The only supported policy is `LicenseKey`. Se questa è impostata, AdGuard la preferirà a ciò che l'utente può inserire nell'interfaccia. Questa chiave di licenza sarà utilizzata per verificare lo stato della licenza.

## 3. Make sure that AdGuard servers are available {#servers-available}

AdGuard connects to two hosts: `api.adguard.org` and `filters.adtidy.org`. Assicurati che entrambi i server siano disponibili.

## 4. Push the MSI out to your network {#msi-push}

Se solitamente utilizzi SMS o altri strumenti, utilizzali per inviare AdGuard MSI, come faresti normalmente con qualsiasi altro pacchetto di installazione.

Otherwise, you can run the MSI on the target machine directly (and silently) with this command:
`Msiexec /q /i AdGuard.msi`

If you need to roll out an update, use this command:
`Msiexec /q /i AdGuard.msi REINSTALL=ALL REINSTALLMODE=vomus`

:::note

È necessario eseguire questi comandi con privilegi di amministratore.

:::

Se desideri installare AdGuard su un computer Windows 7, assicurati che sia installato il profilo client .NET 4: https://www.microsoft.com/en-us/download/details.aspx?id=24872

:::note

Se hai installato AdGuard per Windows da un file MSI, AdGuard non verrà aggiornato automaticamente. Per consentire aggiornamenti manuali:

- In versions released after v7.16, delete the `ForbidCheckUpdates` parameter or set its value to `NO` (case-insensitive) in the registry under `HKEY_LOCAL_MACHINE\SOFTWARE\Adguard`.

- In v7.16 and earlier versions, set to `YES` (case-insensitive) the `AllowCheckUpdates` parameter for the `HKEY_LOCAL_MACHINE\SOFTWARE\Adguard` key on x86 OS or `HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Adguard` key on x64 OS. Qualsiasi altro valore o nessun valore per questo parametro disattiverà gli aggiornamenti automatici.

Si prega di notare che tale installazione dell'applicazione e aggiornamenti manuali non sono consigliati e possono causare problemi tecnici.

:::

## 5. Test your installation {#installation-test}

Su una macchina di destinazione, avvia AdGuard. Apri la schermata della licenza per verificare che utilizzi quella specificata. Potresti dover cliccare su "Aggiorna stato", per far convalidare la chiave di licenza ad AdGuard.
