---
title: Problémy se spouštěním v macOS
sidebar_position: 6
---

:::note

Tento článek popisuje AdGuard pro macOS, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li zjistit, jak funguje, [stáhněte si aplikaci AdGuard](https://adguard.com/download.html?auto=true)

:::

Občas může systém macOS způsobit poškození modulu síťového rozšíření AdGuardu, což znemožní používání aplikace. V takovém případě byste měli postupovat podle jednoho z těchto pokynů v závislosti na verzi operačního systému.

## Problémy se spouštěním v macOS 11 a vyšším

Pokud máte problémy se spouštěním AdGuardu for Mac v operačních systémech Big Sur a Monterey, použijte tento návod:

1. Restartujte Mac a vstupte do režimu obnovení [](https://support.apple.com/en-us/HT201255).
2. Vypněte SIP (spusťte **Terminal** z nabídky **Nástroje** a zadejte `csrutil disable`).
3. Restartujte Mac.
4. Zavřete aplikaci AdGuard, otevřete **Terminal** a zadejte `systemextensionsctl reset`.
5. Restartujte Mac a přejděte do režimu obnovení.
6. Zapněte SIP (spusťte **Terminal** z nabídky <strong x-iyd="1">Nástroje</strong> a zadejte `csrutil enable`).
7. Spusťte aplikaci AdGuard a zapněte ochranu.

## Problémy se spouštěním v macOS 10

Pokud máte problémy se spouštěním AdGuardu for Mac v operačních systémech Sierra, Mojave a Catalina, použijte tento návod:

1. Otevřete **Terminal** a zadejte příkaz `ls -@lOae /private/var/db/KernelExtensionManagement`.
2. Zkontrolujte, zda není zobrazen příznak `restricted` (jako na obrázku).

![Příklad příkazu *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/restricted-flag.jpg)

3. Restartujte Mac v režimu obnovení.
4. Otevřete **Nástroje** → **Terminal**.
5. Napište `csrutil disable`.
6. Zadejte heslo správce.
7. Restartujte Mac.
8. Otevřete **Terminal** a zadejte následující příkaz: `sudo chflags restricted /private/var/db/KernelExtensionManagement`.
9. Restartujte Mac v režimu obnovení.
10. Otevřete **Nástroje** → **Terminal** → napište `csrutil enable` → zadejte heslo správce → restartujte Mac.
11. Zapněte AdGuard ochranu.