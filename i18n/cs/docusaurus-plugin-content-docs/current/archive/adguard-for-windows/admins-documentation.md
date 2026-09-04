---
title: Dokumentace pro administrátory
sidebar_position: 5
---

Tato stránka popisuje funkce a podrobnosti centrální správy zásad a předvoleb AdGuardu.

## 1. Download the MSI {#msi-download}

Download the [AdGuard MSI x86](https://agrd.io/adguard_setup86_msi)

Download the [AdGuard MSI x64](https://agrd.io/adguard_setup64_msi)

## 2. Configure the settings for your network {#settings-configuring}

On machines that are joined to an Active Directory domain, policy settings may also be stored in the registry under `HKEY_LOCAL_MACHINE` in the following path: `Software\Policies\AdGuard\`.

The only supported policy is `LicenseKey`. Pokud je tato zásada nastavena, bude ji AdGuard upřednostňovat před tím, co může uživatel zadat v rozhraní. Tento licenční klíč se použije pro kontrolu stavu licence.

## 3. Make sure that AdGuard servers are available {#servers-available}

AdGuard connects to two hosts: `api.adguard.org` and `filters.adtidy.org`. Ujistěte se, že jsou oba servery dostupné.

## 4. Push the MSI out to your network {#msi-push}

Pokud obvykle používáte SMS nebo jiné nástroje, použijte je k odeslání AdGuard MSI stejně jako u jiných instalačních balíčků.

Otherwise, you can run the MSI on the target machine directly (and silently) with this command:
`Msiexec /q /i AdGuard.msi`

If you need to roll out an update, use this command:
`Msiexec /q /i AdGuard.msi REINSTALL=ALL REINSTALLMODE=vomus`

:::note

Tyto příkazy musíte spouštět s právy administrátora.

:::

Pokud chcete nainstalovat AdGuard do počítače se systémem Windows 7 ujistěte se, že je v něm nainstalován profil Client .NET 4: https://www.microsoft.com/en-us/download/details.aspx?id=24872

:::note

Pokud jste nainstalovali AdGuard pro Windows ze souboru MSI, nebude AdGuard automaticky aktualizován. Povolení ručních aktualizací:

- In versions released after v7.16, delete the `ForbidCheckUpdates` parameter or set its value to `NO` (case-insensitive) in the registry under `HKEY_LOCAL_MACHINE\SOFTWARE\Adguard`.

- In v7.16 and earlier versions, set to `YES` (case-insensitive) the `AllowCheckUpdates` parameter for the `HKEY_LOCAL_MACHINE\SOFTWARE\Adguard` key on x86 OS or `HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Adguard` key on x64 OS. Jakákoli jiná hodnota nebo žádná hodnota tohoto parametru zakáže automatické aktualizace.

Upozorňujeme, že taková instalace aplikace a ruční aktualizace se nedoporučuje a může způsobit technické problémy.

:::

## 5. Test your installation {#installation-test}

V cílovém počítači spusťte AdGuard. Otevřete obrazovku licence a zkontrolujte, zda používá zadanou licenci. Možná budete muset kliknout na tlačítko "Obnovit stav", aby AdGuard ověřil licenční klíč.
