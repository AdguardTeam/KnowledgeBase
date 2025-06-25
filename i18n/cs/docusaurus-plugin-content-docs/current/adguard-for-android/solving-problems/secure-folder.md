---
title: Instalace certifikátu do Zabezpečené složky
sidebar_position: 12
---

:::info

Tento článek popisuje AdGuard pro Android, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li zjistit, jak funguje, [stáhněte si aplikaci AdGuard](https://agrd.io/download-kb-adblock)

:::

If you install AdGuard [in the *Secure folder*](https://www.samsung.com/uk/support/mobile-devices/what-is-the-secure-folder-and-how-do-i-use-it/) on your Android device (this mainly applies to Samsung devices), you may have difficulty installing the HTTPS certificate. The *Secure folder* has its own storage space for certificates. However, if you follow the [regular certificate installation instructions](/adguard-for-android/features/settings#https-filtering), the certificate will be installed in the main memory and will not affect your ad blocker in the *Secure folder*. To install the certificate for AdGuard for Android in the *Secure folder’s* storage, follow these instructions instead:

1. After installing the app and connecting the local VPN, tap *HTTPS filtering is off* on the main screen.
1. Tap **Continue** → **Next** → **Save certificate**.
1. Certifikát uložte (v této fázi jej můžete přejmenovat, abyste jej později snáze našli, což budete muset udělat).
1. Poté, co se objeví vyskakovací okno *Pokyny k instalaci*, **NEKLEPEJTE** na **Otevřít Nastavení**.
1. Minimalizujte aplikaci a přejděte do *Zabezpečené složky*.
1. Tap the three-dot menu and go to **Settings** → **Other security settings**.
1. Tap **Install from device storage** → **CA certificate** → **Install anyway**.
1. Instalaci potvrďte grafickým klíčem/heslem/otiskem prstu.
1. Vyhledejte a vyberte dříve uložený certifikát a poté klepněte na **Hotovo**.
1. Return to the AdGuard app and navigate back to the main screen.
1. Hotovo! Certifikát byl nainstalován.
