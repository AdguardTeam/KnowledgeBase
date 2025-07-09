---
title: Установка сертификата на устройствах с Android 11+
sidebar_position: 11
---

:::info

В этой статье рассказывается об AdGuard для Android — многофункциональном блокировщике рекламы, который защищает ваше устройство на системном уровне. Чтобы увидеть, как он работает, [скачайте приложение AdGuard](https://agrd.io/download-kb-adblock)

:::

Чтобы [фильтровать HTTPS-трафик](/general/https-filtering/what-is-https-filtering.md) (что крайне важно, поскольку большая часть рекламы передаётся по протоколу HTTPS), AdGuard необходимо установить сертификат в пользовательское хранилище устройства. На старых версиях Android это происходило автоматически, но на Android 11 и выше приходится устанавливать его вручную.

![Сертификат *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/manual-certificate/g.gif)

Как установить сертификат AdGuard:

1. Откройте приложение. На *главном* экране коснитесь пункта *HTTPS-фильтрация отключена*.

1. Появятся три экрана:
    - HTTPS-фильтрация имеет решающее значение для блокировки рекламы
    - HTTPS-фильтрация AdGuard — это безопасно
    - Сертификат AdGuard

    Нажмите *Далее* → *Далее* → *Сохранить сертификат*.

1. Нажмите *Сохранить* в нижней части открывшейся папки *Загрузки*.

1. После сохранения нажмите *Открыть настройки*.

1. Откройте *Настройки* и введите *Сертификат* (возможно, Сертификат центра сертификации (ЦС) или Сертификат CA) в строке поиска. Нажмите соответствующий вариант.

1. Вы можете увидеть предупреждение. В таком случае нажмите *Всё равно установить* и при необходимости введите свой PIN-код.

1. Выберите файл сертификата AdGuard. Его название должно выглядеть так: *adguard_1342_020322.crt*.

Всё готово! Когда сертификат будет установлен, HTTPS-фильтрация включится автоматически.

Если у вас возникли проблемы при ручной установке сертификата (например, вы установили сертификат, но приложение продолжает его игнорировать), вы можете воспользоваться одним из решений ниже.

1. Перезапустите AdGuard.
2. Попробуйте ещё раз установить правильный сертификат (AdGuard Personal CA).

## Security warnings

In earlier versions of Android, the quick settings panel displayed the message “Network may be monitored.” Tapping it will open a window with detailed information.

Starting with Android 15, in addition to “Network may be monitored”, users will see a warning notification after installing a certificate and after restarting the device: “Certificate authorities installed by an unknown third party.” This means that the system has detected third-party certificates in the user certificate store. Tapping the notification opens a list of certificates in the user certificate store.

Despite these warnings, your traffic remains secure. Your connection to remote servers stays encrypted. What AdGuard does is simply verify the server’s certificate before deciding whether to filter the connection — similar to how a browser works.

[Learn more about HTTPS filtering and how the certificate works](/general/https-filtering/what-is-https-filtering.md).

If you still encounter a problem and can’t install the certificate, please contact our support team at <support@adguard.com>.
