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

 1. Do vyhledávacího pole Windows napište *sysdm.cpl* a klikněte na **Otevřít**. Na obrazovce se zobrazí okno **Vlastnosti systému**.

    :::tip

    Případně klikněte na **Nastavení** → **Systém** → **Informace** → **Pokročilá nastavení systému**.


:::

    ![System Properties *mobile_border](https://cdn.adtidy.org/blog/new/c2huSystem_Properties.jpeg)

 1. Přejděte na kartu **Upřesnit**.
 1. V části **Spouštění a zotavení systému** klikněte na **Nastavení**.

    ![Startup and Recovery *mobile_border](https://cdn.adtidy.org/blog/new/1dmybiStartup_and_Recovery.png)

 1. Povolte následující tři možnosti:

    - Zapsat událost do systémového protokolu
    - Automaticky restartovat
    - Zapsat ladící informace → Zkrácený výpis stavu paměti (256 kb)

    ![Three options *mobile_border](https://cdn.adtidy.org/blog/new/nmr4eThree_options.png)

 1. Kliknutím na **OK** nastavení uložte.
 1. Restartujte počítač.

Úspěšně jste povolili vytvoření souboru minidump. Nyní se automaticky vytvoří při pádu systému.

Zakazuje prohlížeči Google Chrome odesílat informace o verzi a modifikaci s požadavky na domény Google (včetně DoubleClick a Google Analytics).

Ve výchozím nastavení je soubor minidump uložen ve složce **%SystemRoot%\Minidump**. Umístění adresáře můžete změnit na libovolné, ale nezapomeňte, že mnoho programů je nastaveno tak, aby toto umístění hledaly ve výchozím nastavení, proto doporučujeme umístění neměnit.

:::

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
