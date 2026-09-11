---
title: Řešení problémů s instalací
sidebar_position: 5
---

:::info

Tento článek popisuje AdGuard pro macOS, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li zjistit, jak funguje, [stáhněte si aplikaci AdGuard](https://agrd.io/download-kb-adblock)

:::

## Chyba "Instalace se nezdařila" v macOS Catalina

Během instalace se můžete setkat s touto chybou:

![Installation error screen](https://cdn.adtidy.org/content/kb/ad_blocker/mac/macerrorscreenEN.jpg)

Pro vyřešení problému postupujte podle těchto pokynů:

1. Restartujte Mac
2. Jakmile se Mac restartuje, stiskněte a podržte klávesy *Command(⌘) + R* ihned poté, co uslyšíte spouštěcí gong. Podržte klávesy, dokud se neobjeví logo Apple, přepněte počítač do režimu obnovení.
3. V horní liště vyberte *Nástroje* → *Terminal* a proveďte tento příkaz: `csrutil disable`
4. Restartujte Mac a přihlaste se do profilu správce
5. Otevřete okno Finderu a vyberte z horní lišty *Přejít* → *Přejít do složky* a zadejte `~/private/`
6. Vytvořte složku s názvem *tmp* a zadejte své heslo
7. Spusťte instalaci AdGuardu

Po dokončení instalace restartujte Mac v režimu obnovení podle výše uvedených pokynů a v Terminalu spusťte příkaz `csrutil enable`, abyste zapnuli ochranu systému.
