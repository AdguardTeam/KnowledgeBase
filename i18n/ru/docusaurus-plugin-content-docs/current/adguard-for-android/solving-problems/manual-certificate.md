---
title: Установка сертификата на устройствах с Android 11+
sidebar_position: 11
---

:::info

В этой статье рассказывается об AdGuard для Android — многофункциональном блокировщике рекламы, который защищает ваше устройство на системном уровне. Чтобы увидеть, как он работает, [скачайте приложение AdGuard](https://agrd.io/download-kb-adblock)

:::

To be able to [filter HTTPS traffic](/general/https-filtering/what-is-https-filtering.md) (which is extremely important as most ads use HTTPS), AdGuard needs to install its certificate into your device’s user storage. На старых версиях Android это происходило автоматически, но на Android 11 и выше приходится устанавливать его вручную.

![Сертификат *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/manual-certificate/g.gif)

Как установить сертификат AdGuard:

1. Open the app. On the *Home* screen, tap *HTTPS filtering is off*.

1. Then you’ll be presented with three screens:
    - HTTPS filtering is critical for ad blocking
    - AdGuard’s HTTPS filtering is safe
    - AdGuard certificate

    Consecutively, tap *Continue* → *Next* → *Save certificate*.

1. Нажмите *Сохранить* в нижней части открывшейся папки *Загрузки*.

1. После сохранения нажмите *Открыть настройки*.

1. Open *Settings* and type *CA Certificate* in the search bar. Tap the respective option.

1. Вы можете увидеть предупреждение. В таком случае нажмите *Всё равно установить* и при необходимости введите свой PIN-код.

1. Выберите файл сертификата AdGuard. Его название должно выглядеть так: *adguard_1342_020322.crt*.

You’re all set! Once the certificate is installed successfully, you’ve enabled HTTPS filtering.

If you experience issues during the manual certificate installation (for example, you installed the certificate, but the application keeps ignoring it), you can follow one of the solutions below.

1. Перезапустите AdGuard.
2. Попробуйте ещё раз установить правильный сертификат (AdGuard Personal CA).

## Security warnings

In earlier versions of Android, the quick settings panel displayed the message “Network may be monitored.” Tapping it will open a window with detailed information.

Starting with Android 15, in addition to “Network may be monitored”, users will see a warning notification after installing a certificate and after restarting the device: “Certificate authorities installed by an unknown third party.” This means that the system has detected third-party certificates in the user certificate store. Tapping the notification opens a list of certificates in the user certificate store.

Despite these warnings, your traffic remains secure. Your connection to remote servers stays encrypted. What AdGuard does is simply verify the server’s certificate before deciding whether to filter the connection — similar to how a browser works.

[Learn more about HTTPS filtering and how the certificate works](/general/https-filtering/what-is-https-filtering.md).

If you still encounter a problem and can’t install the certificate, please contact our support team at <support@adguard.com>.
