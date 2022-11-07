---
title: Ручная установка сертификата безопасности в браузер Firefox
sidebar_position: 11
---

Чтобы AdGuard успешно фильтровал HTTPS-трафик в Firefox, браузер должен доверять сертификату AdGuard. It can be achieved differently for different versions of the Firefox.

#### Метод 1

> Этот метод работает в Firefox для Android версии 90.0 и выше.

To make Firefox trust the AdGuard certificate, do the following:

1. Запустите браузер.
2. Перейдите на страницу **Настройки** > **О Firefox**.

![О Firefox](https://cdn.adguard.com/content/kb/ad_blocker/android/solving_problems/firefox-certificates/ff_nightly_about_en.jpeg)

3. Коснитесь логотипа Firefox пять раз.
4. Navigate to **Settings** > **Secret Settings**.

![Секретные настройки*](https://cdn.adguard.com/content/kb/ad_blocker/android/solving_problems/firefox-certificates/ff_nightly_secret.jpeg)

5. Toggle **Use third party CA certificates**.

#### Метод 2

> Этот метод работает только на **рутированных** устройствах.

1. [Установите и настройте](https://www.xda-developers.com/install-adb-windows-macos-linux/) adb;
> На платформе Windows владельцам **Samsung** может потребоваться установить [эту утилиту](https://developer.samsung.com/mobile/android-usb-driver.html).
2. Активируйте режим разработчика **** и включите отладку по USB ****:
- Откройте приложение **Настройки** на своём телефоне;
- Перейдите в раздел **О системе** (последний пункт в меню настроек). В этом разделе найдите подпункт **О телефоне**;
- Нажмите на строку **Номер сборки** 7 раз. After that, you will receive a notification that **You are now a developer** (If necessary, enter an unlock code for the device);
- Open **System Settings** > **Developer Options** > Scroll down and enable **USB debugging** > Confirm debugging is enabled in the window **Allow USB debugging** after reading the warning carefully.
3. Install the [Firefox](https://www.mozilla.org/en-US/firefox/releases/) browser (release version);
4. Open the **AdGuard settings** > **Network** > **HTTPS Filtering** > Install the certificate in **Firefox** > **INSTALL FOR OLD VERSIONS**;
5. Open the folder `data/data/org.mozilla.firefox/files/mozilla` using `adb shell su` and `cd data/data/...`, then browse to the folder named `xxxxxxx.default` and memorize its name;
6. In the specified folder we are interested in two files:
- `cert9.db` - `key4.db` 7. We need to move these files to a folder of the browser where the security certificate issue occurred: - `data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyy.default`. 8. The full command will look like this: - `adb shell su` - `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxxx.default/cert9.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`. - `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxxx.default/key4.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`.

In case you received the system notification **permission denied**, you should first move the specified files to the permission-free directory. And after that you should move them to the necessary folder in your Firefox browser.

The full command should look something like this:

- `adb shell su`.
- `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxx.default/cert9.db sdcard/Download`
- `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxx.default/key4.db sdcard/Download`
- `cp -R sdcard/Download/cert9.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`.
- `cp -R sdcard/Download/key4.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`.

If `adb shell su` does not work, you should try `adb shell` initially, and then `su`.