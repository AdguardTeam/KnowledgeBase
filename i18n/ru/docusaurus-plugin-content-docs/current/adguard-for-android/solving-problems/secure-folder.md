---
title: Установка сертификата в Защищённую папку
sidebar_position: 13
---

:::info

В этой статье рассказывается об AdGuard для Android — многофункциональном блокировщике рекламы, который защищает ваше устройство на системном уровне. Чтобы увидеть, как он работает, [скачайте приложение AdGuard](https://agrd.io/download-kb-adblock)

:::

If you install AdGuard to [the *Secure folder* on your Android](https://www.samsung.com/uk/support/mobile-devices/what-is-the-secure-folder-and-how-do-i-use-it/) (this applies mainly to Samsung devices), you may face some difficulties when installing the HTTPS certificate. Дело в том, что в *Защищённой папке* есть собственное хранилище для сертификатов. However, if you do everything according to the regular certificate installation instructions ([described here](../../overview#https-filtering)), the certificate will be installed into the main memory and will play no role for your ad blocker in the *Secure folder*. Чтобы справиться с этой проблемой и установить сертификат в хранилище *Защищённой папки*, воспользуйтесь следующей инструкцией:

1. После установки приложения и подключения к локальному VPN нажмите **Включить** рядом с надписью *HTTPS-фильтрация отключена*.
1. Нажмите **Далее** → **Далее** → **Сохранить сейчас** → **Сохранить сертификат**.
1. Save the certificate (at this stage, you can rename it to make it easier to locate it later, which you will need to do).
1. After the *Installation instructions* popup appears, **DO NOT** tap **Open Settings**.
1. Минимизируйте приложение и перейдите в *Защищённую папку*.
1. Tap the three-dot menu and go to **Settings** → **Other security settings**.
1. Tap **Security certificates** → **Install from device storage** → **CA certificate** → **Install anyway**
1. Подтвердите установку графическим ключом/паролем/отпечатком пальца.
1. Найдите и выберите ранее сохранённый сертификат, затем нажмите **Готово**.
1. Вернитесь в приложение AdGuard и перейдите обратно на главный экран. Возможно, вам придется закрыть и перезапустить приложение, чтобы избавиться от сообщения *HTTPS-фильтрация выключена*.
1. Готово! Сертификат установлен.
