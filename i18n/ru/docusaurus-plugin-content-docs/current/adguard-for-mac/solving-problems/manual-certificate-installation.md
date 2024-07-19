---
title: Ручная установка сертификата
sidebar_position: 1
---

:::info

В этой статье рассказывается об AdGuard для Mac — многофункциональном блокировщике рекламы, который защищает ваше устройство на системном уровне. Чтобы увидеть, как он работает, [скачайте приложение AdGuard](https://agrd.io/download-kb-adblock)

:::

AdGuard для Mac должен установить корневой сертификат в хранилище сертификатов, чтобы [фильтровать HTTPS-трафик](/general/https-filtering/what-is-https-filtering). В большинстве случаев это действие выполняется автоматически при первом запуске приложения, но пользователям браузеров на основе Gecko (Firefox, Waterfox и т. п.), установившим в браузере мастер-пароль, может потребоваться выполнить дополнительные шаги (т. к. эти браузеры используют собственное хранилище сертификатов вместо системного). Они должны либо ввести мастер-пароль, когда AdGuard попросит об этом (чтобы предоставить приложению доступ к хранилищу сертификатов), либо установить сертификат вручную.

Чтобы установить сертификат вручную:

  1. Open *Preferences*

  2. Go to *Privacy & Security* → *Certificates*

  3. Click *View Certificates*

  4. Navigate to the *Authorities* tab and click the *Import...* button

  5. Выберите файл `/Library/Application Support/com.adguard.mac.adguard/AdguardCore/Adguard Personal CA.cer` или скачайте его c http://local.adguard.org/cert через любой браузер на основе Chromium (например, Google Chrome или Edge) с запущенной HTTPS-фильтрацией в AdGuard

Точные действия могут различаться для разных браузеров, но общая последовательность и путь к файлу `AdGuard Personal CA.cer` остаются теми же.

P.S.: For [Setapp application version](https://setapp.com/apps/adguard) the file path is the following: `/Library/Application Support/com.adguard.mac.adguard-setapp/AdguardCore/Adguard Personal CA.cer`
