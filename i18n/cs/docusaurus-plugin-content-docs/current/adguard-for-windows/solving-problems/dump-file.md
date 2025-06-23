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

:::note

AdGuard pro Windows spouští dva procesy `Adguard.exe` a `AdguardSvc.exe`. Pro každý z nich je třeba vytvořit samostatný soubor výpisu.

:::

![Two processes *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/dump_file/new/two_processes_en.png)

Protože soubory mohou být velké, před odesláním na podporu je zkomprimujte do archivu. Přiložte také logy AdGuardu, které nám pomohou problém lépe diagnostikovat. [Pokyny pro sběr logů](../adguard-logs).
