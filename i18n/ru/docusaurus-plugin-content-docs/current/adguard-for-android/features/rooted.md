---
title: Rooted devices
sidebar_position: 7
---

:::info

В этой статье рассказывается об AdGuard для Android — многофункциональном блокировщике рекламы, который защищает ваше устройство на системном уровне. [Скачайте приложение AdGuard](https://agrd.io/download-kb-adblock), чтобы увидеть, как оно работает

:::

Из-за мер безопасности ОС Android некоторые функции AdGuard доступны только на устройствах с root-доступом. Вот их список:

- In most cases, **HTTPS filtering in apps** requires [installing a CA certificate into the system store](/adguard-for-android/features/settings#security-certificates), as most apps don't trust certificates in the user store
- Режим маршрутизации [**Автоматический прокси**](/adguard-for-android/features/settings#routing-mode) требует root-доступа из-за ограничений Android на фильтрацию трафика в масштабах всей системы
- The [**Manual proxy** routing mode](/adguard-for-android/features/settings#routing-mode) requires root access on Android 10 and above as it's no longer possible to determine the name of the app associated with a connection filtered by AdGuard
