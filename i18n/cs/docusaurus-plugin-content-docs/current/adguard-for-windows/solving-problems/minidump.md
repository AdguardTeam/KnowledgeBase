---
title: Jak shromažďovat minidump BSOD
sidebar_position: 9
---

:::info

Tento článek popisuje AdGuard pro Windows, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li se podívat, jak to funguje, [stáhněte si AdGuard pro Android](https://agrd.io/download-kb-adblock).

:::

:::note

Údaje a soubory poskytnuté v souborech minidump jsou zpracovávány v souladu se [Zásadami ochrany osobních údajů AdGuardu](https://adguard.com/en/privacy.html).

:::

Při používání AdGuardu může občas dojít k chybám modré obrazovky smrti (BSOD). V takovém případě si náš tým podpory může vyžádat soubor minidump, který pomůže diagnostikovat problém. Tyto soubory obsahují technické údaje o pádech, které nám pomáhají identifikovat a vyřešit problém.

## Kontrola existujícího souboru minidump

Chcete-li shromáždit soubory minidump, potřebujete v počítači přístup správce. Ve výchozím nastavení ukládá systém Windows tyto soubory do složky `C:\Windows\Minidump\`. Hledané soubory budou pojmenovány buď `MEMORY.DMP`, nebo podle vzoru `Mini(ddmmmyy-xxx).dmp`, kde písmena a čísla představují data a pořadová čísla.

![Minidump file](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/minidump.png)

Pokud tyto soubory nemůžete najít, je možné, že váš systém není nakonfigurován na automatické vytváření souborů minidump.

## Konfigurace nastavení minidump

Pokud se minidump nevytváří automaticky, postupujte podle následujících kroků a povolte _Small Memory Dump_:

1. Stisknutím kláves _Windows + R_ otevřete dialogové okno _Run_.

2. Zadejte `sysdm.cpl` a klikněte na _Enter_. Otevře se okno _System properties_.

   ![Open system properties \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/sysdm.png)

3. Přejděte na kartu _Advanced_ → _Startup and Recovery_ → _Settings_.

   ![Advanced tab \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/advanced_tab.png)

4. Zde najdete možnost s názvem _Write debugging information_. Ujistěte se, že je nastaven na _Small Memory Dump (256 KB)_ a že cesta ukazuje `%SystemRoot%\Minidump`. Tato nastavení zajistí, že systém Windows při výskytu BSOD vytvoří potřebné soubory minidump.

   ![Small memory dump \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/systemroot.png)

5. Klikněte na _OK_ pro uložení změn.

## Po vzniku pádu aplikace

Po výskytu BSOD a restartování počítače najdete vygenerované soubory minidump ve složce `C:\Windows\Minidump\`. Seřazení souborů podle data změny usnadňuje nalezení nejnovějšího souboru odpovídajícího vašemu pádu aplikace.

Pokud jste nastavení minidump nakonfigurovali až po pádu, budete muset problém reprodukovat a vygenerovat nový soubor minidumpu.

## Shromažďování souboru `wfpdiag.cab`

Náš tým podpory si může vyžádat soubor wfpdiag.cab spolu se souborem minidump, aby mohl důkladněji analyzovat systémové protokoly a diagnostikovat problémy. Chcete-li soubor shromáždit, postupujte podle následujících kroků:

1. Zapněte AdGuard ochranu.

2. Klikněte na _Start_ a napište `cmd` pro otevření _příkazového řádku_.

3. Klikněte pravým tlačítkem myši na _příkazový řádek_ a vyberte možnost _Spustit jako správce_.

   Zakazuje prohlížeči Google Chrome odesílat informace o verzi a modifikaci s požadavky na domény Google (včetně DoubleClick a Google Analytics).

   V aktuálním adresáři se vytvoří soubor wfpdiag.cab. Umístění můžete změnit zadáním `cd <folder_name>`.

   :::

4. Chcete-li spustit protokolování, zadejte následující příkaz: `netsh wfp capture start`.

5. Navštivte libovolnou webovou stránku, abyste přesměrovali provoz skrze AdGuard a zaznamenali proces filtrování.

6. Chcete-li zastavit protokolování, zadejte `netsh wfp capture stop`.
