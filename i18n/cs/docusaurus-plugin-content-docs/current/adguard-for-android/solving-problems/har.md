---
title: Jak získat soubory HAR
sidebar_position: 5
---

:::info

Tento článek popisuje AdGuard pro Android, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li zjistit, jak funguje, [stáhněte si aplikaci AdGuard](https://adguard.com/download.html?auto=true)

:::

## Co jsou soubory HAR?
Formát HAR (HTTP ARchive) je archivní soubor ve formátu JSON pro zaznamenávání interakce webového prohlížeče s webem. Specifikace formátu HAR definuje archivační data pro transakce HTTP, která prohlížeč používá k exportu podrobných informací o načítaných webových stránkách. Podrobnější popis formátu HAR a jeho specifikace naleznete na webové stránce [ softwareishard.com](http://www.softwareishard.com/blog/har-12-spec/).

## Jak získat soubory HAR
Někdy musíme analyzovat, abychom zablokovali konkrétní reklamy, které je z nějakého důvodu obtížné reprodukovat. Chcete-li získat soubory HAR, postupujte takto:
1. Otevřete AdGuard a přejděte do "Nastavení".
2. V menu zvolte možnost "Pokročilé".
3. Vyberte možnost "Nízkoúrovňová nastavení".
4. Aktivujte "pref.har.capture" (budete muset restartovat ochranu).
5. Nyní problém reprodukujte – otevřete aplikaci a proveďte potřebné akce, aby se reklama zobrazila.
6. Nyní "pref.har.capture" opět vypněte.
7. Přejděte zpět a klepněte na "Exportovat protokoly a systémové informace" → Uložit.

**Zašlete prosím soubor se záznamy (které jste získali jako výsledek) službě podpory AdGuardu.**

:::note

Náš tým podpory zpracuje vaši žádost mnohem rychleji, pokud ve zprávě uvedete číslo HelpDesk nebo číslo problému GitHub.

:::

## Jak analyzovat soubory HAR
Zde je několik zdrojů, které můžeme doporučit k analýze souborů HAR:
* [HTTP Archive Viewer master](https://gitgrimbo.github.io/harviewer/master/) je nástroj pro analýzu HAR, který vizualizuje soubory protokolu HTTP Archive (HAR) vytvořené nástroji pro sledování HTTP.
* [Fiddler](https://www.telerik.com/fiddler) je proxy server pro ladění webu, který umožňuje zachytávat, kontrolovat a monitorovat veškerý provoz HTTP(S) mezi počítačem a Internetem, falšovat požadavky a diagnostikovat síťové problémy.
