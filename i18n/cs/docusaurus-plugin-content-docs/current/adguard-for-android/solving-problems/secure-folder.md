---
title: Instalace certifikátu do Zabezpečené složky
sidebar_position: 12
---

:::info

Tento článek popisuje AdGuard pro Android, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li zjistit, jak funguje, [stáhněte si aplikaci AdGuard](https://agrd.io/download-kb-adblock)

:::

Pokud nainstalujete AdGuard [do *Zabezpečené složky*](https://www.samsung.com/uk/support/mobile-devices/what-is-the-secure-folder-and-how-do-i-use-it/) v zařízení se systémem Android (týká se to především zařízení Samsung), můžete mít potíže s instalací certifikátu HTTPS. *Zabezpečená složka* má vlastní úložiště pro certifikáty. Pokud však budete postupovat podle [pokynů pro běžnou instalaci certifikátu](/adguard-for-android/features/settings#https-filtering), bude certifikát nainstalován do hlavní paměti a nebude mít vliv na blokování reklam v *Zabezpečené složce*. Chcete-li certifikát pro AdGuard pro Android nainstalovat do *Zabezpečené složky*, postupujte podle těchto pokynů:

1. Po instalaci aplikace a připojení lokální VPN klepněte na hlavní obrazovce na možnost *Filtrování HTTPS je vypnuto*.
1. Klepněte na **Pokračovat** → **Další** → **Uložit certifikát**.
1. Certifikát uložte (v této fázi jej můžete přejmenovat, abyste jej později snáze našli, což budete muset udělat).
1. Poté, co se objeví vyskakovací okno *Pokyny k instalaci*, **NEKLEPEJTE** na **Otevřít Nastavení**.
1. Minimalizujte aplikaci a přejděte do *Zabezpečené složky*.
1. Klepněte na nabídku se třemi tečkami a přejděte na **Nastavení** → **Další nastavení zabezpečení**.
1. Klepněte na **Instalovat z úložiště zařízení** → **Certifikát CA** → **Přesto instalovat**.
1. Instalaci potvrďte grafickým klíčem/heslem/otiskem prstu.
1. Vyhledejte a vyberte dříve uložený certifikát a poté klepněte na **Hotovo**.
1. Vraťte se do aplikace AdGuard a přejděte zpět na hlavní obrazovku.
1. Hotovo! Certifikát byl nainstalován.
