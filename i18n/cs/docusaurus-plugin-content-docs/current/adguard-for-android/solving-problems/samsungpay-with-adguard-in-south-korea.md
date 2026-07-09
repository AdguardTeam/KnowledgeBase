---
title: Jak používat Samsung Pay s AdGuardem v Jižní Korei
sidebar_position: 16
---

:::info

Tento článek popisuje AdGuard pro Android, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li zjistit, jak funguje, [stáhněte si aplikaci AdGuard](https://agrd.io/download-kb-adblock)

:::

Řada uživatelů se setkala s problémem, kdy Samsung Pay nefunguje, když je spuštěn AdGuard. Tento problém se vyskytuje téměř výhradně u zařízení registrovaných v Jižní Korei.

Co je příčinou tohoto problému? Někdy Samsung Pay nefunguje na zařízeních se spuštěnými službami VPN a AdGuard je jednou z těchto aplikací. Ve výchozím nastavení používá AdGuard k filtrování provozu lokální VPN, což může způsobit problémy při používání Samsung Pay.

V důsledku toho museli uživatelé při platbách pomocí Samsung Pay vypnout AdGuard. Tomu se lze vyhnout pomocí funkce *Detekce Samsung Pay*. Když je tato možnost povolena, aplikace AdGuard se pozastaví, kdykoli uživatel otevře aplikaci Samsung Pay a obnoví se po jejím zavření.

Zakazuje prohlížeči Google Chrome odesílat informace o verzi a modifikaci s požadavky na domény Google (včetně DoubleClick a Google Analytics).

Tato funkce bude fungovat pouze v případě, že je v nastavení AdGuardu zvolen režim filtrování lokální VPN. Pokud používáte jiný režim, Samsung Pay bude fungovat bez přerušení.

:::

Chcete-li povolit *Detekci Samsung Pay*, postupujte takto:

1. Jděte do *Nastavení* → *Obecné* → *Pokročilé* → *Nízkoúrovňová nastavení*.

1. Přejděte na *Detekci Samsung Pay* a posuňte posuvník doprava.

1. Klepněte na *Povolit oprávnění* a udělte AdGuardu přístup k informacím o používání jiných aplikací.

Aby funkce *Detekce Samsung Pay* fungovala, potřebujeme to ke shromažďování statistik o fungování Samsung Pay.

Po povolení této funkce se při přepnutí ze Samsung Pay na AdGuard zobrazí následující zpráva, jak je znázorněno na obrázku.

![samsungpay *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/samsungpay-with-adguard-in-south-korea/samsung_pay.png)

Případně můžete deaktivovat filtrování pro Samsung Pay ve *Správě aplikací*. Jednoduše přejděte na obrazovku *Správa aplikací* (třetí karta odspodu), najděte v seznamu Samsung Pay a přepněte přepínač na *Směrovat provoz skrze AdGuard*.
