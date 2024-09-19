---
title: Rooted devices
sidebar_position: 7
---

:::info

This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

Из-за мер безопасности ОС Android некоторые функции AdGuard доступны только на устройствах с root-доступом. Вот их список:

- **HTTPS filtering in most apps** requires [installing a CA certificate into the system store](/adguard-for-android/features/settings#security-certificates), as most apps do not trust certificates in the user store. Установка сертификата в системное хранилище возможна только на рутованных устройствах
- The [**Automatic proxy** routing mode](/adguard-for-android/features/settings#routing-mode) requires root access due to Android's restrictions on system-wide traffic filtering
- The [**Manual proxy** routing mode](/adguard-for-android/features/settings#routing-mode) requires root access on Android 10 and above as it's no longer possible to determine the name of the app associated with a connection filtered by AdGuard
