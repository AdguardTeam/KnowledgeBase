---
title: Gerootete Geräte
sidebar_position: 7
---

:::info

Dieser Artikel behandelt AdGuard für Android, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

Due to security measures of the Android OS, some AdGuard features are only available on rooted devices. Hier ist eine Liste von ihnen:

- **HTTPS filtering in most apps** requires [installing a CA certificate into the system store](/adguard-for-android/features/settings#security-certificates), as most apps do not trust certificates in the user store. Die Installation eines Zertifikats in den Systemspeicher ist nur auf gerooteten Geräten möglich
- The [**Automatic proxy** routing mode](/adguard-for-android/features/settings#routing-mode) requires root access due to Android's restrictions on system-wide traffic filtering
- The [**Manual proxy** routing mode](/adguard-for-android/features/settings#routing-mode) requires root access on Android 10 and above as it's no longer possible to determine the name of the app associated with a connection filtered by AdGuard
