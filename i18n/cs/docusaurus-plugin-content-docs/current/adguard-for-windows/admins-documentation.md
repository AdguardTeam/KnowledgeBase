---
title: Dokumentace pro administrátory
sidebar_position: 5
---

Tato stránka popisuje funkce a podrobnosti centrální správy zásad a předvoleb AdGuardu.

## 1. Stažení MSI {#msi-download}

Download the [AdGuard MSI x86](https://cdn.adtidy.org/distr/windows/AdGuard_x86.msi) Download the [AdGuard MSI x64](https://cdn.adtidy.org/distr/windows/AdGuard_x64.msi)

## 2. Konfigurace nastavení pro vaši síť {#settings-configuring}

V počítačích, které jsou připojeny k doméně Active Directory, může být nastavení zásad uloženo také v registru pod `HKEY_LOCAL_MACHINE` v následující cestě: `Software\Policies\AdGuard\`.

Jedinou podporovanou zásadou je `LicenseKey`. Pokud je tato zásada nastavena, bude ji AdGuard upřednostňovat před tím, co může uživatel zadat v rozhraní. Tento licenční klíč se použije pro kontrolu stavu licence.

## 3. Kontrola dostupnosti serverů AdGuardu {#servers-available}

AdGuard se připojuje ke dvěma hostitelům: `api.adguard.org` a `filters.adtidy.org`. Ujistěte se, že jsou oba servery dostupné.

## 4. Odeslání MSI do vaší sítě {#msi-push}

Pokud obvykle používáte SMS nebo jiné nástroje, použijte je k odeslání AdGuard MSI stejně jako u jiných instalačních balíčků.

Jinak můžete MSI spustit na cílovém počítači přímo (a nezjištně) pomocí tohoto příkazu: `Msiexec /q /i AdGuard.msi`

Pokud potřebujete spustit aktualizaci, použijte tento příkaz: `Msiexec /q /i AdGuard.msi REINSTALL=ALL REINSTALLMODE=vomus`

:::note

Tyto příkazy musíte spouštět s právy administrátora.

:::

Pokud chcete nainstalovat AdGuard do počítače se systémem Windows 7 ujistěte se, že je v něm nainstalován profil Client .NET 4: https://www.microsoft.com/en-us/download/details.aspx?id=24872

:::note

If you have installed AdGuard for Windows from an MSI file, AdGuard will not be updated automatically. To allow manual updates:

- in versions released after v7.16, delete the `ForbidCheckUpdates` parameter or set its value to `NO` (case-insensitive) in the registry under `HKEY_LOCAL_MACHINE\SOFTWARE\Adguard`.

- in v7.16 and earlier versions, set to `YES` (case-insensitive) the `AllowCheckUpdates` parameter for the `HKEY_LOCAL_MACHINE\SOFTWARE\Adguard` key on x86 OS or `HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Adguard` key on x64 OS. Any other value or no value for this parameter will disable automatic updates.

Please note that such installation of the application and manual updates are not recommended and can cause technical problems.

:::

## 5. Test instalace {#installation-test}

V cílovém počítači spusťte AdGuard. Otevřete obrazovku licence a zkontrolujte, zda používá nastavenou licenci. Možná budete muset kliknout na tlačítko "Obnovit stav", aby AdGuard ověřil licenční klíč.
