---
title: Jak vytvořit soubor výpisu
sidebar_position: 8
---

:::info

Tento článek popisuje AdGuard pro Windows, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li zjistit, jak funguje, [stáhněte si aplikaci AdGuard](https://agrd.io/download-kb-adblock)

:::

:::note

Data and/or files provided in dump files are processed in accordance with [the AdGuard Privacy Policy](https://adguard.com/en/privacy.html).

:::

K diagnostice příčin možných problémů, se kterými se uživatelé mohou setkat při používání AdGuardu, může tým podpory potřebovat soubor výpisu procesu. Soubor výpisu pomáhá vývojářům zobrazit procesy, které byly v aplikaci v daném časovém období spuštěny. Níže se můžete podívat na pokyny, jak shromáždit soubor výpisu v PC.

1. Stiskněte **Ctrl + Shift + Esc** a klikněte na **Správce úloh**

1. V menu vyberte **Podrobnosti**

    ![Task Manager details](https://cdn.adtidy.org/public/Adguard/kb/Windows_dump/details_en.png)

1. Klikněte pravým tlačítkem myši na proces, pro který chcete vytvořit soubor výpisu (například tým podpory vás může požádat o vytvoření výpisu pro `Adguard.exe`)

1. V rozevíracím menu klikněte na **Vytvořit soubor výpisu**

1. Soubor byl úspěšně vytvořen!

    ![Create dump file](https://cdn.adtidy.org/public/Adguard/kb/Windows_dump/create_dump_file_en.png)

Po vytvoření souboru výpisu přejděte do umístění souboru. Ihned po vytvoření souboru výpisu byste měli být vyzváni k otevření složky obsahující tento soubor. Jinak jej najdete ve složce **%tmp%**. Vytvořený soubor výpisu (`.DMP`) má stejný název jako název procesu, který jste vybrali v předchozích krocích. Soubor je poměrně velký, proto jej před odesláním na podporu zkomprimujte do archivu.

:::note

AdGuard for Windows has two running processes, `Adguard.exe` and `AdguardSvc.exe`. Therefore, it's necessary to create a separate dump file for each process.

:::

![AdGuard processes](https://cdn.adtidy.org/public/Adguard/kb/Windows_dump/processes_en.png)

Při odesílání výpisu souborů týmu podpory přiložte také záznamy aplikace AdGuard, abychom měli větší šanci problém vyřešit. [Here](../adguard-logs) you can check the instructions on how to get the log file.
