---
title: How to use Samsung Pay with AdGuard in South Korea
sidebar_position: 17
---

:::info

Dieser Artikel behandelt AdGuard für Android, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://adguard.com/download.html?auto=true)

:::

A number of users have encountered an issue where Samsung Pay does not work while AdGuard is running. This issue occurs almost exclusively on devices registered in South Korea.

What is causing this issue? Sometimes Samsung Pay does not work on devices with VPN services running, and AdGuard is one of these apps. By default, AdGuard uses Local VPN to filter traffic. As a consequence, users had to disable AdGuard when making payments with Samsung Pay. This can now be avoided with the new **Detect Samsung Pay** feature. When this option is enabled, the AdGuard app is paused whenever the user opens the Samsung Pay app and resumes when the app is closed.

To enable **Detect Samsung Pay**, follow these steps:

1. Go to **Settings** → **General** → **Advanced**→ **Low-level settings**

2. Scroll to **Detect Samsung Pay** and move the slider to the right

3. Tap **Allow permissions** and give AdGuard permission to collect your data

> We don't collect any personal data, we just need statistics about how Samsung Pay is working to make the **Detect Samsung Pay** feature work.

Once you enable this feature, AdGuard will send you notifications as shown in the screenshot.

![samsungpay *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/samsungpay-with-adguard-in-south-korea/en.gif)

:::note

This feature will work only if the Local VPN filtering mode is chosen in AdGuard settings. If another mode is being used, Samsung Pay will function without any interruptions.

:::
