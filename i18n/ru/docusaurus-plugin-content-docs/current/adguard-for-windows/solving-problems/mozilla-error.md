---
title: Как исправить ошибку `MOZILLA_PKIX_ERROR_KEY_PINNING_FAILURE`
sidebar_position: 11
---

:::info

В этой статье рассказывается об AdGuard для Windows — многофункциональном блокировщике рекламы, который защищает ваше устройство на системном уровне. [Скачайте приложение AdGuard](https://agrd.io/download-kb-adblock), чтобы увидеть, как оно работает

:::

Некоторые пользователи AdGuard для Windows с включённой [HTTPS-фильтрацией](/general/https-filtering/what-is-https-filtering) не могут получить доступ к определённым сайтам, таким как google.com и youtube.com. Вместо открытия сайта браузеры со Strict Certificate Pinning отображали ошибку `MOZILLA_PKIX_ERROR_KEY_PINNING_FAILURE`.

Вот список затронутых браузеров:

- Arkenfox
- Brace
- Cachy Browser
- Dove
- FireDragon
- LibreWolf
- Mull
- Mullvad Browser
- Phoenix
- Tor Browser

Если ваш браузер по умолчанию является одним из этих браузеров, выполните следующие действия, чтобы решить проблему:

1. Введите `about:config` в адресной строке браузера
2. В появившемся меню введите `security.cert_pinning.enforcement_level` в поле поиска.
3. Измените параметр `security.cert_pinning.enforcement_level` с 2 на 1.
