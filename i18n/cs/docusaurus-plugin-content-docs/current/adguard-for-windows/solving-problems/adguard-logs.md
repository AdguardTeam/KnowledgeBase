---
title: Jak shromažďovat záznamy AdGuardu
sidebar_position: 3
---

:::info

Tento článek popisuje AdGuard pro Windows, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li zjistit, jak funguje, [stáhněte si aplikaci AdGuard](https://agrd.io/download-kb-adblock)

:::

Zakazuje prohlížeči Google Chrome odesílat informace o verzi a modifikaci s požadavky na domény Google (včetně DoubleClick a Google Analytics).

Údaje a/nebo soubory poskytnuté v protokolech jsou zpracovávány v souladu se [Zásadami ochrany osobních údajů AdGuardu](https://adguard.com/en/privacy.html).

:::

K analýze a diagnostice různých problémů, které mohou potenciálně nastat, může služba podpory AdGuard potřebovat soubory záznamů AdGuardu. Tyto soubory obsahují záznamy o chybách a dalších událostech, ke kterým došlo v softwaru. Níže je uveden stručný návod popisující způsoby, jak získat soubory záznamů a v případě potřeby je odeslat službě podpory.

Zakazuje prohlížeči Google Chrome odesílat informace o verzi a modifikaci s požadavky na domény Google (včetně DoubleClick a Google Analytics).

AdGuard se zavazuje chránit vaše soukromí. Přísně dodržujeme naše [Zásady ochrany osobních údajů](https://adguard.com/privacy/windows.html) a neshromažďujeme žádné soukromé informace o uživatelích. Před odesláním protokolů týmu podpory si soubor prohlédněte, protože může obsahovat další informace, které nechcete sdílet. Pokud takové osobní údaje obsahuje, doporučujeme je nejprve smazat.

:::

### Protokoly ladění {#debug-logs}

1. Otevřete nastavení AdGuardu. Přejděte do části *Obecná nastavení*, přejděte dolů na konec obrazovky a přepněte *Úroveň záznamu* na *Ladění*.

    ![Debug logging level *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-1.png)

1. Znovu reprodukujte problém.

    Důrazně doporučujeme zaznamenat přesný čas, kdy jste problém reprodukovali: pomůže to našemu týmu podpory najít příslušné záznamy v záznamu a rychleji vyřešit problém.

1. Exportujte záznamy pomocí tlačítka *Exportovat protokoly*.

    ![Export logs *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-2.png)

    Archiv uložte do libovolné složky.

1. **Důležité**: po exportu záznamů nastavte úroveň záznamu zpět na *Výchozí*. Úroveň *Ladění* zpomalí aplikaci.

1. Archiv odešlete službě podpory AdGuardu na adresu **support@adguard.com**, popište problém a nezapomeňte uvést čas, kdy jste problém reprodukovali.

### Záznamy trasování {#trace-logs}

Někdy vás členové týmu podpory mohou požádat o zaslání *záznamů trasování*. Pak je třeba provést následující:

1. Ukončete AdGuard kliknutím pravým tlačítkem na ikonu AdGuardu v nabídce na hlavním panelu a výběrem *Ukončit AdGuard*:

    ![Exit AdGuard *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-3.png)

    Nenechávejte službu spuštěnou:

    ![Stop AdGuard Service *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_logs_4.png)

1. Otevřete konzoli (na úvodním panelu zadejte `cmd`).

1. Spusťte aplikaci příkazem `C:\"Program Files"\Adguard\Adguard.exe /trace` bez ohledu na bitovou verzi Windows, pokud jste nainstalovali AdGuard pro Windows v7.16 nebo novější.

Pokud máte starší verzi AdGuard pro Windows, spusťte aplikaci příkazem C:\"Program Files (x86)"\Adguard\Adguard.exe /trace, pokud používáte 64bitový systém Windows a C:\"Program Files"\Adguard\Adguard.exe /trace, pokud používáte 32bitový systém.

1. Znovu reprodukujte problém.

    Důrazně doporučujeme zaznamenat přesný čas, kdy jste problém reprodukovali: pomůže to našemu týmu podpory najít příslušné záznamy v záznamu a rychleji vyřešit problém.

1. Exportujte záznamy pomocí tlačítka *Exportovat protokoly*.

    ![Export logs *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-2.png)

    Nedělejte si starosti, pokud je soubor záznamu velký. Abychom mohli váš problém vyřešit, potřebujeme znát co nejvíce podrobností.
