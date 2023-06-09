---
title: Ochranu nelze povolit
sidebar_position: 2
---

:::note

Tento článek popisuje AdGuard pro macOS, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li zjistit, jak funguje, [stáhněte si aplikaci AdGuard](https://adguard.com/download.html?auto=true)

:::

Pokud ochranu AdGuardem nelze z nějakého důvodu povolit, proveďte následující kroky:

1. Klikněte na ikonu AdGuardu v menu → přejděte na Pokročilé → Obnovit nastavení... → Ukončit AdGuard...

2. Do vyhledávání Spotlight napište Terminal, zadejte `sudo rm -R /Library/Application\ Support/com.adguard.adguard` a spusťte.

3. Restartujte počítač.

4. Znovu otevřete Terminal, zadejte `ls -al /Library/StagedExtensions/Library/Application\ Support/com.adguard.adguard/` a spusťte. Měli byste obdržet následující informace: `No such file or directory`.

5. Spusťte AdGuard. Po zobrazení výzvy zadejte přihlašovací jméno a heslo.