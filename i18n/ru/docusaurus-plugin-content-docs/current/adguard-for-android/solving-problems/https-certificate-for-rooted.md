---
title: Перемещение сертификата ЦС в системное хранилище на рутированных устройствах
sidebar_position: 14
---

:::info

В этой статье рассказывается об AdGuard для Android — многофункциональном блокировщике рекламы, который защищает ваше устройство на системном уровне. Чтобы увидеть, как он работает, [скачайте приложение AdGuard](https://agrd.io/download-kb-adblock)

:::

В AdGuard для Android есть функция [HTTPS-фильтрации](../../overview#https-filtering), которая позволяет [фильтровать зашифрованный HTTPS-трафик](/general/https-filtering/what-is-https-filtering) на устройствах Android. Эта функция требует добавления ЦС-сертификата AdGuard в список доверенных сертификатов.

На некорневых устройствах сертификаты ЦС могут быть установлены в **пользовательское хранилище**. Только некоторые приложение (в основном браузеры) доверяют сертификатам ЦС, установленным в хранилище пользователя, что означает, что HTTPS-фильтрация будет работать только для таких приложений.

Но на рутированных устройствах можно установить сертификат в **системное хранилище** и разрешить HTTPS-фильтрацию трафика других приложений.

Вот как это сделать.

## Как установить сертификат AdGuard в системное хранилище на рутированном устройстве

1. Включите HTTPS-фильтрацию в AdGuard для Android и сохраните сертификат AdGuard в пользовательское хранилище (при необходимости используйте [эту инструкцию](../../overview#https-filtering))

     Начиная AdGuard для Android версии 4.1, пользователи могут установить два сертификата, которые помогут фильтровать сайты в браузере Chrome.

1. Перейдите в **Приложение AdGuard** → **Меню** (≡) → **Настройки** → **Сеть** → **HTTPS-фильтрация** → **Сертификат безопасности** → нажмите «**Скопировать в системный магазин**»

    Этого достаточно для старых версий Magisk.

    Но если у вас более новая версия, вы получите следующее сообщение:

    > Не удалось скопировать сертификат в системное хранилище. Попробуйте использовать модуль «Сертификат AdGuard».

    В этом случае перейдите к шагам ниже:

1. Перейдите в **Magisk** → **Настройки**

    ![Open Magisk settings *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-1.png)

1. Enable **Zygisk**

    ![Enable Zygisk *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-2.png)

    ![Go back to Magisk main screen *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-3.png)

1. Скачайте `.zip` файл (модуля «Сертификат AdGuard») из [последней версии на GitHub](https://github.com/AdguardTeam/adguardcert/releases/latest/)

1. Перейдите в **Magisk** → **Модули** → **Установить из хранилища** и выберите загруженный файл `.zip`

    ![Open Magisk modules *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-4.png)

    ![Install from storage *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-5.png)

    ![Select AdGuard certificate module *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-6.png)

1. Reboot

    ![Reboot the device *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-7.png)

Если вышла новая версия модуля «Сертификат AdGuard», повторите шаги 3–7, чтобы обновить модуль.

Модуль выполняет свою работу во время загрузки системы. Если ваш сертификат AdGuard изменится, вам придётся перезагрузить устройство, чтобы новый сертификат был скопирован в системное хранилище.

### Браузер Bromite

:::note

Для правильной работы браузера **Bromite**, в дополнение к шагам выше, вам необходимо включить опцию «Разрешить пользовательские сертификаты» в `chrome://flags`.

:::

### Chrome и браузеры на базе Chromium

Long story short, you will have no problems with HTTPS filtering in Chrome and Chromium-based browsers on rooted devices, if you use "AdGuard Certificate" module.

Here is a bit more detailed explanation: Chrome (and subsequently many other Chromium-based browsers) has recently started requiring CT logs for CA certs found in the **System store**. "AdGuard Certificate" module copies AdGuard's CA certificate from the **User store** to the **System store**. Он также содержит модуль Zygisk, который отменяет любые изменения, сделанные Magisk для [определённых браузеров](https://github.com/AdguardTeam/adguardcert/blob/master/zygisk_module/jni/browsers.inc). Таким образом, браузеры находят только сертификат AdGuard в пользовательском хранилище и не жалуются на отсутствие журнала прозрачности, в то время как другие приложения продолжают использовать тот же сертификат из системного хранилища.
