---
title: Jak používat Samsung Pay s AdGuardem v Jižní Korei
sidebar_position: 17
---

:::info

Tento článek popisuje AdGuard pro Android, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li zjistit, jak funguje, [stáhněte si aplikaci AdGuard](https://agrd.io/download-kb-adblock)

:::

Řada uživatelů se setkala s problémem, kdy Samsung Pay nefunguje, když je spuštěn AdGuard. Tento problém se vyskytuje téměř výhradně u zařízení registrovaných v Jižní Korei.

Co je příčinou tohoto problému? Někdy Samsung Pay nefunguje na zařízeních se spuštěnými službami VPN a AdGuard je jednou z těchto aplikací. Ve výchozím nastavení používá AdGuard k filtrování provozu lokální VPN. V důsledku toho museli uživatelé při platbách pomocí Samsung Pay vypnout AdGuard. Tomu se nyní lze vyhnout pomocí nové funkce **Detekce Samsung Pay**. Když je tato možnost povolena, aplikace AdGuard se pozastaví, kdykoli uživatel otevře aplikaci Samsung Pay a obnoví se po jejím zavření.

Chcete-li povolit **DetekciSamsung Pay**, postupujte takto:

1. Přejděte na **Nastavení** → **Obecné** → **Pokročilé** → **Nízkoúrovňová nastavení**

2. Přejděte na **Detekci Samsung Pay** a posuňte posuvník doprava

3. Klepněte na **Udělit oprávnění** a udělte AdGuard oprávnění shromažďovat vaše data

> Neshromažďujeme žádné osobní údaje, potřebujeme pouze statistiky o tom, jak Samsung Pay funguje, aby mohla fungovat funkce **Detekce Samsung Pay**.

Jakmile tuto funkci povolíte, bude vám AdGuard posílat oznámení, jak je znázorněno na obrázku.

![samsungpay *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/samsungpay-with-adguard-in-south-korea/en.gif)

:::note

Tato funkce bude fungovat pouze v případě, že je v nastavení AdGuardu zvolen režim filtrování lokální VPN. Pokud používáte jiný režim, Samsung Pay bude fungovat bez přerušení.

:::
