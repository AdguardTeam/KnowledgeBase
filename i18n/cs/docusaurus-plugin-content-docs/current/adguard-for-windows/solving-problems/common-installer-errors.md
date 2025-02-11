---
title: Běžné chyby instalačního programu
sidebar_position: 6
---

:::info

Tento článek popisuje AdGuard pro Windows, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li zjistit, jak funguje, [stáhněte si aplikaci AdGuard](https://agrd.io/download-kb-adblock)

:::

Tento článek obsahuje některé z nejčastějších chyb, se kterými se můžete setkat během instalace AdGuardu pro Windows, a možné způsoby jejich řešení.

### Chyba 5: Přístup odepřen {#error-5}

Tato chybová zpráva se zobrazí, pokud nejsou udělena požadovaná oprávnění. Může existovat několik různých důvodů, proč instalační program AdGuardu nemá oprávnění potřebná k řádnému dokončení procesu instalace. Můžete vyzkoušet následující kroky:

- Dočasně vypněte antivirové programy. Některé z nich mohou v závislosti na závažnosti svého nastavení instalaci narušovat.

- Zvolte jinou složku pro instalaci. Je možné, že aktuální složka pro instalaci má nějaká omezení přístupu. Také se ujistěte, že jste nevybrali externí jednotku, virtuální jednotku atd.

- Restartujte počítač. Někdy jsou problémy s oprávněním dočasné a lze je vyřešit restartováním počítače.

### Chyba 112: Disk je plný, Chyba 1632: Dočasná složka je plná nebo nedostupná {#error-112}

Jedná se o dvě různé chyby s velmi podobným řešením. Jak napovídá jejich název, instalační program AdGuardu nenašel dostatek místa na disku pro dokončení instalace. Problém můžete vyřešit několika způsoby:

- Odinstalujte některé programy nebo odstraňte nepotřebné soubory z jednotky, na kterou jste chtěli nainstalovat AdGuard.

- Stáhněte, nainstalujte a spusťte [AdwCleaner](http://www.bleepingcomputer.com/download/adwcleaner/), bezplatný software od společnosti Malwarebytes. Mimo jiné vyčistí váš systém od nejrůznějších pozůstatků souborů, které zůstaly po nesprávně odinstalovaných programech a podobně. Pomůže vyčistit místo na disku.

- Restartujte počítač. Dočasné soubory mohou někdy zabírat značné množství místa na disku a nejspolehlivějším způsobem, jak se jich zbavit, je restartování počítače.

### Chyba 1601: Instalační program pro Windows není přístupný {#error-1601}

Dalo by se říci, že se jedná o zvláštní podkategorii chyby 1603. Možná řešení jsou podobná:

- Start and re-register Microsoft Installer service. It requires some work.

    - Press *Win + R* and enter **services.msc**.
    - Find in the list and double click *Windows Installer*.
    - Hit *Start* button under *Service status* and hit *OK*. If the service status is **running**, you should click *Stop* first and then hit *Start*.
    - Press *Win + R*, type and enter ***msiexec /unregister*** and hit *Enter*.
    - Press *Win + R* again, type and enter ***msiexec /regserver*** and hit *Enter*

- Restartujte počítač a spusťte instalaci znovu. Někdy to k odstranění problému stačí.

### Chyba 1602: Zrušeno uživatelem {#error-1602}

Pokud se vám zobrazil tento chybový kód, je pravděpodobné, že jste tak či onak ručně přerušili proces instalace. Můžete udělat následující:

- Okno instalačního programu nezavírejte. Po dokončení instalace se zavře automaticky.

- Pokud se během instalace zobrazí dialogové okno, stiskněte tlačítko "Ano" a udělte instalačnímu programu požadovaná oprávnění. Kliknutím na tlačítko "Ne" instalaci zrušíte.

- Během instalace nespouštějte jiné procesy.

### Chyba 1603: Závažná chyba během instalace {#error-1603}

Chyba zní děsivěji, než ve skutečnosti je. Ve skutečnosti se jedná o poměrně obecnou chybu, která může mít mnoho různých příčin a některé z nich lze snadno odstranit. Vyzkoušejte následující řešení:

- Stiskněte klávesu *Win*, vyhledejte *Příkazový řádek* a spusťte jej. Zde napište `sfc /scannow` a stiskněte *enter*.

- Zvolte jinou složku pro instalaci. Je možné, že aktuální složka pro instalaci má nějaká omezení přístupu. Také se ujistěte, že jste nevybrali externí jednotku, virtuální jednotku atd.

- Odinstalujte AdGuard pomocí našeho speciálního [nástroje pro odinstalaci](../../installation#advanced) a poté instalaci zopakujte.

- Start and re-register Microsoft Installer service. It requires some work.

    - Press *Win + R* and enter ***services.msc***.
    - Find in the list and double click *Windows Installer*.
    - Hit *Start* button under *Service status* and hit *OK*. If the service status is **running**, you should click *Stop* first and then hit *Start*.
    - Press *Win + R*, type and enter ***msiexec /unregister*** and hit *Enter*.
    - Press *Win + R* again, type and enter ***msiexec /regserver*** and hit *Enter*

- Acquire full permissions on the drive for installation. It is possible that the error 1603 occurs because you don’t have full permissions on the file location. It's also not as easy as some of the other solutions:

    - Open *File Explorer*, right-click the drive containing the installation location and select *Properties*.
    - Go to *Security* tab and click *Edit*.
    - Single-click *SYSTEM* and ensure that the *Allow* box of every item in *Permissions for SYSTEM* is checked (if it is checkable). Do the same check for *Administrators*.
    - Click *OK* to go back to *Properties* dialog. Then click *Advanced*.
    - Click *Change Permissions*.
    - On *Permissions* tab, double-click *Administrators*.
    - Select *This folder, subfolders and files* for *Applies to* field and check all the available *Basic permissions*. After that, hit *OK*.
    - Do the same operation above (from item 7) for *SYSTEM*.
    - Click *OK* all the way out. Try installing AdGuard again.

### Chyba 1618: Již probíhá jiná instalace {#error-1618}

K této chybě dochází při současném spuštění několika instancí instalačního programu AdGuard. Co dělat, když se tato chyba zobrazí:

- Restartujte počítač a spusťte instalaci znovu. Po restartování počítače se zastaví všechny probíhající procesy, včetně všech kopií instalačního programu.

- Na instalační program neklikejte vícekrát, i když se nespustí hned. Zobrazení uživatelského rozhraní instalátoru může někdy trvat několik sekund.

### Chyba 1638: Další verze tohoto produktu je již nainstalována {#error-1638}

Je velmi pravděpodobné, že jste si AdGuard již dříve nainstalovali.

- Zkontrolujte, zda je v počítači již nainstalován AdGuard. Můžete to udělat stisknutím klávesy *Win* a zadáním názvu ***AdGuard***.

- Možná tam jsou nějaké zbytky souborů z předchozí instalace AdGuardu. Odinstalujte AdGuard pomocí našeho speciálního [nástroje pro odinstalaci](../../installation#advanced) a poté instalaci zopakujte.

### Další chyby {#other}

Pokud jste narazili na chybu, která není uvedena výše, je možné, že ji dokážeme vyřešit sami. K tomu však od vás potřebujeme soubory záznamů. Proveďte následující kroky:

- Vyhledejte a archivujte **instalační protokoly AdGuardu** jak je popsáno v [tomto článku](../installation-logs).

- Vyhledejte a uložte na disk **záznamy prohlížeče událostí**. [Tento článek](../system-logs) vysvětluje, jak to udělat.

- Všechny tyto soubory z předchozích dvou kroků zašlete e-mailem na adresu **support@adguard.com** a v těle zprávy popište problém. Naši agenti technické podpory vám odpoví co nejdříve.
