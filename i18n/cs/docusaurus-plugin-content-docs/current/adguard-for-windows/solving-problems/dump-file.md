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

1. Press *Ctrl + Shift + Esc* to open *Task Manager*.

1. In the left sidebar, click *Details*. ![Task Manager details *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/dump_file/new/task_manager_en.png)
1. Right-click the process you want to create a dump file for. In the drop-down menu, click *Create memory dump file*. ![Create dump file *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/dump_file/new/create_dump_en.png)
1. Once the dump file is created, you’ll be prompted to open the folder where it’s saved. If not, you can find it in the **%tmp%** folder. ![Open file location *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/dump_file/new/open_file_location_en.png)

Vytvořený soubor výpisu (`.DMP`) bude mít stejný název jako proces, který jste vybrali.

:::note

AdGuard pro Windows spouští dva procesy `Adguard.exe` a `AdguardSvc.exe`. Pro každý z nich je třeba vytvořit samostatný soubor výpisu.

:::

![Two processes *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/dump_file/new/two_processes_en.png)

Protože soubory mohou být velké, před odesláním na podporu je zkomprimujte do archivu. Přiložte také logy AdGuardu, které nám pomohou problém lépe diagnostikovat. [Pokyny pro sběr logů](../adguard-logs).

## Collecting wfpdiag.cab file

Our support team may request a wfpdiag.cab file, along with a minidump file, to analyze system logs more thoroughly and diagnose issues. To collect the file, please follow these steps:

1. Zapněte AdGuard ochranu.

1. Click *Start* and type `cmd` to open Command Prompt

1. Right-click Command Prompt and choose *Run as administrator*

    :::note

    A wfpdiag.cab file is created in your current directory. You can change the location by typing `cd <folder_name>`.


:::

1. To start logging, enter the following command: `netsh wfp capture start`

1. Visit any website to route traffic through AdGuard and log the filtering process

1. To stop logging, enter `netsh wfp capture stop`
