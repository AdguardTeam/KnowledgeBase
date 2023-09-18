---
title: Jak používat Samsung Pay s AdGuardem v Jižní Korei
sidebar_position: 17
---

:::info

Tento článek popisuje AdGuard pro Android, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li zjistit, jak funguje, [stáhněte si aplikaci AdGuard](https://agrd.io/download-kb-adblock)

:::

Řada uživatelů se setkala s problémem, kdy Samsung Pay nefunguje, když je spuštěn AdGuard. Tento problém se vyskytuje téměř výhradně u zařízení registrovaných v Jižní Korei.

Co je příčinou tohoto problému? Někdy Samsung Pay nefunguje na zařízeních se spuštěnými službami VPN a AdGuard je jednou z těchto aplikací. By default, AdGuard uses a local VPN to filter traffic, which can cause problems when using Samsung Pay.

As a consequence, users had to disable AdGuard when making payments with Samsung Pay. This can be avoided with the *Detect Samsung Pay* feature. When this option is enabled, the AdGuard app is paused whenever the user opens the Samsung Pay app and resumes when the app is closed.

:::note

Tato funkce bude fungovat pouze v případě, že je v nastavení AdGuardu zvolen režim filtrování lokální VPN. Pokud používáte jiný režim, Samsung Pay bude fungovat bez přerušení.

:::

To enable *Detect Samsung Pay*, follow these steps:

1. Go to *Settings* → *General* → *Advanced*→ *Low-level settings*.

1. Scroll to *Detect Samsung Pay* and move the slider to the right.

1. Tap *Allow permissions* and give AdGuard access to information about the use of other apps.

We need it to collect statistics about the operation of Samsung Pay in order for the *Detect Samsung Pay* feature to work.

After enabling this feature, when you switch from Samsung Pay to AdGuard, the following message will appear as shown in the screenshot.

![samsungpay *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/samsungpay-with-adguard-in-south-korea/samsung_pay.png)

Alternatively, you can disable filtering for Samsung Pay in *App management*. Simply go to the *App management* screen (third tab from the bottom), find Samsung Pay in the list, and turn off the switch at *Route traffic through AdGuard*.
