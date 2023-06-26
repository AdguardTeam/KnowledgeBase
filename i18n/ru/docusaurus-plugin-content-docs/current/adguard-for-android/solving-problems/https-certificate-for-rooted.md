---
title: Перемещение сертификата ЦС в системное хранилище на рутированных устройствах
sidebar_position: 13
---

:::info

This article covers AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, [download the AdGuard app](https://adguard.com/download.html?auto=true)

:::

В AdGuard для Android есть функция [HTTPS-фильтрации](../../overview#https-filtering), которая позволяет [фильтровать зашифрованный HTTPS-трафик](/general/https-filtering/what-is-https-filtering) на устройствах Android. Эта функция требует добавления ЦС-сертификата AdGuard в список доверенных сертификатов.

На некорневых устройствах сертификаты ЦС могут быть установлены в **пользовательское хранилище**. Только некоторые приложение (в основном браузеры) доверяют сертификатам ЦС, установленным в хранилище пользователя, что означает, что HTTPS-фильтрация будет работать только для таких приложений.

Но на рутированных устройствах можно установить сертификат в **системное хранилище** и разрешить HTTPS-фильтрацию трафика других приложений.

Вот как это сделать.

## Как установить сертификат AdGuard в системное хранилище на рутированном устройстве

1. Включите HTTPS-фильтрацию в AdGuard для Android и сохраните сертификат AdGuard в пользовательское хранилище (при необходимости используйте [эту инструкцию](../../overview#https-filtering))
2. Перейдите в **Приложение AdGuard** → **Меню** (≡) → **Настройки** → **Сеть** → **HTTPS-фильтрация** → **Сертификат безопасности** → нажмите «**Скопировать в системный магазин**»

Этого достаточно для старых версий Magisk.

Но если у вас более новая версия, вы получите следующее сообщение:

> Не удалось скопировать сертификат в системное хранилище. Попробуйте использовать модуль «Сертификат AdGuard».

В этом случае перейдите к шагам ниже:

3. Перейдите в **Magisk** → **Настройки**

![Откройте настройки Magisk *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-1.png)

4. Включите **Zygisk**

![Включите Zygisk *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-2.png)

![Вернитесь на главный экран Magisk *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-3.png)

5. Скачайте `.zip` файл (модуля «Сертификат AdGuard») из [последней версии на GitHub](https://github.com/AdguardTeam/adguardcert/releases/latest/)

6. Перейдите в **Magisk** → **Модули** → **Установить из хранилища** и выберите загруженный файл `.zip`

![Откройте модули Magisk *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-4.png)

![Установка из хранилища *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-5.png)

![Выберите модуль сертификата AdGuard *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-6.png)

7. Перезагрузка

![Перезагрузите устройство](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-7.png)

Если вышла новая версия модуля «Сертификат AdGuard», повторите шаги 3–7, чтобы обновить модуль.

Модуль выполняет свою работу во время загрузки системы. Если ваш сертификат AdGuard изменится, вам придётся перезагрузить устройство, чтобы новый сертификат был скопирован в системное хранилище.

### Браузер Bromite

Обратите внимание, что для правильной работы браузера **Bromite**, в дополнение к шагам выше, вам необходимо включить опцию «Разрешить пользовательские сертификаты» в `chrome://flags`.

### Chrome и браузеры на базе Chromium

У вас не будет проблем с HTTPS-фильтрацией в Chrome и браузерах на базе Chromium на рутированных устройствах, если вы используете модуль «Сертификат AdGuard».

Вот более подробное объяснение: Chrome (а впоследствии и многие другие браузеры на основе Chromium) недавно начал требовать журналы прозрачности (Certificate Transparency logs) для сертификатов ЦС, найденных в **системном хранилище**. Модуль «Сертификат AdGuard» копирует ЦС-сертификат AdGuard из **пользовательского хранилища** в **системное хранилище**. Он также содержит модуль Zygisk, который отменяет любые изменения, сделанные Magisk для [определённых браузеров](https://github.com/AdguardTeam/adguardcert/blob/master/zygisk_module/jni/browsers.inc). Таким образом, браузеры находят только сертификат AdGuard в пользовательском хранилище и не жалуются на отсутствие журнала прозрачности, в то время как другие приложения продолжают использовать тот же сертификат из системного хранилища.
