---
title: Ручная установка сертификата безопасности в браузер Firefox
sidebar_position: 11
---

Чтобы AdGuard успешно фильтровал HTTPS-трафик в Firefox, браузер должен доверять сертификату AdGuard. Этого можно добиться по-разному в зависимости от версии Firefox.

#### Метод 1

> Этот метод работает в Firefox для Android версии 90.0 и выше.

Чтобы Firefox доверял сертификату AdGuard, выполните следующие шаги:

1. Запустите браузер.
2. Перейдите на страницу **Настройки** > **О Firefox**.

![О Firefox *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/firefox-certificates/ff_nightly_about_en.jpeg)

3. Коснитесь логотипа Firefox пять раз.
4. Перейдите в раздел **Настройки** > **Тайные настройки**.

![Секретные настройки *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/firefox-certificates/ff_nightly_secret.jpeg)

5. Включите настройку **Использовать сторонние сертификаты CA**.

#### Метод 2

> Этот метод работает только на **рутированных** устройствах.

1. [Установите и настройте](https://www.xda-developers.com/install-adb-windows-macos-linux/) adb;
> На платформе Windows владельцам **Samsung** может потребоваться установить [эту утилиту](https://developer.samsung.com/mobile/android-usb-driver.html).
2. Активируйте режим разработчика **** и включите отладку по USB ****:
    - Откройте приложение **Настройки** на своём телефоне;
    - Перейдите в раздел **О системе** (последний пункт в меню настроек). В этом разделе найдите подпункт **О телефоне**;
    - Нажмите на строку **Номер сборки** 7 раз. После этого вы получите уведомление, что **Теперь вы разработчик** (При необходимости введите код разблокировки устройства);
    - Откройте **Настройки системы** > **Для разработчиков** > Прокрутите вниз и включите **отладку по USB** > Подтвердите включение отладки в окне **Разрешить отладку по USB**, внимательно прочитав предупреждение.
3. Установите браузер [Firefox](https://www.mozilla.org/en-US/firefox/releases/) (релизную версию);
4. Откройте **настройки AdGuard** > **Сеть** > **HTTPS-фильтрация** > Установите сертификат в браузер **Firefox** > **УСТАНОВИТЬ ДЛЯ СТАРЫХ ВЕРСИЙ**;
5. Откройте папку `data/data/org.mozilla.firefox/files/mozilla`, используя `adb shell su` и `cd data/data/...`, перейдите в папку `xxxxxxx.default` и запомните её название;
6. В указанной папке нас интересуют два файла:
    - `cert9.db`
    - `key4.db`
7. Нужно переместить эти файлы в папку браузера, где возникла проблема с сертификатом безопасности:
- `data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyy.default`.
8. Полная команда будет выглядеть так:
    - `adb shell su`
    - `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxxx.default/cert9.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`
    - `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxxx.default/key4.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`

В том случае, если вы получили системное уведомление **permission denied**, вам необходимо сначала перенести указанные файлы в свободную от разрешений директорию. А уже после перенести их в нужную папку в браузере Firefox.

Полная команда должна выглядеть примерно так:
- `adb shell su`
- `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxx.default/cert9.db sdcard/Download`
- `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxx.default/key4.db sdcard/Download`
- `cp -R sdcard/Download/cert9.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`
- `cp -R sdcard/Download/key4.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`

Если `adb shell su` не срабатывает, попробуйте сначала применить `adb shell`, а уже после `su`.