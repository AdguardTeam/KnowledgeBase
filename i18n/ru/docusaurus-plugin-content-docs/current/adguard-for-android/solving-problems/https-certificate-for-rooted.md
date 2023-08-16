---
title: Перемещение сертификата ЦС в системное хранилище на рутированных устройствах
sidebar_position: 14
---

:::info

В этой статье рассказывается об AdGuard для Android — многофункциональном блокировщике рекламы, который защищает ваше устройство на системном уровне. Чтобы увидеть, как он работает, [скачайте приложение AdGuard](https://adguard.com/download.html?auto=true)

:::

В AdGuard для Android есть функция [HTTPS-фильтрации](../../overview#https-filtering), которая позволяет [фильтровать зашифрованный HTTPS-трафик](/general/https-filtering/what-is-https-filtering) на устройствах Android. Эта функция требует добавления ЦС-сертификата AdGuard в список доверенных сертификатов.

На некорневых устройствах сертификаты ЦС могут быть установлены в **пользовательское хранилище**. Только некоторые приложение (в основном браузеры) доверяют сертификатам ЦС, установленным в хранилище пользователя, что означает, что HTTPS-фильтрация будет работать только для таких приложений.

Но на рутированных устройствах можно установить сертификат в **системное хранилище** и разрешить HTTPS-фильтрацию трафика других приложений.

Вот как это сделать.

## Как установить сертификат AdGuard в системное хранилище на рутированном устройстве

1. Enable HTTPS filtering in AdGuard for Android and save AdGuard's certificate to the User store (use [this instruction](../../overview#https-filtering) if needed)

     From AdGuard for Android v4.1 and after users can install two certificates to the User store, which will help to filter websites in Chrome browser.

1. Go to **AdGuard app** → **Menu** (≡) → **Settings** → **Network** → **HTTPS filtering** → **Security certificate** → tap “**Copy to the system store**”

    That is enough for older versions of Magisk.

    However, if you have a newer version, you will get this message:

    > Unable to copy the certificate to the system store. Try using “AdGuard Certificate” module.

    In that case, proceed to steps below:

1. Go to **Magisk** → **Settings**

    ![Open Magisk settings *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-1.png)

1. Enable **Zygisk**

    ![Enable Zygisk *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-2.png)

    ![Go back to Magisk main screen *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-3.png)

1. Download the `.zip` file (of “AdGuard Certificate” module) from the [latest release on GitHub](https://github.com/AdguardTeam/adguardcert/releases/latest/)

1. Go to **Magisk** → **Modules** → **Install from storage** and select the downloaded `.zip` file

    ![Open Magisk modules *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-4.png)

    ![Install from storage *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-5.png)

    ![Select AdGuard certificate module *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-6.png)

1. Reboot

    ![Reboot the device *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-7.png)

If a new version of "AdGuard certificate" module comes out, repeat steps 3-7 to update the module.

The module does its work during the system boot. If your AdGuard certificate changes, you'll have to reboot the device for the new certificate to be copied to the system store.

### Браузер Bromite

:::note

In order for the **Bromite** browser to work properly, in addition to the steps mentioned above, you need to set "Allow user certificates" in `chrome://flags` to "Enabled" state.

:::

### Chrome и браузеры на базе Chromium

Long story short, you will have no problems with HTTPS filtering in Chrome and Chromium-based browsers on rooted devices, if you use "AdGuard Certificate" module.

Here is a bit more detailed explanation: Chrome (and subsequently many other Chromium-based browsers) has recently started requiring CT logs for CA certs found in the **System store**. "AdGuard Certificate" module copies AdGuard's CA certificate from the **User store** to the **System store**. It also contains a Zygisk module that reverts any modifications done by Magisk for [certain browsers](https://github.com/AdguardTeam/adguardcert/blob/master/zygisk_module/jni/browsers.inc). This way the browsers only find AdGuard’s certificate in the User store and don’t complain about the missing CT log, while other apps continue to use the same certificate from the System store.
