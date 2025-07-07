---
title: Установка сертификата в Защищённую папку
sidebar_position: 12
---

:::info

В этой статье рассказывается об AdGuard для Android — многофункциональном блокировщике рекламы, который защищает ваше устройство на системном уровне. Чтобы увидеть, как он работает, [скачайте приложение AdGuard](https://agrd.io/download-kb-adblock)

:::

If you install AdGuard [in the *Secure folder*](https://www.samsung.com/uk/support/mobile-devices/what-is-the-secure-folder-and-how-do-i-use-it/) on your Android device (this mainly applies to Samsung devices), you may have difficulty installing the HTTPS certificate. The *Secure folder* has its own storage space for certificates. However, if you follow the [regular certificate installation instructions](/adguard-for-android/features/settings#https-filtering), the certificate will be installed in the main memory and will not affect your ad blocker in the *Secure folder*. To install the certificate for AdGuard for Android in the *Secure folder’s* storage, follow these instructions instead:

1. After installing the app and connecting the local VPN, tap *HTTPS filtering is off* on the main screen.
1. Tap **Continue** → **Next** → **Save certificate**.
1. Сохраните сертификат (на этом этапе вы можете переименовать его, чтобы позже было легче его найти, что вам понадобится сделать).
1. После появления всплывающего окна *Инструкции по установке* **НЕ** нажимайте **Открыть настройки**.
1. Минимизируйте приложение и перейдите в *Защищённую папку*.
1. Tap the three-dot menu and go to **Settings** → **Other security settings**.
1. Tap **Install from device storage** → **CA certificate** → **Install anyway**.
1. Подтвердите установку графическим ключом/паролем/отпечатком пальца.
1. Найдите и выберите ранее сохранённый сертификат, затем нажмите **Готово**.
1. Return to the AdGuard app and navigate back to the main screen.
1. Готово! Сертификат установлен.
