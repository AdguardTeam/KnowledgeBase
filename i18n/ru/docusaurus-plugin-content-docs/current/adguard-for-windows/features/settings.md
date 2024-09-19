---
title: Настройки
sidebar_position: 2
---

:::info

В этой статье рассказывается об AdGuard для Windows — многофункциональном блокировщике рекламы, который защищает ваше устройство на системном уровне. [Скачайте приложение AdGuard](https://agrd.io/download-kb-adblock), чтобы увидеть, как оно работает

:::

_Settings_ is the section that requires the most attention. Здесь вы можете настроить приложение в соответствии с вашими требованиями: блокировать определённые элементы или сайты, использовать DNS-сервер доверенного провайдера, удалять сторонние куки и так далее.

![Settings \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/settings.png)

### Основные настройки

Здесь вы можете настроить язык и тему (Тёмная или Светлая), включение AdGuard при запуске системы и бесшумные автоматические обновления, выбрать канал обновления и установить интервал проверки обновлений. Also Settings is the place to go if AdGuard for Windows is not working properly and the support team asked you to [collect _Debug logs_](/adguard-for-windows/solving-problems/adguard-logs.md).

![Advanced Settings \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/advanced-settings.png)

At the very bottom of the screen you will find _Advanced Settings_. Изменение некоторых из них может потенциально вызвать проблемы с работой AdGuard, нарушить интернет-соединение или поставить под угрозу вашу безопасность и конфиденциальность. Заходите в этот раздел, только если вы уверены в своих действиях, или наша служба поддержки попросила вас об этом. If you want to know what can be set up in _Advanced Setting_ read the [dedicated article](/adguard-for-windows/solving-problems/low-level-settings.md).

### Блокировщик рекламы

Это основной модуль AdGuard для Windows, блокирующий рекламу на сайтах, которые вы посещаете, и в приложениях, установленных на вашем устройстве. To filter out advertising and privacy-threatening content such as banners, pop-ups, or trackers AdGuard uses different filters: groups of rules with a similar purpose written with a [special syntax](/general/ad-filtering/create-own-filters). To understand what filters are and how they work read [this article](/general/ad-filtering/how-ad-blocking-works).

![Ad Blocker \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/settings_ad_blocker.png)

В модуле Блокировщик рекламы вы можете:

- включить автоматическую активацию языковых фильтров,
- disable [search ads and self-promotion](/general/ad-filtering/search-ads) blocking,
- disable ads in the Start menu on Windows 11,
- activate pre-installed filters such as _AdGuard Base filter_,
- install filters from the list or add a custom filter by clicking the _Add a filter_ button,
- make changes to existing rule groups using the _Filter editor_ button,
- see all the requests sent by browsers and apps installed on your computer by clicking the _Filtering log_ button. В нём вы также можете заблокировать или разблокировать любой запрос, создав пользовательское правило,
- составлять фильтр из собственных правил, написанных вручную, импортированных или созданных с помощью расширения Помощник AdGuard.

Before you start manually writing your own rules read our detailed [syntax guide](/general/ad-filtering/create-own-filters).

### Защита от трекинга

Многие сайты собирают данные о посетителях: IP-адреса, информацию о браузере и операционной системе, разрешении экрана и даже странице, с которой пользователь перешёл на сайт. Чтобы сохранить индивидуальные настройки, личные предпочтения или «узнать» посетителя при повторном визите, некоторые сайты помечают браузер специальными файлами cookie. Антитрекинг призван защитить вашу личную информацию от подобных систем, собирающих данные и статистику.

![Stealth Mode \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/stealth-mode.png)

Работа этого модуля гибко настраивается: например, вы можете запретить сайту узнавать, что вы искали в поисковой системе, прежде чем попасть на этот сайт. Вы также можете автоматически удалять cookie, как принадлежащие сайту, так и сторонние, и отключить определение местоположения в браузере — оно может использоваться для отслеживания ваших перемещений.

To learn everything about Stealth Mode and its many options, [read this article](/general/stealth-mode).

### Защита от фишинга

Browsing security gives strong protection against malicious and phishing websites. Нет, AdGuard для Windows — это не антивирус. Он не остановит загрузку вируса, если она уже началась, и не удалит уже существующие вирусы. Но он предупредит вас, если вы собираетесь перейти на сайт, домен которого был добавлен в нашу базу «ненадёжных сайтов», или загрузить файл с такого сайта. You can find more information about how this module works in the [dedicated article](/general/browsing-security).

В этом модуле вы можете

- включить уведомления для блокировки запросов к вредоносным и фишинговым сайтам,
- активировать звуковые уведомления,
- agree to submit anonymous security-related info to the AdGuard server to help us keep the malicious and phishing websites database up to date.

![Browsing security \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/browsing-security.png)

In case you want to learn more about Browsing security, read [this article](/general/browsing-security).

### DNS-защита

Есть три важные причины, по которым вам может понадобиться изучить настройки DNS-защиты. Во-первых, чтобы вас не отслеживал интернет-провайдер. Every time you open a website, for example `google.com`, your browser sends a request to a DNS server to get the IP address of the website in return. Обычно DNS-сервер принадлежит вашему интернет-провайдеру, что позволяет ему отслеживать ваши действия в интернете. Во-вторых, для шифрования вашего DNS-трафика. And the third one is to [block content on DNS level](https://adguard-dns.io/kb/general/dns-filtering/).

![DNS Protection \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/dns-settings.png)

In the DNS protection module of AdGuard for Windows you can select the DNS servers from known DNS providers, including [AdGuard DNS](https://adguard-dns.io/kb/) that blocks ads and trackers, AdGuard DNS Family Protection that in addition blocks adult content, or AdGuard DNS Non-filtering that provides a secure and reliable connection, but doesn't filter anything. Вы даже можете добавить собственные DNS-серверы. Also there is an option to add custom rules using [DNS rule syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/). And if necessary, you can add [DNS filters of your choice](https://filterlists.com).

### Родительский контроль

There are several websites to which access should be restricted from a PC used by children. Эту задачу выполняет Родительский контроль.

![Parental Control \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/parental-control.png)

Модуль проверяет содержимое веб-страниц, открытых в браузере, и отфильтровывает страницы с нежелательным для детей контентом: изображения и тексты для взрослых, ненормативная лексика, насилие, пропаганда наркотиков и т. д. Настройки Родительского контроля защищены паролем, чтобы ребёнок не смог обойти ограничения. Этот модуль не только блокирует доступ к нежелательным сайтам, но и удаляет неподходящие для детей ссылки из результатов поиска.

In the _Parental Control_ module you can enable the _Safe search_ and manage the _blocklist_ and the _allowlist_ to customize how this option works. You can also check the _Block executable files download_ box to prevent your child from downloading and installing software on the computer. There are two more options in the _Parental Control_ module: you can select a specific Windows user to be protected by _Parental Control_ and set a password to protect AdGuard settings from change.

![Parental Control \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/parental-control.png)

### Браузерный помощник

![Browser Assistant \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/browser-assistant/browser-assistant.png)

Из этой вкладки вы можете легко перейти к установке Браузерного помощника AdGuard, основная функция которого — управлять фильтрацией прямо из браузера. We explained more about how to work with it and what to do if there is no Browser Assistant for your browser in the [separate article](/adguard-for-windows/browser-assistant.md).
