---
title: Jak vytvořit soubor minidump pro opravu chyby BSoD
sidebar_position: 8
---

Téměř všichni uživatelé systému Windows bohužel znají chybu [Modrá obrazovka smrti (BSoD)](https://en.wikipedia.org/wiki/Blue_screen_of_death). K BSoD dochází, když systém Windows narazí na problémy, které mohou ovlivnit bezpečný provoz systému, např. problémy s kódem ovladače třetí strany, hardwarem nebo kódem společnosti Microsoft. K vyřešení chyby modré obrazovky mohou uživatelé použít soubor minidump.

## Co je soubor minidump?

Soubor minidump je soubor, který obsahuje informace o povaze pádu systému. Vytvoří se těsně před zobrazením modré obrazovky a obsahuje minimum užitečných informací, které lze použít k řešení problému. Soubor minidump má obvykle příponu *.dmp*.

:::note
V systému Windows 10 se na modré obrazovce zobrazí kód pro ukončení a QR kód. Uživatel může tyto informace použít a vyhledat na webu konkrétní problém.

:::

Možnost vytvoření souboru minidump je ve výchozím nastavení zakázána, takže než se podrobněji seznámíme s tím, jak soubor používat, podívejme se blíže na to, jak tuto možnost povolit.

## Nastavení systému Windows pro vytvoření souboru minidump

I když nedochází k chybám při pádu BSoD, můžete tuto možnost nastavit — jedná se o obecné doporučení, které se nemusí nutně týkat produktů AdGuard. Pro automatické vytvoření souboru minidump postupujte podle níže uvedených pokynů.

 1. Type *sysdm.cpl* in the Windows search bar and click **Open**. The **System Properties Control Panel Menu** window will appear on the screen.

    :::tip

    Alternatively, click **Settings** → **System** → **About** → **Advanced system settings**.


:::

    ![System Properties *mobile_border](https://cdn.adtidy.org/blog/new/c2huSystem_Properties.jpeg)

 1. Go to the **Advanced** tab.
 1. In the **Startup and Recovery** section, click **Settings**.

    ![Startup and Recovery *mobile_border](https://cdn.adtidy.org/blog/new/1dmybiStartup_and_Recovery.png)

 1. Enable the following three options:

    - Zapsat událost do systémového protokolu
    - Automaticky restartovat
    - Zapsat ladící informace → Zkrácený výpis stavu paměti (256 kb)

    ![Three options *mobile_border](https://cdn.adtidy.org/blog/new/nmr4eThree_options.png)

 1. Kliknutím na **OK** nastavení uložte.
 1. Restartujte počítač.

Úspěšně jste povolili vytvoření souboru minidump. Nyní se automaticky vytvoří při pádu systému.

:::note

Ve výchozím nastavení je soubor minidump uložen ve složce **%SystemRoot%\Minidump**. Umístění adresáře můžete změnit na libovolné, ale nezapomeňte, že mnoho programů je nastaveno tak, aby toto umístění hledaly ve výchozím nastavení, proto doporučujeme umístění neměnit.

:::

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
