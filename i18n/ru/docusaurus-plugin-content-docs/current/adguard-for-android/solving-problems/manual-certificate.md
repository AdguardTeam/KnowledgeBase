---
title: Установка сертификата на устройствах с Android 11+
sidebar_position: 12
---

:::info

This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. Чтобы увидеть, как он работает, [скачайте приложение AdGuard](https://agrd.io/download-kb-adblock)

:::

Чтобы [фильтровать HTTPS-трафик](/general/https-filtering/what-is-https-filtering.md) (что крайне важно, поскольку большая часть рекламы передаётся по протоколу HTTPS), AdGuard необходимо установить сертификат в пользовательское хранилище устройства. On older versions of the Android OS this was done automatically, but on Android 11 and later users have to install it manually.

![Сертификат *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/manual-certificate/g.gif)

Как установить сертификат AdGuard:

1. В уведомлении *«HTTPS-фильтрация отключена»* нажмите *Включить*.

1. Появятся три экрана с объяснениями:
    - Зачем фильтровать HTTPS-трафик
    - Почему эта фильтрация безопасна
    - Почему сертификат AdGuard необходим

    Нажмите *Далее* → *Далее* → *Сохранить сертификат*.

1. Нажмите *Сохранить* в нижней части открывшейся папки *Загрузки*.

1. После сохранения нажмите *Открыть настройки*.

1. Нажмите *Другие настройки безопасности* → *Параметры шифрования* → *Установить сертификат* → *Сертификат ЦС*.

1. Вы можете увидеть предупреждение. В таком случае нажмите *Всё равно установить* и при необходимости введите свой PIN-код.

1. Выберите файл сертификата AdGuard. Его название должно выглядеть так: *adguard_1342_020322.crt*.

Всё готово! Когда сертификат будет установлен, HTTPS-фильтрация включится автоматически.

Обратите внимание, что эти шаги описаны на основе навигации смартфона Google Pixel 7. В других устройствах Android названия настроек могут отличаться. For easier navigation consider searching for a certificate by entering “certificate” or “credentials” in the settings search bar.

Если у вас возникли проблемы при ручной установке сертификата (например, вы установили сертификат, но приложение продолжает его игнорировать), вы можете воспользоваться одним из решений ниже.

1. Перезапустите AdGuard.
2. Попробуйте ещё раз установить правильный сертификат (AdGuard Personal CA).

Если вы по-прежнему сталкиваетесь с проблемой и не можете установить сертификат, напишите нашей команде поддержки по адресу support@adguard.com.
