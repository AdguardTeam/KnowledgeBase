---
title: How to collect AdGuard logs
sidebar_position: 3
---

:::info

Tento článek popisuje AdGuard pro Windows, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li zjistit, jak funguje, [stáhněte si aplikaci AdGuard](https://agrd.io/download-kb-adblock)

:::

:::note

Údaje a/nebo soubory poskytnuté v protokolech jsou zpracovávány v souladu se [Zásadami ochrany osobních údajů AdGuardu](https://adguard.com/en/privacy.html).

:::

K analýze a diagnostice různých problémů, které mohou potenciálně nastat, může služba podpory AdGuard potřebovat soubory záznamů AdGuardu. These files contain records about errors and other events that occur with the software. Níže je uveden stručný návod popisující způsoby, jak získat soubory záznamů a v případě potřeby je odeslat službě podpory.

:::note

AdGuard is committed to protecting your privacy. We strictly follow our [Privacy Policy](https://adguard.com/privacy/windows.html) and do not collect any private information about users. Before sending your logs to the support team, please review the file as it may contain additional information that you don’t want to share. If it contains such personal information, we recommend that you delete it first.

:::

### Debug logs {#debug-logs}

1. Otevřete nastavení AdGuardu. Go to the *General Settings* section, scroll down to the bottom of the screen, and switch the *Logging Level* to *Debug*.

    ![Debug logging level *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-1.png)

1. Znovu reprodukujte problém.

    Důrazně doporučujeme zaznamenat přesný čas, kdy jste problém reprodukovali: pomůže to našemu týmu podpory najít příslušné záznamy v záznamu a rychleji vyřešit problém.

1. Export the collected logs using the *Export Logs* button.

    ![Export logs *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-2.png)

    Archiv uložte do libovolné složky.

1. **Important**: after exporting the logs, set the logging level back to *Default*. Úroveň *Ladění* zpomalí aplikaci.

1. Archiv odešlete službě podpory AdGuardu na adresu **support@adguard.com**, popište problém a nezapomeňte uvést čas, kdy jste problém reprodukovali.

### Záznamy trasování {#trace-logs}

Někdy vás členové týmu podpory mohou požádat o zaslání *záznamů trasování*. Pak je třeba provést následující:

1. Ukončete AdGuard kliknutím pravým tlačítkem na ikonu AdGuardu v nabídce na hlavním panelu a výběrem *Ukončit AdGuard*:

    ![Exit AdGuard *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-3.png)

    Nenechávejte službu spuštěnou:

    ![Stop AdGuard Service *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_logs_4.png)

1. Otevřete konzoli (na úvodním panelu zadejte `cmd`).

1. Spusťte aplikaci příkazem `C:\"Program Files"\Adguard\Adguard.exe /trace` bez ohledu na bitovou verzi Windows, pokud jste nainstalovali AdGuard v7.16 pro Windows nebo novější.

Pokud máte starší verzi AdGuard pro Windows, spusťte aplikaci příkazem C:\"Program Files (x86)"\Adguard\Adguard.exe /trace, pokud používáte 64bitový systém Windows a C:\"Program Files"\Adguard\Adguard.exe /trace, pokud používáte 32bitový systém.

1. Znovu reprodukujte problém.

    Důrazně doporučujeme zaznamenat přesný čas, kdy jste problém reprodukovali: pomůže to našemu týmu podpory najít příslušné záznamy v záznamu a rychleji vyřešit problém.

1. Export the collected logs using the *Export Logs* button.

    ![Export logs *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-2.png)

    Nedělejte si starosti, pokud je soubor záznamu velký. Abychom mohli váš problém vyřešit, potřebujeme znát co nejvíce podrobností.
