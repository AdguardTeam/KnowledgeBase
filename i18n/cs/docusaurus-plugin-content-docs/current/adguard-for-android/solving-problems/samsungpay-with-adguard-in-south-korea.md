---
title: Jak používat Samsung Pay s AdGuardem v Jižní Korei
sidebar_position: 16
---

Tento problém se vyskytuje téměř výhradně u zařízení registrovaných v Jižní Korei. Samsung Pay na těchto zařízeních se spuštěnými službami VPN občas nefunguje. Tento problém se však dá vyřešit.

Ve výchozím nastavení používá AdGuard k filtrování provozu lokální VPN. To byl důvod, proč museli jihokorejští uživatelé při platbách pomocí Samsung Pay vypnout AdGuard. Nyní je možné se těmto potížím vyhnout.

Funkce **"pref.samsungpay.autopause.enable"** byla vyvinuta speciálně pro jihokorejské uživatele. Jaký proces tedy iniciuje? Pokud je povolena možnost "pref.samsungpay.autopause.enable", AdGuard se pozastaví, když uživatel otevře aplikaci Samsung Pay. Po zavření aplikace však AdGuard znovu obnoví svou činnost.

Podívejme se, jak to funguje.

![samsungpay *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/samsungpay-with-adguard-in-south-korea/en.gif)

> **Poznámka:** tato funkce bude fungovat pouze v případě, že je v nastavení AdGuardu zvolen režim filtrování lokální VPN. Pokud používáte jiný režim, Samsung Pay bude fungovat bez přerušení.
