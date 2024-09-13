---
title: Rooted devices
sidebar_position: 7
---

:::info

This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. Pour voir comment ça fonctionne, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

Due to security measures of the Android OS, some AdGuard features are only available on rooted devices. Here's the list of them:

- In most cases, **HTTPS filtering in apps** requires [installing a CA certificate into the system store](/adguard-for-android/features/settings#security-certificates), as most apps don't trust certificates in the user store
- The [**Automatic proxy** routing mode](/adguard-for-android/features/settings#routing-mode) requires root access due to Android's restrictions on system-wide traffic filtering
- The [**Manual proxy** routing mode](/adguard-for-android/features/settings#routing-mode) requires root access on Android 10 and above as it's no longer possible to determine the name of the app associated with a connection filtered by AdGuard
