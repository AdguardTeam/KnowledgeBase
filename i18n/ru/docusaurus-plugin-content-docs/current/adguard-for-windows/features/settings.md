---
title: Настройки
sidebar_position: 2
---

:::info

В этой статье рассказывается об AdGuard для Windows — многофункциональном блокировщике рекламы, который защищает ваше устройство на системном уровне. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock).

:::

Раздел _Настройки_ требует наибольшего внимания. Здесь вы можете настроить приложение в соответствии с вашими требованиями: блокировать определённые элементы или сайты, использовать DNS-сервер доверенного провайдера, удалять сторонние куки и так далее.

![Settings \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/general_settings.png)

### Основные настройки

Здесь вы можете настроить язык и тему (Тёмная или Светлая), включение AdGuard при запуске системы и бесшумные автоматические обновления, выбрать канал обновления и установить интервал проверки обновлений. Если AdGuard для Windows работает некорректно и поддержка попросила вас [собрать логи](/adguard-for-windows/solving-problems/adguard-logs.md), вам тоже следует перейти в _Настройки_.

![Advanced Settings \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/advanced_settings.png)

В самом низу экрана вы найдёте _Расширенные настройки_. Changing some of them mindlessly may potentially cause problems with AdGuard’s performance, break the Internet connection or compromise your security and privacy. That’s why we suggest you open this section only if you are sure of what you are doing or our support team has asked you about it. If you want to know what can be set up in _Advanced Settings_, read the [dedicated article](/adguard-for-windows/solving-problems/low-level-settings.md).

### Ad blocking

Это основной модуль AdGuard для Windows, блокирующий рекламу на сайтах, которые вы посещаете, и в приложениях, установленных на вашем устройстве. Для фильтрации рекламы и контента, угрожающего конфиденциальности, такого как баннеры, всплывающие окна или трекеры, AdGuard использует разные фильтры — группы правил с похожим назначением, написанные с использованием [специального синтаксиса](/general/ad-filtering/create-own-filters). [Что такое фильтры и как они работают](/general/ad-filtering/how-ad-blocking-works)

![Ad blocking \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/ad_blocking.png)

In the Ad blocking module you can:

- включить автоматическую активацию языковых фильтров,
- отключить блокировку [поисковой рекламы и саморекламы](/general/ad-filtering/search-ads),
- отключить рекламу в меню «Пуск» на Windows 11,
- активировать предустановленные фильтры, такие как _Базовый фильтр_,
- установить фильтры из списка или добавить пользовательский фильтр, нажав на кнопку _Добавить фильтр_,
- внести изменения в существующие группы правил с помощью _Редактора фильтров_,
- посмотреть все запросы, отправленные браузерами и приложениями, установленными на вашем компьютере, в _Журнале фильтрации_. В нём вы также можете заблокировать или разблокировать любой запрос, создав пользовательское правило,
- составлять фильтр из собственных правил, написанных вручную, импортированных или созданных с помощью расширения Помощник AdGuard.

Прежде чем начать вручную писать собственные правила, прочитайте наше подробное [руководство по синтаксису](/general/ad-filtering/create-own-filters).

### Tracking protection

Многие сайты собирают данные о посетителях: IP-адреса, информацию о браузере и операционной системе, разрешении экрана и даже странице, с которой пользователь перешёл на сайт. Some web pages use cookies to mark the browser and save your personal settings, user preferences, or “recognize” you upon your next visit. _Tracking protection_ safeguards your personal information from such data and statistics gathering systems.

![Tracking protection \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/tracking_protection.png)

Работа этого модуля гибко настраивается: например, вы можете запретить сайту узнавать, что вы искали в поисковой системе, прежде чем попасть на этот сайт. Вы также можете автоматически удалять cookie, как принадлежащие сайту, так и сторонние, и отключить определение местоположения в браузере — оно может использоваться для отслеживания ваших перемещений.

[Больше о Защите от трекинга](/general/stealth-mode)

### Защита от фишинга

Защита от фишинга надёжно защищает от вредоносных и мошеннических сайтов. Нет, AdGuard для Windows — это не антивирус. It will neither stop the download of a virus when it’s already started, nor delete the already existing ones. But it will warn you if you’re about to proceed to a website whose domain has been added to our “untrusted sites” database, or to download a file from such website. [Как работает Защита от фишинга](/general/browsing-security)

В этом модуле вы можете:

- включить уведомления для блокировки запросов к вредоносным и фишинговым сайтам,
- активировать звуковые уведомления,
- согласиться отправлять анонимную информацию, связанную с безопасностью, на сервер AdGuard, чтобы помочь нам поддерживать базу вредоносных и фишинговых сайтов в актуальном состоянии.

![Browsing security \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/browsing_security.png)

[Больше о Защите от фишинга](/general/browsing-security)

### DNS-защита

Есть три важные причины, по которым вам может понадобиться изучить настройки DNS-защиты. Во-первых, чтобы вас не отслеживал интернет-провайдер. Каждый раз, когда вы открываете сайт, например, `google.com`, ваш браузер отправляет запрос на DNS-сервер, чтобы получить взамен IP-адрес сайта. Обычно DNS-сервер принадлежит вашему интернет-провайдеру, что позволяет ему отслеживать ваши действия в интернете. Во-вторых, для шифрования вашего DNS-трафика. И в-третьих — чтобы [блокировать контент на уровне DNS](https://adguard-dns.io/kb/general/dns-filtering/).

![DNS Protection \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/dns_protection.png)

В _DNS-защите_ вы можете выбрать DNS-серверы от известных DNS-провайдеров, в том числе [AdGuard DNS](https://adguard-dns.io/kb/), который блокирует рекламу и трекеры, AdGuard DNS Семейный, который дополнительно блокирует контент для взрослых, или Нефильтрующий AdGuard DNS, который обеспечивает безопасное и надёжное соединение, но ничего не фильтрует. Вы даже можете добавлять пользовательские DNS-серверы и правила, используя [синтаксис DNS-правил](https://adguard-dns.io/kb/general/dns-filtering-syntax/). При необходимости вы можете добавить [DNS-фильтры из списка](https://filterlists.com).

Начиная с версии 7.20, вы также можете добавлять фильтры, просто выбирая их из списка заранее созданных, доверенных фильтров. Для удобства они сгруппированы в четыре категории:

- **Основные**: блокируют рекламу и трекеры
- **Региональные**: блокируют рекламу и трекеры на сайтах на определённых языках
- **Безопасность**: блокируют фишинг и ненадёжные сайты
- **Другое**: охватывают особые случаи использования, которые не попадают в вышеуказанные категории

![DNS-фильтры \*border](https://cdn.adtidy.org/content/release_notes/ad_blocker/windows/v7.20/dns_filters/en.png)

### Родительский контроль

Бывают сайты, доступ к которым стоит ограничивать, если компьютером пользуются дети. This task is accomplished by _Parental Control_.

![Parental Control \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/parental_control.png)

Модуль проверяет содержимое веб-страниц, открытых в браузере, и отфильтровывает страницы с нежелательным для детей контентом: изображения и тексты для взрослых, ненормативная лексика, насилие, пропаганда наркотиков и т. д. Настройки Родительского контроля защищены паролем, чтобы ребёнок не смог обойти ограничения. Этот модуль не только блокирует доступ к нежелательным сайтам, но и удаляет неподходящие для детей ссылки из результатов поиска.

В модуле _Родительский контроль_ вы можете включить _Безопасный поиск_, а также указать, на какие сайты _Родительский контроль_ должен распространяться. Вы также можете включить функцию _Запретить загрузку программ_, чтобы ваш ребёнок не мог загружать и устанавливать программное обеспечение на компьютер. В модуле _Родительский контроль_ есть ещё две опции: вы можете выбрать конкретного пользователя Windows для защиты с помощью _Родительского контроля_ и установить пароль для защиты настроек AdGuard от изменений.

### Браузерный помощник

![Browser Assistant \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/browser_assistant.png)

From this tab you can easily proceed to install AdGuard Browser Assistant, which primary function is to manage filtering directly from the browser. We explained more about how to work with it and what to do if there is no Browser Assistant for your browser in the [separate article](/adguard-for-windows/browser-assistant.md).
