---
title: Známé problémy AdGuardu pro Windows
sidebar_position: 10
---

:::info

Tento článek popisuje AdGuard pro Windows, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li zjistit, jak funguje, [stáhněte si aplikaci AdGuard](https://agrd.io/download-kb-adblock)

:::

## Problémy s kompatibilitou AdGuardu pro Windows a AdGuard VPN pro Windows

Jakmile nainstalujete AdGuard pro Windows a AdGuard VPN pro Windows, začnou spolupracovat bez jakéhokoli úsilí z vaší strany. Změna některých jejich výchozích nastavení však může způsobit, že aplikace budou při současném spuštění pracovat nesprávně.

V AdGuardu pro Windows existují dvě specifická nastavení: *Použít režim přesměrování ovladače* a *Filtrovat lokální hostitele*. Ve výchozím nastavení je první možnost zakázána a druhá povolena. Změna kteréhokoli z těchto nastavení nevyhnutelně naruší filtrování AdGuardu, pokud je v zařízení zapnutý blokátor reklam AdGuard i AdGuard VPN.

Changing these settings is only necessary to resolve issues related to the simultaneous operation of AdGuard Ad Blocker and network-level apps such as antiviruses, VPNs, and network filters. Pokud narazíte na situaci, kdy potřebujete změnit výchozí stav výše uvedených nastavení a přesto chcete, aby blokátor reklam AdGuard a AdGuard VPN fungovaly současně a správně — [vytvořte hlášení na GitHubu](https://github.com/AdguardTeam/AdguardForWindows/issues/new/choose) a my vám pomůžeme.

V současné době pracujeme na překonání výše uvedených omezení souběžné práce našich aplikací.
