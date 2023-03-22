---
title: Řešení problémů s instalací
sidebar_position: 5
---

## Chyba "Instalace se nezdařila" v macOS Catalina

Během instalace se můžete setkat s touto chybou:

![Obrazovka s chybou instalace](https://cdn.adtidy.org/content/kb/ad_blocker/mac/macerrorscreenEN.jpg)

Pro vyřešení problému postupujte podle těchto pokynů:

1) Restartujte Mac 2) Při restartu počítače Mac stiskněte a podržte klávesy *Command(⌘) + R* ihned poté, co uslyšíte spouštěcí gong. Podržte klávesy, dokud se neobjeví logo Apple, přepněte počítač do režimu obnovení. 3) Z horní lišty vyberte *Nástroje* → *Terminal*, a proveďte tento příkaz: `csrutil disable` 4) Restartujte Mac a přihlaste se do profilu správce 5) Otevřete okno Finderu a z horní lišty vyberte *Přejít* → *Přejít do složky* a zadejte `~/private/` 6) Vytvořte složku s názvem *tmp* a zadejte své heslo 7) Spusťte instalaci AdGuardu

Po dokončení instalace restartujte Mac v režimu obnovení podle výše uvedených pokynů a v Terminalu spusťte příkaz `csrutil enable`, abyste zapnuli ochranu systému.
