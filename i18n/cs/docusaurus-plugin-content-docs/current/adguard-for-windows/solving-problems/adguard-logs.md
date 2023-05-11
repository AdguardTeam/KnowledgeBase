---
title: Jak shromažďovat a záznamy AdGuardu
sidebar_position: 3
---

K analýze a diagnostice různých problémů, které mohou potenciálně nastat, může služba podpory AdGuard potřebovat soubory záznamů AdGuardu. Tyto soubory obsahují záznamy o chybách a dalších událostech, ke kterým došlo v softwaru. Níže je uveden stručný návod popisující způsoby, jak získat soubory záznamů a v případě potřeby je odeslat službě podpory.

1. Otevřete nastavení AdGuardu. Přejděte do části *Obecná nastavení*, přejděte dolů na konec obrazovky a přepněte *Úroveň záznamu* na *Ladění*.

![Debug logging level *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-1.png)

2. Znovu reprodukujte problém.

- Důrazně doporučujeme zaznamenat přesný čas, kdy jste problém reprodukovali: pomůže to našemu týmu podpory najít příslušné záznamy v záznamu a rychleji vyřešit problém.

3. Exportujte záznamy pomocí tlačítka *Exportovat protokoly*.

![Export logs *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-2.png)

- Archiv uložte do libovolné složky.

4. **Důležité**: po exportu záznamů nastavte úroveň záznamu zpět na *Výchozí*. Úroveň *Ladění* zpomalí aplikaci.

5. Archiv odešlete službě podpory AdGuardu na adresu **support@adguard.com**, popište problém a nezapomeňte uvést čas, kdy jste problém reprodukovali.

### Záznamy trasování {#trace-logs}

Někdy vás členové týmu podpory mohou požádat o zaslání *záznamů trasování*. Pak je třeba provést následující:

1. Ukončete AdGuard kliknutím pravým tlačítkem na ikonu AdGuardu v nabídce na hlavním panelu a výběrem *Ukončit AdGuard*:

![Exit AdGuard *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-3.png)

Nenechávejte službu spuštěnou:

![Stop AdGuard Service *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_logs_4.png)

2. Otevřete konzoli (na úvodním panelu zadejte `cmd`).

3. Spusťte aplikaci pomocí příkazu `C:\"Program Files (x86)"\Adguard\Adguard.exe /trace`, pokud používáte 64bitový systém Windows, nebo `C:\"Program Files"\Adguard\Adguard.exe /trace` v případě, že používáte 32bitový.

4. Vyberte úroveň záznamu *Ladění*.

![Debug *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-1.png)

5. Znovu reprodukujte problém.

- Důrazně doporučujeme zaznamenat přesný čas, kdy jste problém reprodukovali: pomůže to našemu týmu podpory najít příslušné záznamy v záznamu a rychleji vyřešit problém.

6. Exportujte záznamy pomocí tlačítka *Exportovat protokoly*.

![Export logs *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-2.png)

7. **Důležité**: po exportu záznamů nastavte úroveň záznamu zpět na *Výchozí*. Úroveň *Ladění* zpomalí aplikaci.

Nedělejte si starosti, pokud je soubor záznamu velký. Abychom mohli váš problém vyřešit, potřebujeme znát co nejvíce podrobností.
