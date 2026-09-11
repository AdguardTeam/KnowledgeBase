---
title: Jak shromažďovat záznamy AdGuardu
sidebar_position: 3
---

:::info

Tento článek popisuje AdGuard pro Windows, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li se podívat, jak to funguje, [stáhněte si aplikaci AdGuard](https://agrd.io/download-kb-adblock)

:::

:::note

Data and/or files provided in logs are processed in accordance with [the AdGuard Privacy Policy](https://adguard.com/en/privacy.html).

:::

K analýze a diagnostice různých problémů, které mohou potenciálně nastat, může služba podpory AdGuard potřebovat soubory záznamů AdGuardu. Tyto soubory obsahují záznamy o chybách a dalších událostech, ke kterým došlo v softwaru. Níže je uveden stručný návod popisující způsoby, jak získat soubory záznamů a v případě potřeby je odeslat službě podpory.

:::note

AdGuard se zavazuje chránit vaše soukromí. We strictly follow our [Privacy Policy](https://adguard.com/privacy/windows.html) and do not collect any private information about users. Před odesláním protokolů týmu podpory si soubor prohlédněte, protože může obsahovat další informace, které nechcete sdílet. Pokud takové osobní údaje obsahuje, doporučujeme je nejprve smazat.

:::

### Debug logs {#debug-logs}

1. Otevřete nastavení AdGuardu. Go to the _General Settings_ section, scroll down to the bottom of the screen, and switch the _Logging Level_ to _Debug_.

   ![Debug logging level \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-1.png)

2. Znovu reprodukujte problém.

   Důrazně doporučujeme zaznamenat přesný čas, kdy jste problém reprodukovali: pomůže to našemu týmu podpory najít příslušné záznamy v záznamu a rychleji vyřešit problém.

3. Export the collected logs using the _Export Logs_ button.

   ![Export logs \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-2.png)

   Archiv uložte do libovolné složky.

4. **Important**: after exporting the logs, set the logging level back to _Default_. _Debug_ logging level will slow down the application.

5. Send the archive to the AdGuard support service at **support@adguard.com**, describe the problem and don't forget to mention the time when you reproduced the issue.

### Trace logs {#trace-logs}

Sometimes support team members may ask you to send _trace_ logs. Pak je třeba provést následující:

1. Stop AdGuard by right-clicking the AdGuard icon in the tray menu and choosing _Exit AdGuard_:

   ![Exit AdGuard \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-3.png)

   Nenechávejte službu spuštěnou:

   ![Stop AdGuard Service \*mobile_border](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_logs_4.png)

2. Open the console (type `cmd` in the start panel).

3. Run the application with the command `C:\"Program Files"\Adguard\Adguard.exe /trace` regardless of Windows bitness if you have installed AdGuard for Windows v7.16 or later.

Pokud máte starší verzi AdGuard pro Windows, spusťte aplikaci příkazem C:\"Program Files (x86)"\Adguard\Adguard.exe /trace, pokud používáte 64bitový systém Windows a C:\"Program Files"\Adguard\Adguard.exe /trace, pokud používáte 32bitový systém.

1. Znovu reprodukujte problém.

   Důrazně doporučujeme zaznamenat přesný čas, kdy jste problém reprodukovali: pomůže to našemu týmu podpory najít příslušné záznamy v záznamu a rychleji vyřešit problém.

2. Export the collected logs using the _Export Logs_ button.

   ![Export logs \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-2.png)

   Nedělejte si starosti, pokud je soubor záznamu velký. Abychom mohli váš problém vyřešit, potřebujeme znát co nejvíce podrobností.
