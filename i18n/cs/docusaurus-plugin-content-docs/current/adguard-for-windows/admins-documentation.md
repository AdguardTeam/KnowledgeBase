---
title: Dokumentace pro administrátory
sidebar_position: 5
---

Tato stránka popisuje funkce a podrobnosti centrální správy zásad a předvoleb AdGuardu.

## 1. Stažení MSI {#msi-download}

Stáhněte si [AdGuard MSI](https://static.adtidy.org/windows/setup.msi).

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

:::info

Počínaje verzí AdGuard v7.17 pro Windows jsou při instalaci aplikace z MSI ve výchozím nastavení povoleny automatické aktualizace. Doporučujeme zakázat aktualizace pro uživatele, aby byl AdGuard pro Windows aktualizován centrálně. Za tímto účelem přidejte klíč ForbidCheckUpdates=Yes, který se nachází zde: HKEY_LOCAL_MACHINE\SOFTWARE\Adguard.

Ve starších verzích AdGuard pro Windows jsou automatické aktualizace ve výchozím nastavení zakázány. Pokud chcete povolit aktualizace pro uživatele, nastavte hodnotu parametru `AllowCheckUpdates` pro klíč `HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Adguard` na `ANO` (nerozlišuje se velikost písmen).

:::note

## 5. Test instalace {#installation-test}

V cílovém počítači spusťte AdGuard. Otevřete obrazovku licence a zkontrolujte, zda používá nastavenou licenci. Možná budete muset kliknout na tlačítko "Obnovit stav", aby AdGuard ověřil licenční klíč.
