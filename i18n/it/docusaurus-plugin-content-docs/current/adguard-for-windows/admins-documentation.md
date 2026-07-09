---
title: Documentazione per admin
sidebar_position: 5
---

Questa pagina descrive le funzionalità e i dettagli della gestione centrale di politiche e preferenze di AdGuard.

## 1. Scarica MSI {#msi-download}

Scarica il [AdGuard MSI x86](https://agrd.io/adguard_setup86_msi)

Scarica il [AdGuard MSI x64](https://agrd.io/adguard_setup64_msi)

## 2. Configura le impostazioni per la tua rete {#settings-configuring}

Sulle macchine facenti parte di un dominio Active Directory, le impostazioni sulla politica possono esser archiviate anche nel registro in `HKEY_LOCAL_MACHINE` nel seguente percorso: `Software\Policies\AdGuard\`.

L'unica politica supportata è `LicenseKey`. Se questa è impostata, AdGuard la preferirà a ciò che l'utente può inserire nell'interfaccia. Questa chiave di licenza sarà utilizzata per verificare lo stato della licenza.

## 3. Assicurati che i server di AdGuard siano disponibili {#servers-available}

AdGuard si connette a due host: `api.adguard.org` e `filters.adtidy.org`. Assicurati che entrambi i server siano disponibili.

## 4. Invia MSI alla tua rete {#msi-push}

Se solitamente utilizzi SMS o altri strumenti, utilizzali per inviare AdGuard MSI, come faresti normalmente con qualsiasi altro pacchetto di installazione.

Altrimenti, puoi eseguire MSI direttamente (e silenziosamente) sulla macchina di destinazione con questo comando: `Msiexec /q /i AdGuard.msi`

Se necessiti di implementare un aggiornamento, utilizza questo comando: `Msiexec /q /i AdGuard.msi REINSTALL=ALL REINSTALLMODE=vomus`

:::note

È necessario eseguire questi comandi con privilegi di amministratore.

:::

Se desideri installare AdGuard su un computer Windows 7, assicurati che sia installato il profilo client .NET 4: https://www.microsoft.com/en-us/download/details.aspx?id=24872

:::note

Se hai installato AdGuard per Windows da un file MSI, AdGuard non verrà aggiornato automaticamente. Per consentire aggiornamenti manuali:

- Nelle versioni rilasciate dopo la v7.16, elimina il parametro `ForbidCheckUpdates` o imposta il suo valore su `NO` (senza distinzione tra minuscole e maiuscole) nel registro sotto `HKEY_LOCAL_MACHINE\SOFTWARE\Adguard`.

- Nelle versioni v7.16 e precedenti, imposta a `YES` (non sensibile al maiuscolo/minuscolo) il parametro `AllowCheckUpdates` per la chiave `HKEY_LOCAL_MACHINE\SOFTWARE\Adguard` su sistemi operativi x86 o la chiave `HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Adguard` su sistemi operativi x64. Qualsiasi altro valore o nessun valore per questo parametro disattiverà gli aggiornamenti automatici.

Si prega di notare che tale installazione dell'applicazione e aggiornamenti manuali non sono consigliati e possono causare problemi tecnici.

:::

## 5. Prova la tua installazione {#installation-test}

Su una macchina di destinazione, avvia AdGuard. Apri la schermata della licenza per verificare che utilizzi quella specificata. Potresti dover cliccare su "Aggiorna stato", per far convalidare la chiave di licenza ad AdGuard.
