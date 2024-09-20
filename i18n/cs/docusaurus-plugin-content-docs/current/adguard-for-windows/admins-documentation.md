---
title: Dokumentace pro administrátory
sidebar_position: 5
---

Tato stránka popisuje funkce a podrobnosti centrální správy zásad a předvoleb AdGuardu.

## 1. Stažení MSI {#msi-download}

Stáhněte [AdGuard MSI x86](https://cdn.adtidy.org/distr/windows/AdGuard_x86.msi)

Stáhněte [AdGuard MSI x64](https://cdn.adtidy.org/distr/windows/AdGuard_x64.msi)

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

Pokud jste nainstalovali AdGuard pro Windows ze souboru MSI, nebude AdGuard automaticky aktualizován. Povolení ručních aktualizací:

- Ve verzích vydaných po v7.16 smažte parametr `ForbidCheckUpdates` nebo nastavte jeho hodnotu na `NO` (nerozlišuje velká a malá písmena) v registru pod `HKEY_LOCAL_MACHINE\SOFTWARE\Adguard`.

- Ve verzi 7.16 a starších verzích nastavte parametr `AllowCheckUpdates` pro klíč `HKEY_LOCAL_MACHINE\SOFTWARE\Adguard` v OS x86 na hodnotu `YES` (nerozlišuje velká a malá písmena) nebo `HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Adguard` v OS x64. Jakákoli jiná hodnota nebo žádná hodnota tohoto parametru zakáže automatické aktualizace.

Upozorňujeme, že taková instalace aplikace a ruční aktualizace se nedoporučuje a může způsobit technické problémy.

:::

## 5. Test instalace {#installation-test}

V cílovém počítači spusťte AdGuard. Open the license screen to check that it is using the specified license. Možná budete muset kliknout na tlačítko "Obnovit stav", aby AdGuard ověřil licenční klíč.
