---
title: Ручная установка сертификата
sidebar_position: 1
---

AdGuard для Mac должен установить корневой сертификат в хранилище сертификатов, чтобы [фильтровать HTTPS-трафик](https://kb.adguard.com/ru/general/https-filtering). В большинстве случаев это действие выполняется автоматически при первом запуске приложения, но пользователям браузеров на основе Gecko (Firefox, Waterfox и т. п.), установившим в браузере мастер-пароль, может потребоваться выполнить дополнительные шаги (т. к. эти браузеры используют собственное хранилище сертификатов вместо системного). Они должны либо ввести мастер-пароль, когда AdGuard попросит об этом (чтобы предоставить приложению доступ к хранилищу сертификатов), либо установить сертификат вручную.

Чтобы установить сертификат вручную:

  1. Откройте «Настройки»

  2. Перейдите в «Приватность и Защита» — «Просмотр сертификатов»

  3. Кликните по «Просмотр сертификатов»

  4. Перейдите во вкладку «Центры сертификации» и кликните по кнопке «Импортировать...»

  5. Select file `/Library/Application Support/AdGuard Software/com.adguard.mac.adguard/AdguardCore/Adguard Personal CA.cer` or just download it from http://local.adguard.org/cert using a Chromium-based browser (e.g Google Chrome or new Edge) and with a HTTPS-filtering running in AdGuard

Точные действия могут различаться для разных браузеров, но общая последовательность и путь к файлу `AdGuard Personal CA.cer` остаются теми же.

P.S.: Для [версии приложении в Setapp](https://setapp.com/apps/adguard) путь файла будет такой: `/Library/Application Support/com.adguard.mac.adguard-setapp/AdguardCore/Adguard Personal CA.cer`