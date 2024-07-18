---
title: Instalace certifikátu do Zabezpečené složky
sidebar_position: 13
---

:::info

Tento článek popisuje AdGuard pro Android, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li zjistit, jak funguje, [stáhněte si aplikaci AdGuard](https://agrd.io/download-kb-adblock)

:::

Pokud nainstalujete AdGuard do [ *Zabezpečené složky* ve vašem zařízení Android](https://www.samsung.com/uk/support/mobile-devices/what-is-the-secure-folder-and-how-do-i-use-it/) (to platí hlavně pro zařízení Samsung), můžete při instalaci certifikátu HTTPS narazit na určité potíže. Jde o to, že *Zabezpečená složka* má vlastní úložiště, kde jsou uloženy certifikáty. Pokud vše provedete podle pokynů pro instalaci běžných certifikátů ([popsaných zde](/adguard-for-android/features/settings#https-filtering)), certifikát se nainstaluje do hlavního úložiště a nehraje pro váš blokátor reklam v zabezpečené složce *žádnou roli*. Chcete-li tento problém vyřešit a nainstalovat certifikát pro váš AdGuard pro Android do úložiště *Zabezpečená složka*, postupujte podle následujících pokynů:

1. Po instalaci aplikace a připojení k lokální VPN klepněte na **POVOLIT** vedle zprávy *Filtrování HTTPS je vypnuto*.
1. Klepněte na **Další** → **Další** → **Uložit nyní** → **Uložit certifikát**.
1. Certifikát uložte (v této fázi jej můžete přejmenovat, abyste jej později snáze našli, což budete muset udělat).
1. Poté, co se objeví vyskakovací okno *Pokyny k instalaci*, **NEKLEPEJTE** na **Otevřít Nastavení**.
1. Minimalizujte aplikaci a přejděte do *Zabezpečené složky*.
1. Klepněte na nabídku se třemi tečkami a přejděte na **Nastavení** → **Další nastavení zabezpečení**.
1. Klepněte na **Bezpečnostní certifikáty** → **Instalovat z úložiště** → **Certifikát CA** → **Přesto nainstalovat**
1. Instalaci potvrďte grafickým klíčem/heslem/otiskem prstu.
1. Vyhledejte a vyberte dříve uložený certifikát a poté klepněte na **Hotovo**.
1. Vraťte se do aplikace AdGuard a přejděte zpět na hlavní obrazovku. Možná budete muset restartovat aplikaci, abyste se zbavili zprávy *HTTPS filtrování je vypnuto*.
1. Hotovo! Certifikát byl nainstalován.
