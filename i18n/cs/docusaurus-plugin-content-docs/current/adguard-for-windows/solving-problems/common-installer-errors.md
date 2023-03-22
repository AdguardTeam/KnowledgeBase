---
title: Běžné chyby instalačního programu
sidebar_position: 6
---

Tento článek obsahuje některé z nejčastějších chyb, se kterými se můžete setkat během instalace AdGuardu pro Windows, a možné způsoby jejich řešení.

### Chyba 5: Přístup odepřen {#error-5}

K této chybě dochází, pokud je něco v nepořádku s oprávněními. Může existovat několik různých důvodů, proč instalační program AdGuardu nemá oprávnění potřebná k řádnému dokončení procesu instalace. Můžete vyzkoušet následující kroky:

- Dočasně vypněte antivirové programy. Některé z nich mohou v závislosti na závažnosti svého nastavení instalaci narušovat.

- Zvolte jinou složku pro instalaci. Je možné, že aktuální složka pro instalaci má nějaká omezení přístupu. Také se ujistěte, že jste nevybrali externí jednotku, virtuální jednotku atd.

- Restartujte počítač. Někdy jsou problémy s oprávněním dočasné a lze je vyřešit restartováním počítače.

### Chyba 112: Disk je plný, Chyba 1632: Dočasná složka je plná nebo nedostupná {#error-112}


Jedná se o dvě různé chyby s velmi podobným řešením. Jak napovídá jejich název, instalační program AdGuardu nenašel dostatek místa na disku pro dokončení instalace. Problém můžete vyřešit několika způsoby:

- Odinstalujte některé programy nebo odstraňte nepotřebné soubory z jednotky, na kterou jste chtěli nainstalovat AdGuard.

- Stáhněte, nainstalujte a spusťte [AdwCleaner](http://www.bleepingcomputer.com/download/adwcleaner/), bezplatný software od společnosti Malwarebytes. Mimo jiné vyčistí váš systém od nejrůznějších pozůstatků souborů, které zůstaly po nesprávně odinstalovaných programech a podobně. Pomůže vyčistit místo na disku.

- Restartujte počítač. Dočasné soubory mohou někdy zabírat značné množství místa na disku a nejspolehlivějším způsobem, jak se jich zbavit, je restartování počítače.

### Chyba 1601: Instalační program pro Windows není přístupný {#error-1601}

Dalo by se říci, že se jedná o zvláštní podtyp chyby 1603. Možná řešení jsou podobná:

- Spusťte a znovu zaregistrujte službu Microsoft Installer. Vyžaduje to určitou práci.

    1) Stiskněte *Win + R* a napište **services.msc**. 2) Vyhledejte v seznamu *Instalační služba systému Windows* a dvakrát na ni klikněte. 3) Stiskněte tlačítko *Spustit* pod položkou *Stav služby* a stiskněte *OK*. Pokud stav služby **běží**, měli byste nejprve kliknout na *Ukončit* a poté stisknout *Spustit*. 4) Stiskněte *Win + R*, napište ***msiexec /unregister*** a stiskněte *enter*. 5) Stiskněte znovu *Win + R*, napište ***msiexec /regserver*** a stiskněte *enter*

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

- Spusťte a znovu zaregistrujte službu Microsoft Installer. Vyžaduje to určitou práci.

    1) Stiskněte *Win + R* a napište ***services.msc***. 2) Vyhledejte v seznamu *Instalační služba systému Windows* a dvakrát na ni klikněte. 3) Stiskněte tlačítko *Spustit* pod položkou *Stav služby* a stiskněte *OK*. Pokud stav služby **běží**, měli byste nejprve kliknout na *Ukončit* a poté stisknout *Spustit*. 4) Stiskněte *Win + R*, napište ***msiexec /unregister*** a stiskněte *enter*. 5) Stiskněte znovu *Win + R*, napište ***msiexec /regserver*** a stiskněte *enter*

- Získejte plná oprávnění na jednotce pro instalaci. Je možné, že k chybě 1603 dochází, protože nemáte úplná oprávnění k umístění souboru. Také to není tak snadné jako některá jiná řešení:

    1) Otevřete *Průzkumník souborů*, klepněte pravým tlačítkem myši na jednotku obsahující umístění instalace a vyberte *Vlastnosti*. 2) Přejděte na *Zabezpečení* a klikněte na *Upravit*. 3) Klikněte jednou myší na *SYSTÉM* a ujistěte se, že je *zaškrtnuto* políčko u každé položky v části *Oprávnění pro SYSTÉM* (pokud je možné je zaškrtnout). Stejnou kontrolu proveďte i pro *Správce*. 4) Kliknutím na *OK* se vrátíte do dialogu *Vlastnosti*. Poté klikněte na *Pokročilé*. 5) Klikněte na *Změnit oprávnění*. 6) Na kartě *Oprávnění* dvakrát klikněte na *Správci*. 7) Vyberte *Tato složka, podsložky a soubory* pro pole *Použít pro* a zaškrtněte všechna dostupná *Základní oprávnění*. Poté stiskněte *OK*. 8) Proveďte stejnou operaci jako výše (od bodu 7) pro *SYSTÉM*. 9) Úplně nakonec klikněte na *OK*. Zkuste AdGuard nainstalovat znovu.

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
