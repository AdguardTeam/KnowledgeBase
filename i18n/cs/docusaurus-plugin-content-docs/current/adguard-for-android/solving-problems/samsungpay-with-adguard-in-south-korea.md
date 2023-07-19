---
title: Jak používat Samsung Pay s AdGuardem v Jižní Korei
sidebar_position: 17
---

:::info

Tento článek popisuje AdGuard pro Android, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li zjistit, jak funguje, [stáhněte si aplikaci AdGuard](https://adguard.com/download.html?auto=true)

:::

A number of users have encountered an issue where Samsung Pay does not work while AdGuard is running. This issue occurs almost exclusively on devices registered in South Korea.

What is causing this issue? Sometimes Samsung Pay does not work on devices with VPN services running, and AdGuard is one of these apps. Ve výchozím nastavení používá AdGuard k filtrování provozu lokální VPN. As a consequence, users had to disable AdGuard when making payments with Samsung Pay. This can now be avoided with the new **Detect Samsung Pay** feature. When this option is enabled, the AdGuard app is paused whenever the user opens the Samsung Pay app and resumes when the app is closed.

To enable **Detect Samsung Pay**, follow these steps:

1. Go to **Settings** → **General** → **Advanced**→ **Low-level settings**

2. Scroll to **Detect Samsung Pay** and move the slider to the right

3. Tap **Allow permissions** and give AdGuard permission to collect your data

> We don't collect any personal data, we just need statistics about how Samsung Pay is working to make the **Detect Samsung Pay** feature work.

Once you enable this feature, AdGuard will send you notifications as shown in the screenshot.

![samsungpay *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/samsungpay-with-adguard-in-south-korea/en.gif)

:::note

Tato funkce bude fungovat pouze v případě, že je v nastavení AdGuardu zvolen režim filtrování lokální VPN. Pokud používáte jiný režim, Samsung Pay bude fungovat bez přerušení.

:::
