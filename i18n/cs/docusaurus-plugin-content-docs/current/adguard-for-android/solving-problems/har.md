---
title: Jak generovat soubory HAR
sidebar_position: 5
---

:::info

Tento článek popisuje AdGuard pro Android, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li zjistit, jak funguje, [stáhněte si aplikaci AdGuard](https://agrd.io/download-kb-adblock)

:::

:::note

Soubory HAR jsou zpracovávány v souladu se [Zásadami ochrany osobních údajů AdGuardu](https://adguard.com/en/privacy.html).

:::

## Co jsou soubory HAR?

Formát HAR (HTTP ARchive) je archivní soubor ve formátu JSON pro zaznamenávání interakce webového prohlížeče s webem. Specifikace formátu HAR definují archivační data pro transakce HTTP, která prohlížeč používá k exportu podrobných informací o načítaných webových stránkách. Podrobnější popis formátu HAR a jeho specifikace naleznete na webové stránce [ softwareishard.com](http://www.softwareishard.com/blog/har-12-spec/).

## Jak generovat soubory HAR

Někdy musíme analyzovat, abychom zablokovali konkrétní reklamy, které je z nějakého důvodu obtížné reprodukovat. Chcete-li získat soubory HAR, postupujte takto:

1. Otevřete AdGuard a přejděte do **Nastavení** (ikona ⚙ v pravém dolním rohu).
2. Klepněte na **Obecné** →**Pokročilé** → **Nízkoúrovňová nastavení**.
3. Přejděte dolů a aktivujte **Zachytit HAR** v části Filtrování.
4. Otevřete aplikaci a proveďte potřebné akce k reprodukci problému.
5. Vypněte **Zachytit HAR**.
6. Přejděte zpět na **Pokročilé**.
7. Klepněte na **Exportovat protokoly a systémové informace** → **Povolit** (je-li to nutné) → **Uložit**.

**Vygenerovaný soubor s protokoly odešlete službě podpory AdGuard.**

Zakazuje prohlížeči Google Chrome odesílat informace o verzi a modifikaci s požadavky na domény Google (včetně DoubleClick a Google Analytics).

Náš tým podpory zpracuje vaši žádost mnohem rychleji, pokud ve zprávě uvedete číslo HelpDesk nebo číslo problému GitHub.

:::

## Jak analyzovat soubory HAR

Zde je několik zdrojů, které můžeme doporučit k analýze souborů HAR:

- [HTTP Archive Viewer master](https://gitgrimbo.github.io/harviewer/master/) je nástroj pro analýzu HAR, který vizualizuje soubory protokolu HTTP Archive (HAR) vytvořené nástroji pro sledování HTTP.
- [Fiddler](https://www.telerik.com/fiddler) je proxy server pro ladění webu, který umožňuje zachytávat, kontrolovat a monitorovat veškerý provoz HTTP(S) mezi počítačem a Internetem, falšovat požadavky a diagnostikovat síťové problémy.
