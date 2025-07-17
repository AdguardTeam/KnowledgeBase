---
title: Jak vytvořit soubor výpisu
sidebar_position: 8
---

:::info

Tento článek popisuje AdGuard pro Windows, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li zjistit, jak funguje, [stáhněte si aplikaci AdGuard](https://agrd.io/download-kb-adblock).

:::

:::note

Údaje a soubory poskytnuté v souborech dump jsou zpracovávány v souladu se [Zásadami ochrany osobních údajů AdGuardu](https://adguard.com/en/privacy.html).

:::

Pokud se při používání AdGuardu vyskytne problém, tým podpory vás může požádat o poskytnutí výpisu. Tento soubor pomáhá vývojářům zjistit, jaké procesy byly v aplikaci v daném okamžiku spuštěny, a určit příčinu problému.

Při vytváření výpisu postupujte podle následujících kroků:

1. Stiskněte *Ctrl + Shift + Esc* a otevřete *Správce úloh*.

1. V levém postranním panelu klikněte na *Podrobnosti*. ![Task Manager details *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/dump_file/new/task_manager_en.png)
1. Klikněte pravým tlačítkem myši na proces, pro který chcete vytvořit výpis. V rozevíracím menu klikněte na *Vytvořit soubor výpisu paměti*. ![Create dump file *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/dump_file/new/create_dump_en.png)
1. Jakmile je soubor výpisu vytvořen, zobrazí se vám výzva k otevření složky, kde je uložen. Pokud ne, najdete ho ve složce **%tmp%**. ![Open file location *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/dump_file/new/open_file_location_en.png)

Vytvořený soubor výpisu (`.DMP`) bude mít stejný název jako proces, který jste vybrali.

Zakazuje prohlížeči Google Chrome odesílat informace o verzi a modifikaci s požadavky na domény Google (včetně DoubleClick a Google Analytics).

AdGuard pro Windows spouští dva procesy `Adguard.exe` a `AdguardSvc.exe`. Pro každý z nich je třeba vytvořit samostatný soubor výpisu.

:::

![Two processes *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/dump_file/new/two_processes_en.png)

Protože soubory mohou být velké, před odesláním na podporu je zkomprimujte do archivu. Přiložte také logy AdGuardu, které nám pomohou problém lépe diagnostikovat. [Pokyny pro sběr logů](../adguard-logs).

## Shromažďování souboru wfpdiag.cab

Náš tým podpory si může vyžádat soubor wfpdiag.cab spolu se souborem minidump, aby mohl důkladněji analyzovat systémové protokoly a diagnostikovat problémy. Chcete-li soubor shromáždit, postupujte podle následujících kroků:

1. Zapněte AdGuard ochranu.

1. Klikněte na *Start* a napište `cmd` pro otevření příkazového řádku

1. Klikněte pravým tlačítkem myši na příkazový řádek a vyberte možnost *Spustit jako správce*

    Zakazuje prohlížeči Google Chrome odesílat informace o verzi a modifikaci s požadavky na domény Google (včetně DoubleClick a Google Analytics).

    V aktuálním adresáři se vytvoří soubor wfpdiag.cab. Umístění můžete změnit zadáním `cd<folder_name>`.


:::

1. Chcete-li spustit protokolování, zadejte následující příkaz: `netsh wfp capture start`

1. Navštivte libovolnou webovou stránku, abyste přesměrovali provoz skrze AdGuard a zaznamenali proces filtrování

1. Chcete-li zastavit protokolování, zadejte `netsh wfp capture stop`
