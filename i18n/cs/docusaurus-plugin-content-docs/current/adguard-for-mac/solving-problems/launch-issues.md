---
title: Problémy se spouštěním v macOS
sidebar_position: 6
---

:::info

Tento článek popisuje AdGuard pro macOS, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li zjistit, jak funguje, [stáhněte si aplikaci AdGuard](https://agrd.io/download-kb-adblock)

:::

Občas může systém macOS způsobit poškození modulu síťového rozšíření AdGuardu, což znemožní používání aplikace. V takovém případě byste měli postupovat podle jednoho z těchto pokynů v závislosti na verzi operačního systému.

## Problémy se spouštěním v macOS 11 a vyšším

Pokud máte problémy se spouštěním AdGuardu for Mac v operačních systémech Big Sur a Monterey, použijte tento návod:

1. Restartujte Mac a vstupte do režimu obnovení [](https://support.apple.com/en-us/HT201255).
1. Vypněte SIP (spusťte **Terminal** z nabídky **Nástroje** a zadejte `csrutil disable`).
1. Restartujte Mac.
1. Zavřete aplikaci AdGuard, otevřete **Terminal** a zadejte `systemextensionsctl reset`.
1. Restartujte Mac a přejděte do režimu obnovení.
1. Zapněte SIP (spusťte **Terminal** z nabídky <strong x-iyd="1">Nástroje</strong> a zadejte `csrutil enable`).
1. Spusťte aplikaci AdGuard a zapněte ochranu.

## Problémy se spouštěním v macOS 10

Pokud máte problémy se spouštěním AdGuardu for Mac v operačních systémech Sierra, Mojave a Catalina, použijte tento návod:

1. Otevřete **Terminal** a zadejte příkaz `ls -@lOae /private/var/db/KernelExtensionManagement`.
1. Zkontrolujte, zda není zobrazen příznak `restricted` (jako na obrázku). ![Command example *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/restricted-flag.jpg)
1. Restartujte Mac v režimu obnovení.
1. Otevřete **Nástroje** → **Terminal**.
1. Napište `csrutil disable`.
1. Zadejte heslo správce.
1. Restartujte Mac.
1. Otevřete **Terminal** a zadejte následující příkaz: `sudo chflags restricted /private/var/db/KernelExtensionManagement`.
1. Restartujte Mac v režimu obnovení.
1. Otevřete **Nástroje** → **Terminal** → napište `csrutil enable` → zadejte heslo správce → restartujte Mac.
1. Zapněte AdGuard ochranu.
