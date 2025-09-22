---
title: Настройки
sidebar_position: 2
---

:::info

В этой статье рассказывается об AdGuard для Windows — многофункциональном блокировщике рекламы, который защищает ваше устройство на системном уровне. [Скачайте приложение AdGuard](https://agrd.io/download-kb-adblock), чтобы увидеть, как оно работает.

:::

Раздел _Настройки_ требует наибольшего внимания. Здесь вы можете настроить приложение в соответствии с вашими требованиями: блокировать определённые элементы или сайты, использовать DNS-сервер доверенного провайдера, удалять сторонние куки и так далее.

### General settings

Here you can set the language and theme (Dark or Light), enable AdGuard launching at system start-up and silent automatic updates, choose the update channel and filter update check interval. Also Settings is the place to go if AdGuard for Windows is not working properly and the support team asked you to [collect _Debug logs_](/adguard-for-windows/solving-problems/adguard-logs.md).

![Settings \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/general_settings.png)

At the very bottom of the screen you will find _Advanced Settings_. Changing some of them mindlessly may potentially cause problems with AdGuard’s performance, break the Internet connection or compromise your security and privacy. That’s why we suggest you open this section only if you are sure of what you are doing or our support team has asked you about it. If you want to know what can be set up in _Advanced Settings_, read the [dedicated article](/adguard-for-windows/solving-problems/low-level-settings.md).

![Advanced Settings \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/advanced_settings.png)

### Блокировка рекламы

Это основной модуль AdGuard для Windows, блокирующий рекламу на сайтах, которые вы посещаете, и в приложениях, установленных на вашем устройстве. Для фильтрации рекламы и контента, угрожающего конфиденциальности, такого как баннеры, всплывающие окна или трекеры, AdGuard использует разные фильтры — группы правил с похожим назначением, написанные с использованием [специального синтаксиса](/general/ad-filtering/create-own-filters). [Что такое фильтры и как они работают](/general/ad-filtering/how-ad-blocking-works)

![Блокировка рекламы \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/settings_ad_blocker.png)

В модуле Блокировка рекламы вы можете:

- включить автоматическую активацию языковых фильтров,
- отключить блокировку [поисковой рекламы и саморекламы](/general/ad-filtering/search-ads),
- отключить рекламу в меню «Пуск» на Windows 11,
- активировать предустановленные фильтры, такие как _Базовый фильтр_,
- установить фильтры из списка или добавить пользовательский фильтр, нажав на кнопку _Добавить фильтр_,
- внести изменения в существующие группы правил с помощью _Редактора фильтров_,
- посмотреть все запросы, отправленные браузерами и приложениями, установленными на вашем компьютере, в _Журнале фильтрации_. В нём вы также можете заблокировать или разблокировать любой запрос, создав пользовательское правило,
- составлять фильтр из собственных правил, написанных вручную, импортированных или созданных с помощью расширения Помощник AdGuard.

Прежде чем начать вручную писать собственные правила, прочитайте наше подробное [руководство по синтаксису](/general/ad-filtering/create-own-filters).

### Защита от трекинга

Многие сайты собирают данные о посетителях: IP-адреса, информацию о браузере и операционной системе, разрешении экрана и даже странице, с которой пользователь перешёл на сайт. Чтобы сохранить индивидуальные настройки, личные предпочтения или «узнать» посетителя при повторном визите, некоторые сайты помечают браузер специальными файлами cookie. _Защита от трекинга_ оберегает вашу личную информацию от подобных систем, собирающих данные и статистику.

![Защита от трекинга \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/stealth-mode.png)

You can flexibly adjust the work of _Tracking protection_: for instance, you can prohibit the website to receive the search request you used to find it on the Internet, automatically delete both third-party and website’s own cookies, and disable location sharing in your browser that can be used to track your whereabouts.

To learn everything about _Tracking protection_ and its many options, [read this article](/general/stealth-mode).

### Защита от фишинга

Защита от фишинга надёжно защищает от вредоносных и мошеннических сайтов. Нет, AdGuard для Windows — это не антивирус. Он не остановит загрузку вируса, если она уже началась, и не удалит уже существующие вирусы. Но он предупредит вас, если вы собираетесь перейти на сайт, домен которого был добавлен в нашу базу «ненадёжных сайтов», или загрузить файл с такого сайта. [Как работает Защита от фишинга](/general/browsing-security)

В этом модуле вы можете:

- включить уведомления для блокировки запросов к вредоносным и фишинговым сайтам,
- активировать звуковые уведомления,
- согласиться отправлять анонимную информацию, связанную с безопасностью, на сервер AdGuard, чтобы помочь нам поддерживать базу вредоносных и фишинговых сайтов в актуальном состоянии.

![Защита от фишинга \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/browsing-security.png)

[Больше о Защите от фишинга](/general/browsing-security)

### DNS-защита

Есть три важные причины, по которым вам может понадобиться изучить настройки DNS-защиты. Во-первых, чтобы вас не отслеживал интернет-провайдер. Каждый раз, когда вы открываете сайт, например, `google.com`, ваш браузер отправляет запрос на DNS-сервер, чтобы получить взамен IP-адрес сайта. Обычно DNS-сервер принадлежит вашему интернет-провайдеру, что позволяет ему отслеживать ваши действия в интернете. Во-вторых, для шифрования вашего DNS-трафика. И в-третьих — чтобы [блокировать контент на уровне DNS](https://adguard-dns.io/kb/general/dns-filtering/).

![DNS-защита \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/dns-settings.png)

В _DNS-защите_ вы можете выбрать DNS-серверы от известных DNS-провайдеров, в том числе [AdGuard DNS](https://adguard-dns.io/kb/), который блокирует рекламу и трекеры, AdGuard DNS Семейный, который дополнительно блокирует контент для взрослых, или Нефильтрующий AdGuard DNS, который обеспечивает безопасное и надёжное соединение, но ничего не фильтрует. Вы даже можете добавлять пользовательские DNS-серверы и правила, используя [синтаксис DNS-правил](https://adguard-dns.io/kb/general/dns-filtering-syntax/). При необходимости вы можете добавить [DNS-фильтры из списка](https://filterlists.com).

Начиная с версии 7.20, вы также можете добавлять фильтры, просто выбирая их из списка заранее созданных, доверенных фильтров. Для удобства они сгруппированы в четыре категории:

- **Основные**: блокируют рекламу и трекеры
- **Региональные**: блокируют рекламу и трекеры на сайтах на определённых языках
- **Безопасность**: блокируют фишинг и ненадёжные сайты
- **Другое**: охватывают особые случаи использования, которые не попадают в вышеуказанные категории

![DNS-фильтры \*border](https://cdn.adtidy.org/content/release_notes/ad_blocker/windows/v7.20/dns_filters/en.png)

### Parental control

Бывают сайты, доступ к которым стоит ограничивать, если компьютером пользуются дети. This task is accomplished by _Parental control_.

![Parental control \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/parental_control.png)

Модуль проверяет содержимое веб-страниц, открытых в браузере, и отфильтровывает страницы с нежелательным для детей контентом: изображения и тексты для взрослых, ненормативная лексика, насилие, пропаганда наркотиков и т. д. Parental control settings are password-protected so that the child is not able to go round the restrictions. Этот модуль не только блокирует доступ к нежелательным сайтам, но и удаляет неподходящие для детей ссылки из результатов поиска.

In the _Parental control_ module you can enable the _Safe search_ and manage the _blocklist_ and the _allowlist_ to customize how this option works. Вы также можете включить функцию _Запретить загрузку программ_, чтобы ваш ребёнок не мог загружать и устанавливать программное обеспечение на компьютер. There are two more options in the _Parental control_ module: you can select a specific Windows user to be protected by _Parental control_ and set a password to protect AdGuard settings from change.

### Браузерный помощник

![Браузерный помощник \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/browser_assistant.png)

Из этой вкладки вы можете легко перейти к установке Браузерного помощника AdGuard, основная функция которого — управлять фильтрацией прямо из браузера. Подробнее о том, как с ним работать и что делать, если для вашего браузера нет Помощника, мы рассказали [в отдельной статье](/adguard-for-windows/browser-assistant.md).
