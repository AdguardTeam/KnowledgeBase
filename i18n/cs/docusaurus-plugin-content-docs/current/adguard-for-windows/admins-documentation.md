---
title: Dokumentace pro administrátory
sidebar_position: 5
---

Tato stránka popisuje funkce a podrobnosti centrální správy zásad a předvoleb AdGuardu.

## 1. Stažení MSI {#msi-download}

Stáhněte si [AdGuard MSI](https://cdn.adtidy.org/distr/windows/AdGuard.msi).

## 2. Konfigurace nastavení pro vaši síť {#settings-configuring}

V počítačích, které jsou připojeny k doméně Active Directory, může být nastavení zásad uloženo také v registru pod `HKEY_LOCAL_MACHINE` v následující cestě: `Software\Policies\AdGuard\`.

Jedinou podporovanou zásadou je `LicenseKey`. Pokud je tato zásada nastavena, bude ji AdGuard upřednostňovat před tím, co může uživatel zadat v rozhraní. Tento licenční klíč se použije pro kontrolu stavu licence.

## 3. Kontrola dostupnosti serverů AdGuardu {#servers-available}

AdGuard se připojuje ke dvěma hostitelům: `api.adguard.org` a `filters.adtidy.org`. Ujistěte se, že jsou oba servery dostupné.

## 4. Odeslání MSI do vaší sítě {#msi-push}

Pokud obvykle používáte SMS nebo jiné nástroje, použijte je k odeslání AdGuard MSI stejně jako u jiných instalačních balíčků.

Jinak můžete MSI spustit na cílovém počítači přímo (a nezjištně) pomocí tohoto příkazu: `Msiexec /q /i AdGuard.msi`

Pokud potřebujete spustit aktualizaci, použijte tento příkaz: `Msiexec /q /i AdGuard.msi REINSTALL=ALL REINSTALLMODE=vomus`

**Upozorňujeme, že tyto příkazy musíte spouštět s právy administrátora.**

> Pokud chcete nainstalovat AdGuard do počítače se systémem Windows 7 ujistěte se, že je v něm nainstalován profil Client .NET 4: https://www.microsoft.com/en-us/download/details.aspx?id=24872
> **Důležité!** Při instalaci AdGuardu pro Windows z MSI jsou automatické aktualizace zakázány. Pokud chcete povolit aktualizace pro uživatele (což se nedoporučuje, protože centralizované aktualizace nebudou možné), nastavte hodnotu parametru `AllowCheckUpdates` pro klíč `HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Adguard` na `ANO` (nerozlišuje se velikost písmen). V tomto případě budou automatické aktualizace povoleny. Jakákoli jiná hodnota nebo žádná hodnota tohoto parametru automatické aktualizace zakáže.

## 5. Test instalace {#installation-test}

V cílovém počítači spusťte AdGuard. Otevřete obrazovku licence a zkontrolujte, zda používá nastavenou licenci. Možná budete muset kliknout na tlačítko "Obnovit stav", aby AdGuard ověřil licenční klíč.
