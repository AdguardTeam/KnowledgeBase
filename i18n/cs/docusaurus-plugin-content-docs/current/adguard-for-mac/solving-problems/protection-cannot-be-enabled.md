---
title: Ochranu nelze povolit
sidebar_position: 2
---

:::info

This article is about AdGuard for Mac, a multifunctional ad blocker that protects your device at the system level. Chcete-li zjistit, jak funguje, [stáhněte si aplikaci AdGuard](https://agrd.io/download-kb-adblock)

:::

Pokud ochranu AdGuardem nelze z nějakého důvodu povolit, proveďte následující kroky:

1. Klikněte na ikonu AdGuardu v menu → přejděte na *Pokročilé* → *Obnovit nastavení...* → *Ukončit AdGuard...*

2. Do vyhledávání Spotlight napište Terminal, zadejte `sudo rm -R /Library/Application\ Support/com.adguard.adguard` a spusťte.

3. Restartujte počítač.

4. Znovu otevřete Terminal, zadejte `ls -al /Library/StagedExtensions/Library/Application\ Support/com.adguard.adguard/` a spusťte. Měli byste obdržet následující informace: `No such file or directory`.

5. Spusťte AdGuard a po výzvě zadejte své přihlašovací údaje.
