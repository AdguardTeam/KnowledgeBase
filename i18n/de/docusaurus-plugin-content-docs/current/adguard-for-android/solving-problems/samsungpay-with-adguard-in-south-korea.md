---
title: How to use Samsung Pay with AdGuard in South Korea
sidebar_position: 17
---

:::info

Dieser Artikel behandelt AdGuard für Android, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

A number of users have encountered an issue where Samsung Pay does not work while AdGuard is running. This issue occurs almost exclusively on devices registered in South Korea.

What is causing this issue? Sometimes Samsung Pay does not work on devices with VPN services running, and AdGuard is one of these apps. By default, AdGuard uses a local VPN to filter traffic, which can cause problems when using Samsung Pay.

As a consequence, users had to disable AdGuard when making payments with Samsung Pay. This can be avoided with the *Detect Samsung Pay* feature. When this option is enabled, the AdGuard app is paused whenever the user opens the Samsung Pay app and resumes when the app is closed.

:::note

This feature will work only if the Local VPN filtering mode is chosen in AdGuard settings. If another mode is being used, Samsung Pay will function without any interruptions.

:::

To enable *Detect Samsung Pay*, follow these steps:

1. Go to *Settings* → *General* → *Advanced*→ *Low-level settings*.

1. Scroll to *Detect Samsung Pay* and move the slider to the right.

1. Tap *Allow permissions* and give AdGuard access to information about the use of other apps.

We need it to collect statistics about the operation of Samsung Pay in order for the *Detect Samsung Pay* feature to work.

After enabling this feature, when you switch from Samsung Pay to AdGuard, the following message will appear as shown in the screenshot.

![samsungpay *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/samsungpay-with-adguard-in-south-korea/samsung_pay.png)

Alternatively, you can disable filtering for Samsung Pay in *App management*. Simply go to the *App management* screen (third tab from the bottom), find Samsung Pay in the list, and turn off the switch at *Route traffic through AdGuard*.
